/**
 * Classe representando um nó de uma lista ligada.
 *
 * Um nó armazena um valor de tipo genérico `T` e uma referência para o próximo nó.
 *
 * @template T Tipo do valor armazenado no nó.
 */
export class Node<T> {
  /**
   * O valor armazenado no nó.
   *
   * A propriedade é somente leitura e não pode ser alterada após a criação do nó.
   *
   * @readonly
   */
  readonly element: T;

  /**
   * Referência para o próximo nó da lista.
   *
   * Pode ser `null` se este nó for o último da lista.
   */
  next: Node<T> | null;

  /**
   * Cria uma instância de um nó.
   *
   * @param element O valor a ser armazenado no nó.
   */
  constructor(element: T) {
    this.element = element;
    this.next = null;
  }
}
