# CRUD PESSOAS

Desenvolvimento de uma API REST para listar, adicionar e excluir informações de uma lista pessoas jurídicas com os seguintes dados: razão social, nome fantasia (opcional), CNPJ e data de abertura.

#### Requisitos:

TypeScript, TypeORM e Express;
A persistência das informações deve ser em base de dados relacional (desejável MySQL);
Não é necessário editar informações.


## Stacks e libs utilizadas
- [x] Typescript
- [x] TyperORM
- [x] NodeJS
- [x] Express
- [x] Eslint
- [x] Prettier
- [x] MySQL


## Instalação

Use o pacote [yarn](https://yarnpkg.com/) para rodar o projeto

```bash
yarn
```

ou

Use o pacote [npm](https://www.npmjs.com/) para rodar o projeto

```bash
npm install
```
## Como usar

```
ROTAS

## Para listar todas as pessoas cadastradas
GET /pessoas

return [
    {
        "id": 1,
        "razaoSocial": "MCDONALD'S COMÉRCIO",
        "nomeFantasia": "MCDONALD'S",
        "cnpj": 35.586.657.0001/12,
        "dataAbertura": "2020-06-05"
    },
    {
        "id": 2,
        "razaoSocial": "BubbleKill Bebidas e Sucos",
        "nomeFantasia": BubbleKill,
        "cnpj": 35.236.657.0001/12,
        "dataAbertura": "2020-06-05"
    }
]

## Para criar uma pessoa
POST /pessoas

Enviar no corpo da requisição um JSON, seguindo a seguinte estrutura:
{
    "razaoSocial": "Spoleto Massas",
    "nomeFantasia": "Spoleto",
    "cnpj": "10.5453.4320423",
    "dataAbertura": "2020-10-05"
}

return {
    "razaoSocial": "Spoleto Massas",
    "nomeFantasia": "Spoleto",
    "cnpj": "10.5453.4320423",
    "dataAbertura": "2020-10-05"
}

## Para deletar uma pessoa enviar o id
DELETE /pessoas/:id

return { message: 'Usuário deletado com sucesso'}

```

## License
[MIT](https://choosealicense.com/licenses/mit/)
