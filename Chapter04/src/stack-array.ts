class StackArray<T> {
  // Uso de Generics para armazenar qualquer tipo de dado.
  private items: T[]; // Declando explicitamente como um array do tipo T.

  constructor() {
    this.items = [];
  }

  push(element: T): void {
    this.items.push(element);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  clear(): void {
    this.items = [];
  }
}

const stackArray = new StackArray();
console.log(stackArray.isEmpty());

stackArray.push("Thiago");
stackArray.push(38);
stackArray.push("M");
stackArray.push(11);

console.log(stackArray.peek());

console.log(stackArray.size());
console.log(stackArray.isEmpty());

console.log(stackArray);

stackArray.pop();
stackArray.pop();
console.log(stackArray.size());
console.log(stackArray);
