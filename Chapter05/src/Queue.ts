/**
 * Classe que representa uma fila genérica (Queue FIFO)
 * Utiliza Campos privados para garantir encapsulamento
 * @template T Tipo dos elementos armazenados na fila
 */
export class Queue<T> {
  #count: number;
  #lowestCount: number;
  #items: Record<number, T>;

  constructor() {
    this.#count = 0;
    this.#lowestCount = 0;
    this.#items = {};
  }

  /**
   * Adiciona um elemento ao final da fila
   * @param {T} element - Elemento a ser adicionado
   */
  enqueue(element: T): void {
    this.#items[this.#count] = element;
    this.#count++;
  }

  /**
   * Remove e retorna o primeiro elemento da fila
   * @returns {T | undefined} - Elemento removido ou indefinido se a fila estiver vazia
   */
  dequeue(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    const result = this.#items[this.#lowestCount];
    delete this.#items[this.#lowestCount];
    this.#lowestCount++;
    return result;
  }

  /**
   * Retorna o primeiro elemento da fila sem removê-lo
   * @returns {T | undefined} - Elemento no início da fila
   */
  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.#items[this.#lowestCount];
  }

  /**
   * Verifica se a fila está vazia
   * @returns {boolean} - True se estiver vazia
   */
  isEmpty(): boolean {
    return this.size() === 0;
  }

  /**
   * Retorna a quantidade de elementos da fila
   * @returns {number} - Número de elementos
   */
  size(): number {
    return this.#count - this.#lowestCount;
  }

  /**
   * Remove todos os elementos da fila
   */
  clear(): void {
    this.#items = {};
    this.#count = 0;
    this.#lowestCount = 0;
  }

  /**
   * Retorna uma representação em string  dos elementos da fila
   * @returns {string} - String com os elementos separados por vírgula
   */
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
