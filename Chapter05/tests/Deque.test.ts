import { Deque } from "../src/Deque";

describe("Deque", () => {
  let deque: Deque<number>;

  beforeEach(() => {
    deque = new Deque<number>();
  });

  test("addBack e removeFront", () => {
    deque.addBack(1);
    deque.addBack(2);
    deque.addBack(3);
    expect(deque.removeFront()).toBe(1);
    expect(deque.removeFront()).toBe(2);
    expect(deque.removeFront()).toBe(3);
  });

  test("addFront e removeBack", () => {
    deque.addFront(1);
    deque.addFront(2);
    deque.addFront(3);
    expect(deque.removeBack()).toBe(1);
    expect(deque.removeBack()).toBe(2);
    expect(deque.removeBack()).toBe(3);
  });

  test("peekFront e peekBack", () => {
    deque.addBack(10);
    deque.addBack(20);
    deque.addFront(5);
    expect(deque.peekFront()).toBe(5);
    expect(deque.peekBack()).toBe(20);
  });

  test("isEmpty e size", () => {
    expect(deque.isEmpty()).toBe(true);
    deque.addBack(100);
    expect(deque.isEmpty()).toBe(false);
    expect(deque.size()).toBe(1);
  });

  test("clear", () => {
    deque.addBack(1);
    deque.addBack(2);
    deque.clear();
    expect(deque.isEmpty()).toBe(true);
    expect(deque.size()).toBe(0);
  });

  test("toString", () => {
    deque.addBack(1);
    deque.addBack(2);
    deque.addBack(3);
    expect(deque.toString()).toBe("1,2,3");
  });
});
