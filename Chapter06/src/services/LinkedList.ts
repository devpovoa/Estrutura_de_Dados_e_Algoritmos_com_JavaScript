import { defaultEquals } from "../utils/util";
import { Node } from "../models/linked-list-models";

/**
 * Classe que representa uma Lista Ligada (Linked List) genérica.
 *
 * @typeParam T - Tipo dos elementos armazenados na lista.
 */
export class LinkedList<T> {
  protected count: number;
  protected head: Node<T> | null;
  protected readonly equalsFn: (a: T, b: T) => boolean;

  /**
   * Cria uma nova lista ligada.
   *
   * @param equalsFn - Função opcional para comparar elementos.
   */
  constructor(equalsFn: (a: T, b: T) => boolean = defaultEquals) {
    this.count = 0;
    this.head = null;
    this.equalsFn = equalsFn;
  }

  /**
   * Adiciona um elemento no final da lista.
   *
   * @param element - Elemento a ser adicionado.
   */
  push(element: T): void {
    const node = new Node(element);
    if (this.head === null) {
      this.head = node;
    } else {
      const lastNode = this.getElementAt(this.count - 1);
      if (lastNode !== null) {
        lastNode.setNext(node);
      }
    }
    this.count++;
  }

  /**
   * Insere um elemento em uma posição específica da lista.
   *
   * @param element - Elemento a ser inserido.
   * @param position - Posição de inserção (0 baseado).
   * @returns `true` se sucesso, `false` se posição inválida.
   */
  insert(element: T, position: number): boolean {
    if (position >= 0 && position <= this.count) {
      const node = new Node(element);

      if (position === 0) {
        node.setNext(this.head);
        this.head = node;
      } else {
        const previous = this.getElementAt(position - 1);
        if (previous !== null) {
          node.setNext(previous.getNext());
          previous.setNext(node);
        }
      }

      this.count++;
      return true;
    }
    return false;
  }

  /**
   * Retorna o nó na posição informada.
   *
   * @param index - Índice desejado.
   * @returns Nó ou `null` se índice inválido.
   */
  getElementAt(index: number): Node<T> | null {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      let i = 0;

      while (i < index && current !== null) {
        current = current.getNext();
        i++;
      }
      return current;
    }
    return null;
  }

  /**
   * Remove um elemento da lista (pelo valor).
   *
   * @param element - Elemento a ser removido.
   * @returns `true` se removido, `false` se não encontrado.
   */
  remove(element: T): boolean {
    let current = this.head;
    let previous: Node<T> | null = null;

    while (current !== null) {
      if (this.equalsFn(element, current.getElement())) {
        if (previous === null) {
          this.head = current.getNext();
        } else {
          previous.setNext(current.getNext());
        }
        this.count--;
        return true;
      }
      previous = current;
      current = current.getNext();
    }
    return false;
  }

  /**
   * Retorna o índice de um elemento.
   *
   * @param element - Elemento buscado.
   * @returns Índice ou `-1` se não encontrado.
   */
  indexOf(element: T): number {
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (this.equalsFn(element, current.getElement())) {
        return index;
      }
      current = current.getNext();
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
    if (position < 0 || position >= this.count) {
      return null;
    }

    let current: Node<T> | null = this.head;

    // Caso: remover na primeira posição (head)
    if (position === 0 && current !== null) {
      this.head = current.getNext();
      this.count--;
      return current.getElement();
    }

    // Caso: remover em qualquer outra posição
    const previous = this.getElementAt(position - 1);
    if (previous === null) return null;

    current = previous.getNext();
    if (current === null) return null;

    previous.setNext(current.getNext());
    this.count--;
    return current.getElement();
  }

  /**
   * Verifica se a lista está vazia.
   *
   * @returns `true` se vazia.
   */
  isEmpty(): boolean {
    return this.count === 0;
  }

  /**
   * Retorna a quantidade de elementos.
   *
   * @returns Número de elementos.
   */
  size(): number {
    return this.count;
  }

  /**
   * Limpa toda a lista.
   */
  clear(): void {
    this.head = null;
    this.count = 0;
  }

  /**
   * Retorna uma string com os elementos.
   *
   * @returns Elementos separados por vírgulas.
   */
  toString(): string {
    if (this.isEmpty()) {
      return "";
    }

    let current = this.head;
    const elements: string[] = [];

    while (current !== null) {
      elements.push(`${current.getElement()}`);
      current = current.getNext();
    }

    return elements.join(", ");
  }
}
