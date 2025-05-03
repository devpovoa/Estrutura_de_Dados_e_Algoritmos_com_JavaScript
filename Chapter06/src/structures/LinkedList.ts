import { defaultEquals } from "../utils/util";
import { Node } from "./../models/linked-list-models";

/**
 * Classe que representa uma Lista Ligada (Linked List) genérica.
 * Permite armazenar elementos de qualquer tipo e realizar operações como inserção, remoção e busca.
 *
 * @typeParam T - Tipo dos elementos armazenados na lista.
 */
export default class LinkedList<T> {
  #count: number;
  #head: Node<T> | null;
  readonly #equalsFn: (a: T, b: T) => boolean;

  /**
   * Cria uma nova lista ligada.
   *
   * @param equalsFn - Função opcional para comparar elementos. Por padrão, usa igualdade estrita (`===`).
   */
  constructor(equalsFn: (a: T, b: T) => boolean = defaultEquals) {
    this.#count = 0;
    this.#head = null;
    this.#equalsFn = equalsFn;
  }

  /**
   * Adiciona um elemento no final da lista.
   *
   * @param element - Elemento a ser adicionado.
   */
  push(element: T): void {
    const node = new Node(element);
    if (this.#head === null) {
      this.#head = node;
    } else {
      const { current: lastNode } = this.findNode(this.#count - 1);
      if (lastNode !== null) {
        lastNode.next = node;
      }
    }
    this.#count++;
  }

  /**
   * Insere um elemento em uma posição específica da lista.
   *
   * @param element - Elemento a ser inserido.
   * @param position - Índice onde o elemento será inserido (começa em 0).
   * @returns `true` se inserido com sucesso, `false` se a posição for inválida.
   */
  insert(element: T, position: number): boolean {
    if (position >= 0 && position <= this.#count) {
      const node = new Node(element);

      if (position === 0) {
        node.next = this.#head;
        this.#head = node;
      } else {
        const { current, previous } = this.findNode(position);
        node.next = current;
        if (previous !== null) {
          previous.next = node;
        }
      }

      this.#count++;
      return true;
    }
    return false;
  }

  /**
   * Retorna o nó na posição informada.
   *
   * @param index - Índice do nó desejado.
   * @returns O nó encontrado ou `null` se o índice for inválido.
   */
  getElementAt(index: number): Node<T> | null {
    if (index >= 0 && index < this.#count) {
      const { current } = this.findNode(index);
      return current;
    }
    return null;
  }

  /**
   * Remove um elemento da lista (busca pelo valor).
   *
   * @param element - Elemento a ser removido.
   * @returns `true` se o elemento foi removido, `false` se não encontrado.
   */
  remove(element: T): boolean {
    let current: Node<T> | null = this.#head;
    let previous: Node<T> | null = null;

    while (current !== null) {
      if (this.#equalsFn(element, current.element)) {
        if (previous === null) {
          this.#head = current.next;
        } else {
          previous.next = current.next;
        }
        this.#count--;
        return true;
      }
      previous = current;
      current = current.next;
    }
    return false;
  }

  /**
   * Retorna o índice de um elemento na lista.
   *
   * @param element - Elemento a ser buscado.
   * @returns Índice do elemento ou `-1` se não encontrado.
   */
  indexOf(element: T): number {
    let current: Node<T> | null = this.#head;
    let index = 0;

    while (current !== null) {
      if (this.#equalsFn(element, current.element)) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  /**
   * Remove o elemento na posição especificada.
   *
   * @param position - Índice do elemento a ser removido.
   * @returns O elemento removido ou `null` se a posição for inválida.
   */
  removeAt(position: number): T | null {
    if (position >= 0 && position < this.#count) {
      if (position === 0 && this.#head !== null) {
        const removed = this.#head.element;
        this.#head = this.#head.next;
        this.#count--;
        return removed;
      }

      const { current, previous } = this.findNode(position);

      if (current !== null && previous !== null) {
        previous.next = current.next;
        this.#count--;
        return current.element;
      }
    }
    return null;
  }

  /**
   * Verifica se a lista está vazia.
   *
   * @returns `true` se não há elementos na lista.
   */
  isEmpty(): boolean {
    return this.#count === 0;
  }

  /**
   * Retorna a quantidade de elementos na lista.
   *
   * @returns Número de elementos.
   */
  size(): number {
    return this.#count;
  }

  /**
   * Retorna uma representação em string da lista.
   * Os elementos são separados por vírgulas.
   *
   * @returns String contendo os elementos da lista.
   */
  toString(): string {
    if (this.isEmpty()) {
      return "";
    }
    let current: Node<T> | null = this.#head;
    let objString = "";

    while (current !== null) {
      objString += `${current.element}${current.next !== null ? ", " : ""}`;
      current = current.next;
    }

    return objString;
  }

  /**
   * Método privado que encontra um nó e seu anterior com base na posição.
   *
   * @param position - Índice desejado.
   * @returns Objeto com `current` (nó atual) e `previous` (nó anterior).
   */
  private findNode(position: number): {
    current: Node<T> | null;
    previous: Node<T> | null;
  } {
    let current: Node<T> | null = this.#head;
    let previous: Node<T> | null = null;
    let index = 0;

    while (index < position && current !== null) {
      previous = current;
      current = current.next;
      index++;
    }

    return { current, previous };
  }
}
