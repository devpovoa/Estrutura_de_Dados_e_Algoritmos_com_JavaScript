import { DoublyLinkedList } from "./../src/services/DoublyLinkedList";

describe("DoublyLinkedList", () => {
  let list: DoublyLinkedList<number>;

  beforeEach(() => {
    list = new DoublyLinkedList<number>();
  });

  test("should push elements", () => {
    list.push(1);
    list.push(2);
    expect(list.size()).toBe(2);
    expect(list.getElementAt(0)?.getElement()).toBe(1);
    expect(list.getElementAt(1)?.getElement()).toBe(2);
  });

  test("should remove first element", () => {
    list.push(1);
    list.push(2);
    const removed = list.removeAt(0);
    expect(removed).toBe(1);
    expect(list.size()).toBe(1);
    expect(list.getElementAt(0)?.getElement()).toBe(2);
  });

  test("should remove last element", () => {
    list.push(1);
    list.push(2);
    const removed = list.removeAt(1);
    expect(removed).toBe(2);
    expect(list.size()).toBe(1);
    expect(list.getElementAt(0)?.getElement()).toBe(1);
  });

  test("should remove middle element", () => {
    list.push(1);
    list.push(2);
    list.push(3);
    const removed = list.removeAt(1);
    expect(removed).toBe(2);
    expect(list.size()).toBe(2);
    expect(list.getElementAt(1)?.getElement()).toBe(3);
  });

  test("should return null for invalid index", () => {
    list.push(1);
    expect(list.removeAt(5)).toBeNull();
    expect(list.getElementAt(-1)).toBeNull();
  });

  test("should report empty correctly", () => {
    expect(list.isEmpty()).toBe(true);
    list.push(10);
    expect(list.isEmpty()).toBe(false);
  });
});
