import { Node } from "./linked-list-models";

/**
 * Nó que representa um nó de uma lista duplamente ligada.
 * @template T Tipo do valor armazenado no nó.
 */
export class DoublyNode<T> extends Node<T> {
  private prev: DoublyNode<T> | null;

  /**
   *
   * @param element - Valor a ser armazenado.
   * @param prev - Referência para o nó anterior ou `nul`.
   */
  constructor(element: T, prev: DoublyNode<T> | null = null) {
    super(element);
    this.prev = prev;
  }

  /**
   *
   * @returns - Retorna o nó anterior.
   */
  getPrev(): DoublyNode<T> | null {
    return this.prev;
  }

  /**
   * Define o nó anterior.
   * @param prev - Nó anterior ou `null`.
   */
  setPrev(prev: DoublyNode<T> | null): void {
    this.prev = prev;
  }
}
