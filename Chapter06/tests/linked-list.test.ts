import { LinkedList } from "../src/services/LinkedList";
import { defaultEquals } from "../src/utils/util";

describe("LinkedList", () => {
  let list: LinkedList<number>;

  beforeEach(() => {
    list = new LinkedList<number>(defaultEquals);
  });

  it("should insert elements correctly", () => {
    list.push(10);
    list.push(20);
    list.push(30);

    expect(list.size()).toBe(3);
    expect(list.getElementAt(0)?.getElement()).toBe(10);
    expect(list.getElementAt(1)?.getElement()).toBe(20);
    expect(list.getElementAt(2)?.getElement()).toBe(30);
  });

  it("should handle inserting at invalid positions", () => {
    expect(list.insert(5, -1)).toBe(false); // Posição inválida
    expect(list.insert(5, 5)).toBe(false); // Posição fora do alcance
    expect(list.insert(5, 0)).toBe(true); // Posição válida (início)
    expect(list.size()).toBe(1);
  });

  it("should remove elements correctly", () => {
    list.push(10);
    list.push(20);
    list.push(30);

    expect(list.removeAt(1)).toBe(20); // Remove o elemento da posição 1
    expect(list.size()).toBe(2);
    expect(list.getElementAt(1)?.getElement()).toBe(30);
  });

  it("should return null when removing at invalid index", () => {
    expect(list.removeAt(-1)).toBeNull(); // Índice inválido
    expect(list.removeAt(3)).toBeNull(); // Índice fora do alcance
  });

  it("should handle remove by value", () => {
    list.push(10);
    list.push(20);
    list.push(30);

    expect(list.remove(20)).toBe(true); // Remove elemento por valor
    expect(list.size()).toBe(2);
    expect(list.indexOf(20)).toBe(-1); // Elemento removido
    expect(list.remove(40)).toBe(false); // Tenta remover um elemento inexistente
  });

  it("should clear the list", () => {
    list.push(10);
    list.push(20);

    expect(list.size()).toBe(2);
    list.clear();
    expect(list.size()).toBe(0);
    expect(list.isEmpty()).toBe(true);
  });

  it("should return a correct string representation of the list", () => {
    expect(list.toString()).toBe("");

    list.push(10);
    list.push(20);
    expect(list.toString()).toBe("10, 20");

    list.push(30);
    expect(list.toString()).toBe("10, 20, 30");
  });

  it("should return null when getting an element at an invalid index", () => {
    expect(list.getElementAt(0)).toBeNull(); // Lista vazia
    list.push(10);
    expect(list.getElementAt(1)).toBeNull(); // Índice fora do alcance
  });

  it("should correctly find index of an element", () => {
    list.push(10);
    list.push(20);
    list.push(30);

    expect(list.indexOf(20)).toBe(1); // Elemento encontrado
    expect(list.indexOf(40)).toBe(-1); // Elemento não encontrado
  });

  it("should return null when trying to remove element from empty list", () => {
    expect(list.removeAt(0)).toBeNull(); // Tenta remover da lista vazia
  });

  it("should handle invalid access when list is empty", () => {
    // Testa o comportamento de acessar elementos de uma lista vazia
    expect(list.getElementAt(0)).toBeNull(); // Índice inválido em lista vazia
    expect(list.indexOf(10)).toBe(-1); // Elemento não encontrado em lista vazia
  });
});
