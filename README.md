# Reels | EJCM

Projeto que busca desenvolver uma rede social onde o usuário pode postar pequenos vídeos e adicionar trilhas sonoras a eles.

**Status do Projeto** : Em desenvolvimento

![Badge](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Badge](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## Tabela de Conteúdo

_Faça um índice com links internos para todos os tópicos seguintes._

1.  [Tecnologias utilizadas](#tecnologias-utilizadas)
2.  [Instalação](#instalação)
3.  [Configuração](#configuração)
4.  [Uso](#uso)
5.  [Arquitetura](#arquitetura)
6.  [Autores](#autores)

## Tecnologias utilizadas

Essas são as frameworks e ferramentas que você precisará instalar para desenvolver esse projeto:

- Node
- Git

Outras tecnologias interessantes que foram implementadas:

- Style-components
- Expo
- Prisma

## Instalação

```bash
$ git clone https://github.com/gabrielayresdev/Reels.git
```

## Configuração

Na pasta back, precisamos configurar o ambiente. Começamos mudando o nome do arquivo .env.example na raiz do projeto para .env
e depois mudamos a variável DATABASE_URL substituindo os conteúdos das chave pelo valor correspondente ao seu banco de dados

```js
DATABASE_URL =
  "postgresql://{dbname}:{dbpassword}@localhost:5432/{DATABASE}?schema=public";
```

também é necessário modificar as varáveis {ip} nos arquivos UserAuth, Post, Login e Feed pelo ip do seu computador.

## Uso

depois realizamos os seguintes comandos

```bash
npm install
npm run migrate
npm run keys
```

e por fim, para iniciar nosso backend,

```bash
npm run start
```

na pasta do front, é necessário apenas dos comandos

```bash
npm install
npm run start
```

> **Atenção**
> É importante que o frontend seja executado no app Expo-go para funcionar corretamente

## Arquitetura

- [Figma](https://www.figma.com/design/Q2nBrQ1E8kUlg8hS9xQXAd/PSI---Tech-Lead?node-id=0-1&t=LRLix1A8fHpHGGbs-1)
- [Modelagem](https://prnt.sc/7aqQk5AWJfOV)

## Autores

> Gabriel Ayres

## Última atualização: 24/05/2024
