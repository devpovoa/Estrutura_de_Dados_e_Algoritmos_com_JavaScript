/**
 * Classe que implementa uma fila de duas pontas (Deque),
 * permitindo inserção e remoção de elementos no início e no fim.
 * @template T Tipo dos elementos armazenados no Deque
 */

export class Deque<T> {
  #count: number;
  #lowestCount: number;
  #items: Record<number, T>;

  constructor() {
    this.#count = 0;
    this.#lowestCount = 0;
    this.#items = {};
  }

  /**
   * Adiciona um elemento no final do deque
   * @param element Elemento a ser adicionado
   */
  addBack(element: T): void {
    this.#items[this.#count] = element;
    this.#count++;
  }

  /**
   * Adiciona um elemento no início do deque
   * @param element Elemento a ser adicionado
   */
  addFront(element: T): void {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.#lowestCount > 0) {
      this.#lowestCount--;
      this.#items[this.#lowestCount] = element;
    } else {
      for (let i = this.#count; i > this.#lowestCount; i--) {
        this.#items[i] = this.#items[i - 1];
      }
      this.#items[this.#lowestCount] = element;
      this.#count++;
    }
  }

  /**
   * Remove e retorna o elemento do início do deque
   * @returns Elemento removido ou indefinido se estiver vazio
   */
  removeFront(): T | undefined {
    if (this.isEmpty()) return undefined;

    const result = this.#items[this.#lowestCount];
    delete this.#items[this.#lowestCount];
    this.#lowestCount++;
    return result;
  }

  /**
   * Remove e retorna o elemento do final do deque
   * @returns Elemento removido ou indefinido se estiver vazio
   */
  removeBack(): T | undefined {
    if (this.isEmpty()) return undefined;
    this.#count--;
    const result = this.#items[this.#count];
    delete this.#items[this.#count];
    return result;
  }

  /**
   * Retorna o elemento do início do deque sem removê-lo
   * @returns Elemento do início ou indefinido se estiver vazio
   */
  peekFront(): T | undefined {
    return this.#items[this.#lowestCount];
  }

  /**
   * Retorna o elemento do final do deque sem removê-lo
   * @returns Elemento do final ou indefinido se estiver vazio
   */
  peekBack(): T | undefined {
    return this.#items[this.#count - 1];
  }

  /**
   * Verifica se o deque está vazio
   * @returns True se estiver vazio, false caso contrário
   */
  isEmpty(): boolean {
    return this.size() === 0;
  }

  /**
   * Retorna o número de elementos no deque
   * @returns Quantidade de elementos
   */
  size(): number {
    return this.#count - this.#lowestCount;
  }

  /**
   * Remove todos os elementos do deque
   */
  clear(): void {
    this.#items = {};
    this.#lowestCount = 0;
    this.#count = 0;
  }

  /**
   * Retorna uma string com os elementos do deque
   * @returns Elemento separado por vírgula
   */
  toString(): string {
    if (this.isEmpty()) return "";

    const value: string[] = [];

    for (let i = this.#lowestCount; i < this.#count; i++) {
      value.push(`${this.#items[i]}`);
    }
    return value.join(",");
  }
}
