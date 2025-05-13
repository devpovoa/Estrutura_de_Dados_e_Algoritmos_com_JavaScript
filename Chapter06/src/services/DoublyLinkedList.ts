import { LinkedList } from "./LinkedList";
import { DoublyNode } from "../models/DoublyNode";

/**
 * Classe representando um lista duplamente ligada, que estende a lista ligada simples.
 *
 * @template T - Tipo do valor armazenado na lista.
 */

export class DoublyLinkedList<T> extends LinkedList<T> {
  protected tail: DoublyNode<T> | null = null;

  /**
   * Adiciona um elemento no final da lista.
   *
   * @param element - Elemento a ser adicionado.
   */
  override push(element: T): void {
    const node = new DoublyNode(element);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      (this.tail as DoublyNode<T>).setNext(node);
      node.setPrev(this.tail);
      this.tail = node;
    }
    this.count++;
  }

  /**
   *  Insere um elemento em uma posição específica.
   *
   * @param element - Elemento a ser inserido.
   * @param position - Posição para inserção (0-based).
   * @returns `true` se inserido com sucesso; caso contrário, `false`.
   */
  override insert(element: T, position: number): boolean {
    if (position < 0 || position > this.count) {
      return false;
    }

    const node = new DoublyNode(element);

    if (position === 0) {
      if (this.head === null) {
        this.head = node;
        this.tail = node;
      } else {
        node.setNext(this.head);
        (this.head as DoublyNode<T>).setPrev(node);
        this.head = node;
      }
    } else if (position === this.count) {
      this.push(element);
      return true;
    } else {
      const current = this.getElementAt(position) as DoublyNode<T>;
      const previous = current.getPrev();

      node.setNext(current);
      node.setPrev(previous);

      previous!.setNext(node);
      current.setPrev(node);
    }

    this.count++;
    return true;
  }

  /**
   * Remove o elemento na posição espefificada.
   *
   * @param position - Posição do elemento a ser removido.
   * @returns - Elemento removido ou `null` se inválido.
   */
  override removeAt(position: number): T | null {
    if (position < 0 || position >= this.count || this.head === null) {
      return null;
    }

    let current: DoublyNode<T>;

    if (position === 0) {
      current = this.head as DoublyNode<T>;
      this.head = this.head.getNext();

      if (this.count === 1) {
        this.tail = null;
      } else {
        (this.head as DoublyNode<T>).setPrev(null);
      }
    } else if (position === this.count - 1) {
      current = this.tail!;
      this.tail = this.tail!.getPrev();
      this.tail!.setNext(null);
    } else {
      current = this.getElementAt(position) as DoublyNode<T>;
      const previous = current.getPrev();
      const next = current.getNext();

      previous!.setNext(next);
      (next as DoublyNode<T>).setPrev(previous);
    }

    this.count--;
    return current.getElement();
  }

  /**
   * Retorna o nó na posição especificada (otimizado para ir da head ou tail).
   *
   * @param index Índice da posição.
   * @returns Nó ou `null` se inválido.
   */
  override getElementAt(index: number): DoublyNode<T> | null {
    if (index < 0 || index >= this.count) {
      return null;
    }

    let current: DoublyNode<T>;

    if (index < this.count / 2) {
      current = this.head as DoublyNode<T>;
      for (let i = 0; i < index; i++) {
        current = current.getNext() as DoublyNode<T>;
      }
    } else {
      current = this.tail as DoublyNode<T>;
      for (let i = this.count - 1; i > index; i--) {
        current = current.getPrev() as DoublyNode<T>;
      }
    }

    return current;
  }

  /**
   * Retorna uma representação reversa em string da lista.
   *
   * @returns Elementos da cauda para a cabeça separados por vírgula.
   */
  reverseToString(): string {
    if (this.tail === null) {
      return "";
    }

    let objString = `${this.tail.getElement()}`;
    let current = this.tail.getPrev();

    while (current !== null) {
      objString = `${objString},${current.getElement()}`;
      current = current.getPrev();
    }

    return objString;
  }
}
