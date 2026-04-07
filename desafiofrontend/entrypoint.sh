#!/bin/sh
# Replace environment variable placeholders in compiled Angular JS
for file in /usr/share/nginx/html/main*.js; do
  sed -i \
    -e "s|\${API_URL}|${API_URL:-http://localhost:8080}|g" \
    -e "s|\${KEYCLOAK_URL}|${KEYCLOAK_URL:-http://localhost:8081}|g" \
    -e "s|\${KEYCLOAK_REALM}|${KEYCLOAK_REALM:-desafio-logap}|g" \
    -e "s|\${KEYCLOAK_CLIENT_ID}|${KEYCLOAK_CLIENT_ID:-desafiobackend-api}|g" \
    "$file"
done
exec nginx -g "daemon off;"
