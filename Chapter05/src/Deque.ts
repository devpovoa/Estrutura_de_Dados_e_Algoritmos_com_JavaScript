export class Deque<T> {
  #count: number;
  #lowestCount: number;
  #items: Record<number, T>;

  constructor() {
    this.#count = 0;
    this.#lowestCount = 0;
    this.#items = {};
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  size(): number {
    return this.#count - this.#lowestCount;
  }

  clear(): void {
    this.#count = 0;
    this.#lowestCount = 0;
    this.#items = {};
  }

  toString(): string {
    if (this.isEmpty()) {
      return "";
    }

    let result = `${this.#items[this.#lowestCount]}`;
    for (let i = this.#lowestCount + 1; i < this.#count; i++) {
      result += `,${this.#items[i]}`;
    }
    return result;
  }
}
