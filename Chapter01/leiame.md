# JavaScript - Uma Visão Geral

## Introdução

JavaScript é uma linguagem de programação amplamente utilizada para desenvolvimento web, tanto no frontend quanto no backend. Sua versatilidade permite a criação de aplicações para diversas plataformas.

## Onde o JavaScript pode ser utilizado?

- **Backend:** com **Node.js**
- **Mobile:** com **Apache Cordova**
- **Desktop:** com **Electron**
- **Internet das Coisas (IoT):** através de plataformas compatíveis

## Criando um Servidor Web com Node.js

Para iniciar rapidamente um servidor web com Node.js, utilize o pacote `http-server`:

```bash
npm install -g http-server
```

## Variáveis em JavaScript

As variáveis armazenam dados que podem ser definidos, atualizados e recuperados conforme necessário. Em JavaScript, os tipos de dados incluem:

### Tipos primitivos

- **string**: texto
- **number**: números inteiros ou de ponto flutuante
- **boolean**: verdadeiro (`true`) ou falso (`false`)
- **null**: representa intencionalmente um valor vazio
- **undefined**: uma variável declarada, mas sem valor atribuído
- **symbol**: um identificador único

### Tipos derivados (objetos)

- **Objetos JavaScript** (JSON, instâncias de classe, etc.)
- **Arrays**
- **Funções**
- **Expressões regulares (RegExp)**
- **Datas (Date)**

O JavaScript também aceita o operador `delete`, que remove propriedades de um objeto.

## Orientação a Objetos em JavaScript

Em JavaScript, objetos podem ser criados de diferentes formas:

### Criando um objeto vazio

```js
let obj = {};
```

### Criando um objeto com `new Object()`

```js
let obj = new Object();
```

### Criando um objeto com propriedades aninhadas

```js
let obj = {
  name: {
    first: 'Nome',
    last: 'Sobrenome'
  },
  address: 'Endereço'
};
```

## Funções e Métodos em JavaScript

Funções (também chamadas de métodos quando associadas a objetos) são um elemento essencial da linguagem.

### Criando um método para um objeto

```js
Book.prototype.printTitle = function () {
  console.log(this.title);
};
book.printTitle();
```

### Definindo funções dentro de uma classe

```js
function Book(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
  
  this.printIsbn = function () {
    console.log(this.isbn);
  };
}

let book = new Book('JavaScript Avançado', 300, '123456789');
book.printIsbn();
```

## Conclusão

JavaScript é uma linguagem versátil e essencial para o desenvolvimento moderno. Seu uso abrange diversas áreas, e entender seus conceitos fundamentais é crucial para qualquer desenvolvedor.
