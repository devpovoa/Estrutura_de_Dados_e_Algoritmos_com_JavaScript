class Stack<T> {
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

const stack = new Stack();
console.log(stack.isEmpty());

stack.push("Thiago");
stack.push(38);
stack.push("M");
stack.push(11);

console.log(stack.peek());

console.log(stack.size());
console.log(stack.isEmpty());

console.log(stack);

stack.pop();
stack.pop();
console.log(stack.size());
console.log(stack);
