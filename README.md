![Design sem nome](https://github.com/user-attachments/assets/bf13773a-88c8-40cf-b41c-1d6bca720f8c)
# Teste Caju Front-end - Solução

Esse é a conclusão do desafio técnico da vaga de Front-End da Caju Benefícios. Abaixo vou listar as especificações e requisitos para a conclusão do teste, e coisas foram feitas fora do solicitado.

## Features Implementadas

### Dashboard

- [x] Implementar `GET` ao carregar a pagina e ao fazer pequisa por `CPF`
- [x] Filtrar os cards por coluna, usando o status.
- [x] Implementar `PUT` ao clicar em Reprovar e alterar o status para `REPROVED`
- [x] Implementar `PUT` ao clicar em Aprovar e alterar o status para `APPROVED`
- [x] Implementar `PUT` ao clicar em Revisar novamente e alterar o status para `REVIEW`
- [x] Implementar `DELETE` ao clicar no lixeira no card.
- [x] O botão de `Reprovar` e `Aprovar` só deve aparecer em admissões com o status `REVIEW`
- [x] O botão `Revisar novamente` só deve aparecer em admissões com o status `REPROVED` ou `APPROVED`
- [x] Implementar um loading na tela ao realizar requisições.
- [x] Todas as ações devem ter modal de confirmação e uma notificação de sucesso ou erro
- [x] Na pesquisa por CPF realizar a requisição automaticamente ao preencher um CPF válido
- [x] Adicionar máscara de CPF no campo de pesquisa.
- [x] Atualizar os dados (refetch) ao clicar no ícone de atualizar

### Formulário de Cadastro

- [x] Implementar validação no campo de `email` para que aceite apenas emails válidos
- [x] Implementar validação no campo `nome completo` para que aceite pelo menos um espaço, no mínimo duas letras, e que a primeira letra não seja um número.
- [x] Implementar validação no campo CPF para aceitar apenas CPFs válidos e adicionar uma máscara de CPF ao campo.
- [x] Implementar `POST` ao preencher todos os campos corretamentes.
- [x] Redirecionar ao `/dashboard` ao criar uma nova admissão.

## Novas Features

### Drag and Drop

Foi adicionado a feature de Drag and Drop para mudar registros de colunas e para mudar a ordem dos registros com a finalidade de melhorar a experiencia do usuário.

![Gravando2024-10-25141625-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/1bfc2fcd-3eb3-43ed-80e1-2e819baecf5a)

### Docker

O Docker foi adicionado para facilitar a execução e deploy da aplicação.

### Design Pattern

#### Factory Pattern
![image](https://github.com/user-attachments/assets/ed3bb5d2-2b4c-42f5-9725-9f49865fc946)

Como Design Pattern, foi utilizado o Factory Pattern para a criação de novas instancia de registro para facilitar a execução dos testes.


### Arquitetura

Ao invés de somente criar as página, eu decidi criar um design system que padronizasse os componentes da aplicação.
Para isso, me inspirei no Atomic Design para criar componentes padronizados e reutilizáveis.

```
src
├── components
│   ├── Button
│   ├── Card
│   ├── Container
│   ├── HookForm
│   ├── IconButton
│   ├── Modal
│   ├── Snackbar
│   ├── Stack
│   ├── TextField
│   └── Typography
├── constants
├── contexts
│   └── registration
├── factories
├── hooks
├── layouts
├── locales
├── pages
│   ├── Dashboard
│   └── NewUser
├── router
├── sections
│   ├── Column
│   ├── Columns
│   ├── Header
│   ├── Loading
│   ├── RegistrationCard
│   └── SearchBar
├── theme
├── types
└── utils
```

## CI/CD

### CI
Para a execução de CI e para garantir a qualidade do código, foi utilizado o Github Actions, Docker, Jest e Eslint.

### CD
Para realizar o deploy da aplicação, foi utilizado Github Action, Docker e AWS ECS

![Enterprise AWS_page-0001](https://github.com/user-attachments/assets/01d73c3f-e753-498f-8d4c-ef65337ac80b)

## Rodar o projeto

1. Realize o clone do repositório

```shell
git clone https://github.com/caju-beneficios/caju-front-teste-1.git
cd caju-front-test-1
```

2. Adicione as variáveis de ambiente no arquivo `.env`.

### Docker

3. Instale o [Docker Desktop](https://www.docker.com/products/docker-desktop/) em sua máquina caso esteja utilizando Windows.
4. Inicialize o Docker abrindo o Docker Desktop.
5. Rode a aplicação:

```shell
docker compose up --build
```

6. Acesse `http://localhost:3000/`

### Manualmente

Inicie o servidor do Json Web Server para consumir a API

3. Instale as dependencias

```shell
yarn
```

4. Execute a aplicação

```shell
yarn dev
```

3. Execute o Json-Server

```shell
yarn init:db
```

4. Acesse `http://localhost:3000/`

## Testes

Eu utilizei o Jest para escrever os testes unitários.

![Gravando2024-10-25150427-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/7610d4fc-47ec-4296-bf0d-8237a3f6a2b8)

Para rodar os testes:

```shell
yarn jest
```

ou

```shell
docker compose run frontend yarn jest
```

