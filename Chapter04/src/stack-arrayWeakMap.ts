const items = new WeakMap<object, unknown>();

class StackWeakMap<T> {
  constructor() {
    items.set(this, []);
  }

  push(element: T): void {
    const s = items.get(this);
    if (!s) throw new Error("Stack não inicializada.");
    (s as T[]).push(element);
  }

  pop(): T | undefined {
    const s = items.get(this);
    if (!s) throw new Error("Stack não inicializada.");
    return (s as T[]).pop();
  }

  toArray(): T[] {
    const s = items.get(this);
    if (!s) throw new Error("Stack não inicializada.");
    return [...(s as T[])];
  }
}

const stackWeakMap = new StackWeakMap();
stackWeakMap.push("Thiago Povoa");
stackWeakMap.push("Desenvolvedor Full Stack");
console.log(stackWeakMap.toArray());
