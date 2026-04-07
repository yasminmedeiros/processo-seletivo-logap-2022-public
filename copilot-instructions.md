# Copilot Instructions - processo-seletivo-logap-2022-public

## Objetivo
Este arquivo orienta a IA para fazer alteracoes futuras com seguranca, consistencia e baixo risco de regressao neste monorepo.

## Escopo do Projeto
- Backend: Spring Boot (Java 11) em desafiobackend.
- Frontend: Angular 15 (TypeScript) em desafiofrontend.
- O projeto contem CRUD de produtos/categorias/fornecedores e uma rota de logica (/logicProgram).

## Regras Gerais (Rigor Medio)
1. Priorize alteracoes pequenas e direcionadas ao pedido.
2. Nao faca refatoracoes amplas sem solicitacao explicita.
3. Preserve contratos existentes (rotas, payloads, nomes de campos) quando nao houver pedido de quebra.
4. Mantenha o padrao atual do projeto antes de introduzir novos padroes.
5. Ao assumir algo nao explicito, documente a suposicao na resposta final.
6. Se houver risco alto de regressao, sinalize antes de concluir.

## Fluxo Obrigatorio por Tarefa
1. Entender o pedido e mapear arquivos impactados.
2. Editar somente o necessario para atender o requisito.
3. Validar com comandos da stack afetada.
4. Informar o que foi alterado, impacto e limitacoes.

## Convencoes do Backend (desafiobackend)
- Stack base:
  - Spring Boot 2.7.x
  - Java 11
  - Spring Data JPA
  - Gradle Wrapper
- Estrutura atual principal:
  - controller/
  - model/
  - repository/
  - exception/
- Padrao observado:
  - Controllers acessam repositories diretamente.
  - Tratamento de erros via classes de Exception + Advice.
- Diretrizes para alteracoes:
  1. Nao mudar assinaturas de endpoints existentes sem pedido explicito.
  2. Manter compatibilidade de JSON retornado quando possivel.
  3. Evitar alterar configuracoes de banco/propriedades sem necessidade.
  4. Para novas regras de negocio, preferir implementacao clara e testavel.

## Convencoes do Frontend (desafiofrontend)
- Stack base:
  - Angular 15
  - TypeScript
  - Angular Material
  - TailwindCSS
  - CoreUI (toast)
- Organizacao atual principal:
  - component/get, component/post, component/put, component/report, component/sidebar
  - service/{category,product,provider}
  - interfaces/
- Diretrizes para alteracoes:
  1. Preservar estrutura de componentes por operacao (get/post/put/report), salvo pedido contrario.
  2. Evitar regressao visual nao solicitada.
  3. Evitar renomear rotas/componentes sem necessidade funcional.
  4. Manter tipagem coerente com interfaces existentes.

## Validacao Recomendada
Execute apenas o que for relevante para o escopo alterado.

### Backend
Na pasta desafiobackend:
- .\gradlew.bat build
- .\gradlew.bat test
- .\gradlew.bat bootRun (quando precisar validar execucao local)

### Frontend
Na pasta desafiofrontend:
- npm run lint
- npm run build
- npm test (quando houver alteracao com impacto em comportamento)

## Limites de Escopo
- Nao alterar versoes de framework/dependencias sem pedido explicito.
- Nao migrar arquitetura (ex.: introduzir camadas novas em massa) sem pedido.
- Nao ajustar CI/CD, deploy ou infraestrutura sem solicitacao.

## Checklist de Entrega da IA
Antes de finalizar qualquer solicitacao, confirme:
1. Pedido atendido exatamente.
2. Apenas arquivos necessarios foram alterados.
3. Validacoes relevantes foram executadas (ou justificar quando nao executadas).
4. Nao houve quebra intencional de contrato sem alinhamento.
5. Resumo final claro com impactos e proximos passos opcionais.
