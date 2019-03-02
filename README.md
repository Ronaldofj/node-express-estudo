# Configuração Node para Estudos

## Sumário

- Configuração do Ambiente de Desenvovimento
- Estrutura de Pastas do Projeto
- Configuração do Express e do Servidor Node
- Configuração da View Engine
- Configuração do Banco de Dados

## Eslint e Editor Config.

Para instalar o eslint, use o comando abaixo no seu terminal:

> yarn add eslint -D

Depois de instalar o eslint, precisamos iniciar e escolher as opções de acordo com o Projeto:

Para iniciar o eslint, use o seguinte código no seu terminal:

> yarn eslint --init

Há alguns passos para instalar o eslint, você tem que escolher entre algumas opções, que depende de cada projeto.

O Edito Config também depende de cada Desenvolvedor.

## Estrutura de Pastas do Projeto

A Pasta principal do projeto é a src, e segue a seguinte estrutura:

- src
  - app
    - controllers
    - middlewares
    - models
    - views
  - config
  - database
    - migrations

## Configurando o Express e o Servidor Node

A configuração será feita no arquivo server.js, e iremos utilizar uma classe para confiurar nosso express:
