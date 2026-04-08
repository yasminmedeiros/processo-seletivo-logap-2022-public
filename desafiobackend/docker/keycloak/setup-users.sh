#!/bin/sh
set -e

KEYCLOAK_URL="http://keycloak:8081"
REALM="desafio-logap"
ADMIN_USER="admin"
ADMIN_PASS="admin"
CLIENT_ID_CLI="admin-cli"

echo "Aguardando Keycloak ficar disponivel..."
until curl -sf "$KEYCLOAK_URL/realms/master" > /dev/null 2>&1; do
  sleep 3
done
echo "Keycloak pronto."

extract_json_string() {
  KEY="$1"
  sed -n "s/.*\"$KEY\"[[:space:]]*:[[:space:]]*\"\([^\"]*\)\".*/\1/p" | head -n 1
}

# Obtém token do admin (com retry)
TOKEN=""
for i in 1 2 3 4 5 6 7 8 9 10; do
  RESPONSE=$(curl -s -X POST "$KEYCLOAK_URL/realms/master/protocol/openid-connect/token" \
    -H "Content-Type: application/x-www-form-urlencoded" \
    -d "grant_type=password&client_id=$CLIENT_ID_CLI&username=$ADMIN_USER&password=$ADMIN_PASS")

  TOKEN=$(echo "$RESPONSE" | extract_json_string "access_token")
  if [ -n "$TOKEN" ]; then
    break
  fi

  echo "Tentativa $i: token admin ainda indisponivel. Resposta: $RESPONSE"
  sleep 2
done

if [ -z "$TOKEN" ]; then
  echo "ERRO: nao foi possivel obter token do admin"
  exit 1
fi
echo "Token admin obtido."

create_or_update_user() {
  USERNAME="$1"
  PASSWORD="$2"
  EMAIL="$3"
  FIRSTNAME="$4"
  LASTNAME="$5"

  # Verifica se usuário já existe
  USER_ID=$(curl -s "$KEYCLOAK_URL/admin/realms/$REALM/users?username=$USERNAME" \
    -H "Authorization: Bearer $TOKEN" \
    | extract_json_string "id")

  if [ -n "$USER_ID" ]; then
    echo "Usuario '$USERNAME' ja existe (id=$USER_ID), atualizando senha..."
  else
    echo "Criando usuario '$USERNAME'..."
    STATUS=$(curl -s -o /dev/null -w "%{http_code}" -X POST "$KEYCLOAK_URL/admin/realms/$REALM/users" \
      -H "Authorization: Bearer $TOKEN" \
      -H "Content-Type: application/json" \
      -d "{
        \"username\": \"$USERNAME\",
        \"email\": \"$EMAIL\",
        \"firstName\": \"$FIRSTNAME\",
        \"lastName\": \"$LASTNAME\",
        \"enabled\": true,
        \"emailVerified\": true,
        \"requiredActions\": []
      }")
    echo "Criacao do usuario '$USERNAME': HTTP $STATUS"

    if [ "$STATUS" != "201" ] && [ "$STATUS" != "409" ]; then
      echo "ERRO: falha ao criar usuario '$USERNAME'"
      exit 1
    fi

    USER_ID=$(curl -s "$KEYCLOAK_URL/admin/realms/$REALM/users?username=$USERNAME" \
      -H "Authorization: Bearer $TOKEN" \
      | extract_json_string "id")
  fi

  if [ -z "$USER_ID" ]; then
    echo "ERRO: nao foi possivel resolver o id do usuario '$USERNAME'"
    exit 1
  fi

  # Define senha
  PASS_STATUS=$(curl -s -o /dev/null -w "%{http_code}" -X PUT \
    "$KEYCLOAK_URL/admin/realms/$REALM/users/$USER_ID/reset-password" \
    -H "Authorization: Bearer $TOKEN" \
    -H "Content-Type: application/json" \
    -d "{\"type\":\"password\",\"value\":\"$PASSWORD\",\"temporary\":false}")
  echo "Senha do usuario '$USERNAME': HTTP $PASS_STATUS"

  if [ "$PASS_STATUS" != "204" ]; then
    echo "ERRO: falha ao definir senha do usuario '$USERNAME'"
    exit 1
  fi
}

create_or_update_user "user"     "user-123"     "user@desafio.local"     "Default" "User"
create_or_update_user "api-user" "api-user-123" "api-user@desafio.local" "API"     "User"

# Valida explicitamente o fluxo ROPC do usuario default.
LOGIN_RESPONSE=$(curl -s -X POST "$KEYCLOAK_URL/realms/$REALM/protocol/openid-connect/token" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=password&client_id=desafiobackend-api&username=user&password=user-123")

LOGIN_TOKEN=$(echo "$LOGIN_RESPONSE" | extract_json_string "access_token")
if [ -z "$LOGIN_TOKEN" ]; then
  echo "ERRO: validacao de login ROPC falhou. Resposta: $LOGIN_RESPONSE"
  exit 1
fi

echo "Setup de usuarios concluido."
