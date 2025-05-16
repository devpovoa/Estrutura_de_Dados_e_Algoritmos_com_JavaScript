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
npm install --global http-server
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



## Variáveis locais e globais

Talvez você ouça falar que variáveis globais em JavaScript são prejudiciais, e isso é verdade. Em geral, a qualidade do código-fonte JavaScript é avaliado de acordo com o número de variáveis e funções globais (um número elevado é ruim). Portanto, sempre que possível, procure evitar as variáveis globais.



## Operadores

Precisamos de operadores quando realizamos qualquer operação em uma linguagem de programação. A linguagem JavaScript também tem operadores aritméticos, de atribuição, de comparação, lógicos, bit a bit (bitwise) e unários, entre outros.

O operador **typeof** devolve o tipo da variável ou expressão.



## Verdadeiro e falso

Em JavaScript, os valores booleanos `true` e `false` representam verdadeiro e falso, respectivamente. No entanto, ao avaliar expressões em contextos booleanos (como em condicionais), o JavaScript usa um conceito chamado _truthy_ e _falsy_. Por exemplo, uma string não vazia como `"Packt"` é considerada _truthy_ (verdadeira), enquanto uma string vazia `""` é _falsy_ (falsa).

O mesmo acontece com arrays e objetos: mesmo que estejam vazios (`[]` ou `{}`), eles ainda são _truthy_, pois são instâncias válidas ocupando espaço na memória.



## Orientação a Objetos em JavaScript

Objetos JavaScript são coleções bem simples de pares nome-valor. Em JavaScript, objetos podem ser criados de diferentes formas:

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

Em **POO** (Programação Orientada a Objetos), um objeto é uma instância de uma classe. Uma classe define as características do objeto.

```js
class Book {
    // Método construtor da classe Book.
    function Book(title, pages, isbn){
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
    }
}
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
