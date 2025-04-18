import { Queue } from "../src/Queue";

describe("Queue", () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue<number>();
  });

  test("enqueue adiciona elementos corretamente", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.size()).toBe(2);
  });

  test("dequeue remove e retorna o elemento correto", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBeUndefined();
  });

  test("peek retorna o primeiro elemento sem remover", () => {
    queue.enqueue(10);
    expect(queue.peek()).toBe(10);
    expect(queue.size()).toBe(1);
  });

  test("isEmpty retorna true para fila vazia", () => {
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(5);
    expect(queue.isEmpty()).toBe(false);
  });

  test("clear esvazia a fila", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.clear();
    expect(queue.size()).toBe(0);
    expect(queue.isEmpty()).toBe(true);
  });
});
