class StackObjeto<T> {
  #count: number; // Uso de modificador de acesso #.
  #items: Record<number, T>; // Declaração explicita de Chave-valor.

  constructor() {
    this.#count = 0;
    this.#items = {};
  }

  push(element: T): void {
    this.#items[this.#count] = element;
    this.#count++;
  }

  pop(): T | undefined {
    if (this.isEmpty()) return undefined;
    this.#count--;

    const result = this.#items[this.#count];
    delete this.#items[this.#count];
    return result;
  }

  peek(): T | undefined {
    if (this.isEmpty()) return undefined;
    return this.#items[this.#count - 1];
  }

  isEmpty(): boolean {
    return this.#count === 0;
  }

  size(): number {
    return this.#count;
  }

  clear(): void {
    this.#count = 0;
    this.#items = {};
  }

  toString() {
    if (this.isEmpty()) return "";

    let objString = `${this.#items[0]}`;
    for (let i = 1; i < this.#count; i++) {
      objString = `${objString}, ${this.#items[i]}`;
    }
    return objString;
  }
}

const stackObj = new StackObjeto();
stackObj.push(5);
stackObj.push(8);

console.log(stackObj.peek());
console.log(stackObj.toString());

console.log(Object.getOwnPropertyNames(stackObj));
console.log(Object.keys(stackObj));
