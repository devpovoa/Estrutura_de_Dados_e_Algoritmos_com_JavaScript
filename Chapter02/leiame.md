# Visão geral sobre ECMAScript e TypeScript

A linguagem JavaScript evolui a cada ano. Desde 2015, tem havido uma nova versão lançada a cada ano, que chamamos de **ECMAScript**, e, como JavaScript é uma linguagem muito potente, ela é usada também em desenvolvimentos corporativos.

### let e const

Variáveis que são declaradas como **<code>let</code>** , tem seu valor alterado em tempo de interpretação ou compilação.  

Variáveis que são declaradas como **<code>const</code>** , seus valores são apenas para leitura, mesmo se for um objeto, a referencia ao local não pode ser alterada.

### Templates literais

1. Sem templates literais
   
   ```js
   const book = {name: 'Alguma coisa...'};
   console.log('Isso junta com ' + book.name + '\npara chegar a outra coisa, \ne acabar com outra coisa...');
   ```

2. Com uso de templates literais
   
   ```js
   console.log(`Isso junta com ${book.name}
   para chegar a outra coisa,
   e acabar com outra coisa...`);
   ```
   
   

### Funções de seta

1. Declarando uma **Function** tradicional.
   
   ```js
   const circleAreaES5 = function circleArea(r){
     const PI = 3.14;
     const area = PI * r * r;
     return area;
   };
   console.log(circleAreaES5(2));
   ```
   
   

2. Declarando uma **Arrow Function**
   
   ```js
   const circleArea = (r) =>{
       const PI = 3.14;
       const area = PI * r * r;
       return area;
   };
   console.log(circleArea(2));
   ```
   
   

3. Simplificando a **Arrow Function** em caso de uma única linha
   
   ```js
   const circleArea2 = (r) => 3.14 * r * r;
   console.log(circleArea2(2));
   ```
   
   

4. Simplificando a **Arrow Function** em caso de uma única linha sem _argumentos_.
   
   ```js
   const hello = () => console.log('hello!');
   hello();
   ```
   
   

### Valores default para parâmentros de funções

```js
function sum(x = 1, y = 2, z = 3){
    return x + y + z;
};
console.log(sum(4,2));
```

Como não estamos passando **z** como parâmetro, ele terá um valor igual a **3** como default.



### Declarando os operadores de espalhamento e rest

Na ES5, podemos transformar arrays em parâmetros usando a função **apply( )**.

```js
let params = [3, 4, 5];
console.log(sum.apply(undefined, params));
```



A ES2015 tem o operador de espalhamento (spread operator), representado por **...**, para isso.

```js
let params = [3, 4, 5];
console.log(sum(...params));
```

O operador de espalhamento **(...)** também pode ser usado como um parâmetro rest em funções para substituir **arguments**.

```js
function restParamaterFunction(x,y){
  const a = Array.prototype.slice.call(arguments, 2);
    return (x + y) * a.length;
};
console.log(restParamaterFunction(1, 2, 'Hello', true, 7));
```

Com o uso de **rest**

```js
function restParamaterFunction(x, y, ...a){
  return (x + y) * a.length; 
};
console.log(restParamaterFunction(1, 2, 'Hello', true, 7));
```

### Propriedades melhoradas de objetos

A ES6 introduziu um conceito chamado **desestruturação de array** (array destructuring), que é uma maneira de inicializar variáveis de uma só vez.

```js
let [x, y] = ['a', 'b'];
```

É o mesmo que dizer:

```js
let x = 'a';
let y = 'b';
```

A desestruturação de array também pode ser usada para trocar valores (fazer swap) de uma só vez, sem a necessidade de criar variáveis **temp**, deste modo:

```js
[x, y] = [y, x];
```

O código anterior é o mesmo que:

```js
let temp = x;
x = y;
y = temp;
```

Há também outra funcionalidade chamada **abreviação de propriedades** (property shorthand), que é outra maneira de executar a desestruturação de objetos.

```js
let [x, y] = ['a', 'b'];
let obj = {x, y};
console.log(obj);
```

O código anterior é o mesmo que:

```js
let x = 'a';
let y = 'b';
let obj2 = {x:x, y:y};
console.log(obj2);
```

Outro funcionalidade se chama **nomes de métodos abreviados** (shorthand method names).

```js
const hello = {
    name: 'asdf',
    printHello(){
        console.log('Hello');
    }
};
console.log(hello.printHello());
```

O código anterior é o mesmo que:

```js
const hello = {
  name: 'asdf',
    printHello: function printHello(){
        console.log('Hello');
    }
};
console.log(hello.printHello());
```



### Programação orientada a objetos com classes

```js
function Book(title, pages, isbn){
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
};
Book.propotype.printTitle = function(){
    console.log(this.title);
};
```

Com a ES2015, podemos simplificar a sintaxe e usar o código a seguir:

```js
class Book {
    constructor(title, pages, isbn){
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
    };

    printIsbn(){
    console.log(this.isbn);
    };
};
```

### Herança

