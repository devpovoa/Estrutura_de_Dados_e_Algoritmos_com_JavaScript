# Pilhas

#### Estruturas de dados de pilha

Uma pilha é uma coleção ordenada de itens que obedece ao princípio **LIFO** (Last In First Out).

#### Convenção de nomeclatura com undescore

Alguns desenvolvedores preferem usar a convenção de nomeclatura com underscore para marcar um atributo como **private** em JavaScritp:

```js
class Stack{
    constructor(){
    this._count = 0;
    this._items = {};
    }
}
```

Porém, a melhor forma de declarar um atributo **private** em JavaScript é com o uso do **#** sustenido.

```ts
class StackObjeto<T> {
  #count: number; // Uso de modificador de acesso #.
  #items: Record<number, T>; // Declaração explicita de Chave-valor.

  constructor() {
    this.#count = 0;
    this.#items = {
    
};  
```

### Convertendo números decimais para binários

## Filas de deques
