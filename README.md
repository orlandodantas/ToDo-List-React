<h1>ToDo List React</h1> 

<p align="center">
  <img src="http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge"/>
</p>

### Tópicos 

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Funcionalidades](#funcionalidades)

:small_blue_diamond: [Deploy da Aplicação](#deploy-da-aplicação-dash)

:small_blue_diamond: [Pré-requisitos](#pré-requisitos)

:small_blue_diamond: [Como rodar a aplicação](#como-rodar-a-aplicação-arrow_forward)

## Descrição do projeto 

<p align="justify">
  Esta é a interface para criação de listas de tarefas proposto em um Blitz de carreira da Trybe, com o intuito de criarmos um projeto
  completo do zero, incluindo <a href="https://github.com/orlandodantas/ToDo-List-API">API</a> e Interface...
</p>

<p>Com essa aplicação é possível criar e gerenciar uma lista de tarefas por usuário, sendo possível ainda editar o status, e fazer três
  tipos de ordenação.
</p>

<p>O maior desafio enfrentado aqui foi o tempo. Pois tivemos três tardes, para planejar todo o projeto, desenvolver o
  <a href="https://github.com/orlandodantas/ToDo-List-API">Back-End</a> e Front-End.
</p>

## Funcionalidades

:heavy_check_mark: Cadastrar usuários

:heavy_check_mark: Cadastrar tarefas

:heavy_check_mark: Editar descrição da tarefas

:heavy_check_mark: editar o status da tarefas

:heavy_check_mark: Excluir tarefa

:heavy_check_mark: Ordenar tarefas

## Layout e Deploy da Aplicação :dash:

> Pode ver a aplicação completa em funcionamento aqui: https://todo-list-react-orlandodantas.vercel.app/

> Link do projeto Back-End: https://github.com/orlandodantas/ToDo-List-API

<div style="flex">
  <img width="380px" src="https://i.imgur.com/lnj4S4w.png">
  <img width="380px" src="https://i.imgur.com/Pmp6rF5.png">
  <img width="380px" src="https://i.imgur.com/JJseZVm.png">
  <img width="380px" src="https://i.imgur.com/QwGA1Hd.png">
</div>

## Pré-requisitos

:warning: [Node](https://nodejs.org/en/download/)

## Como rodar a aplicação :arrow_forward:

#### No terminal:
Clone o projeto: 

```sh
git clone https://github.com/orlandodantas/ToDo-List-React.git
```

Entre na pasta:

```sh
cd ToDo-List-React
```

Instale as dependências:

```sh
npm install
```

Renomei o arquivo .env.exemple para .env:
> Unix
```sh
mv .env.exemple .env
```

> Windows
```sh
rename .env.exemple .env
```
> :warning: Atenção caso necessário modifique o endereço e a porta da aplicação [Back-End](https://github.com/orlandodantas/ToDo-List-API)
no arquivo que acabou de editar.

Execute a aplicação:

```sh
npm run dev
```

> :warning: Atenção para que a aplicação funcione por completo é preciso está rodando a aplicação back-end que pode ser implantada seguindo
os passos da aplicação [Back-End](https://github.com/orlandodantas/ToDo-List-API).

## Linguagens, dependencias e libs utilizadas :books:

- [React](https://pt-br.reactjs.org/docs/create-a-new-react-app.html)
- [React Router Dom](https://reactrouter.com/docs/en/v6/getting-started/overview)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Loading](https://github.com/fakiolinho/react-loading)
- [React Modal](https://www.npmjs.com/package/react-modal)
- [SWR](https://swr.vercel.app/pt-BR)
- [Tailwind CSS](https://tailwindcss.com/docs/installation)
- [EsLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Licença 

The [MIT License]() (MIT)

Copyright :copyright: 2022 - ToDo List React