```js
class ITBook extends Book {
    constructor(title, pages, isbn, technology){
        super(title, pages, isbn);
        this.technology = technology;
    };
    printTechnology(){
        console.log(this.technology);
    };
};
let jsBook = new ITBook('Lerning JS Algorithms', '200', '123456789', 'JavaScript');
```

Embora a sintaxe dessa nova forma de declarar classes em JavaScript seja muito semelhante a outras linguagens de programação como Java e C/C++, é bom lembrar que a programação orientada a objetos em JavaScript é feita por meio de um protótipo.



### Getters e Setters em JavaScript

```js
class Person {
    constructor(name){
        this._name = name;
    };

    get name(){
        return this._name;
    };

    set name(value){
        this._name = value;
    };
};

let lotrChar = new Person('Frodo');
console.log(lorthChar.name);
```

Embora os atributos de classe não sejam privados como em outras linguagens orientadas a objetos (o conceito de encapsulamento), é bom seguir um padrão de nomenclatura. Para transparecer que um atributo é **privado** faz se o uso do **_underscore_** na frente do nome: **<code>this._name</code>**.



### Operador de exponencial

```js
const area = 3.14 * r * r;
```



Ou usando a função **Math.pow**  para escrever o mesmo código:

```js
const area = 3.14 * Math.pow(r, 2);
```

A ES2016 introduziu o operador ****** , concebido para ser o novo operador de exponencial.

```js
const area = 3.14 * (r ** 2);
```



### Módulos

Usa-se **export** para torna visíveis aos outros módulos ou arquivos e **import** para chamar esses módulos.

Basicamente, os módulos são códigos JavaScript declarados em arquivos separados. Podemos importar as funções, as variáveis e as classes de outros arquivos diretamente no código JavaScript (sem a necessidade de importar vários arquivos no HTML antes - e na ordem correta - como costumávamos fazer há alguns anos, antes que o JavaScript se tornasse moderno e popular). Os módulos nos permitem organizar melhor o nosso código se estivermos criando uma biblioteca ou trabalhando em um projeto grande.

Há também a opção de usar o membro exportado com um nome diferente quando fazemos a importação:

```js
import {circleArea as circle} from 'CalArea';
```

Ou podemos renomear as funções quando elas forem exportadas:

```js
export {circleArea as circle, squareArea as square};
```

Há também algumas formas diferentes para importar as funções em um módulo distinto:

```js
import * as area from 'CalArea';
console.log(area.circle(2));
console.log(area.square(2));
```

Também é possível adicionar a palavra reservada **export** na frente de cada função ou variável que queremos expor. Não precisamos ter uma declaração **export** no final do arquivo.

```js
export const circleArea = (r) => 3.14 * (r ** 2);
export const squareArea = (r) => s * s;
```

Caso tenha apenas um único membro no módulo, use a palavra reservada **export default**:

```js
export default class Book {
    constructor(title){
        this.title = title;
    };
    printTitle(){
        console.log(this.title);
    };
};
```

Para importar a classe anterior em um módulo diferente:

```js
import Book from 'Book';
const myBook = new Book('some title');
myBook.printTitle();
```



### Introdução ao TypeScript

O TypeScript é um Super Set **gradualmente tipado de JavaScript **, com código aberto, criado e mantido pela Microsoft.

```bash
npm install -g typescript
```

### Inferência de tipo

Exemplo de código verboso:

```ts
let age: number = 20;
let existsFlag:  boolean = true;
let language: string = 'JavaScript';
```

Mesmo código com uma sintaxe mais limpa:

```ts
let age = 20;
let existsFlag = true;
let language = 'JavaScript';
```

Quando devo declarar um tipo e quando posso usar a **inferência de tipo**? Se declararmos a variável e não inicializarmos com um valor, é recomendável atribuir-lhe um tipo.

```ts
let favoriteLanguage: string;
let langs: ['JavaScript', 'C#', 'Java'];
favoriteLanguage = langs[0];
```

Se não especificarmos um tipo para uma variável, ela será automaticamente tipada como **any**, o que significa que poderá receber qualquer valor, como ocorre em JavaScript.



### Interfaces

Em TypeScript, há dois conceitos de interfaces. O primeiro está relacionado à atribuição de um tipo a uma variável.

```ts
interface Person {
    name: string;
    age: number;
}
function printName(person: Person){
    console.log(person.name);
}
```



O segundo conceito de inteface no TypeScript está relacionado à programação orientada a objetos.

```ts
interface Comparable {
  comparaTo(b: this): number;
}

class MyObject implements Comparable {
  age: number;

  constructor(age: number) {
    this.age = age;
  }
  comparaTo(b: this): number {
    if (this.age === b.age) {
      return 0;
    }
    return this.age > b.age ? 1 : -1;
  }
}
```

### Genéricos

Outro recurso eficaz do TypeScript, e útil em estruturas de dados e algoritmos, é o conceito de genérico (**generic**).

```ts
interface Comparable<T>{
    compareTo(b: T): number;

}
```

### Verificaçãp do TypeScript em tempo de compilação em arquivos JavaScript

Para verificação 

```js
@ts-check
```


