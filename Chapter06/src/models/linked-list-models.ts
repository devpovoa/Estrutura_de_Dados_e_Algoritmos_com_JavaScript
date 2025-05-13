/**
 * Classe representando um nó de uma lista ligada.
 *
 * Um nó armazena um valor genérico `T` e uma referência ao próximo nó.
 * @template T Tipo do valor armazenado no nó.
 */
export class Node<T> {
  protected readonly element: T;
  protected next: Node<T> | null;

  /**
   * Cria uma nova instância de nó.
   *
   * @param element - Valor a ser armazenado.
   */
  constructor(element: T) {
    this.element = element;
    this.next = null;
  }

  /**
   *
   * @returns o valor armazenado no nó.
   */
  getElement(): T {
    return this.element;
  }

  /**
   *
   * @returns o próximo nó.
   */
  getNext(): Node<T> | null {
    return this.next;
  }

  /**
   *
   * @param next - Próximo nó ou `null`.
   */
  setNext(next: Node<T> | null): void {
    this.next = next;
  }
}
