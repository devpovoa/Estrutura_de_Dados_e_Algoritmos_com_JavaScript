import LinkedList from "../src/structures/LinkedList";

describe("LinkedList", () => {
  let lista: LinkedList<number>;

  beforeEach(() => {
    lista = new LinkedList<number>();
  });

  test("deve iniciar vazia", () => {
    expect(lista.isEmpty()).toBe(true);
    expect(lista.size()).toBe(0);
  });

  test("deve adicionar elementos com push", () => {
    lista.push(10);
    lista.push(20);
    expect(lista.isEmpty()).toBe(false);
    expect(lista.size()).toBe(2);
    expect(lista.toString()).toBe("10, 20");
  });

  test("deve inserir elementos em posições específicas", () => {
    lista.push(10);
    lista.push(20);
    lista.insert(15, 1);
    expect(lista.toString()).toBe("10, 15, 20");
  });

  test("deve remover elemento pelo valor", () => {
    lista.push(1);
    lista.push(2);
    lista.push(3);
    expect(lista.remove(2)).toBe(true);
    expect(lista.toString()).toBe("1, 3");
  });

  test("deve remover elemento pela posição", () => {
    lista.push(5);
    lista.push(6);
    lista.push(7);
    expect(lista.removeAt(1)).toBe(6);
    expect(lista.toString()).toBe("5, 7");
  });

  test("deve obter elemento pelo índice", () => {
    lista.push(100);
    lista.push(200);
    let no = lista.getElementAt(1);
    expect(no).not.toBeNull();
    expect(no!.element).toBe(200);
  });

  test("deve retornar o índice do elemento", () => {
    lista.push(1);
    lista.push(2);
    lista.push(3);
    expect(lista.indexOf(2)).toBe(1);
    expect(lista.indexOf(99)).toBe(-1);
  });

  test("deve retornar null ao obter elemento com índice inválido", () => {
    lista.push(10);
    expect(lista.getElementAt(-1)).toBeNull();
    expect(lista.getElementAt(10)).toBeNull();
  });

  test("deve retornar false ao tentar remover elemento não existente", () => {
    lista.push(1);
    lista.push(2);
    expect(lista.remove(99)).toBe(false);
  });

  test("deve retornar null para getElementAt quando a lista estiver vazia", () => {
    expect(lista.getElementAt(0)).toBeNull();
  });

  test("deve retornar false ao tentar remover elemento inexistente", () => {
    lista.push(10);
    expect(lista.remove(20)).toBe(false);
  });

  test("deve retornar null ao remover da posição inválida", () => {
    expect(lista.removeAt(10)).toBeNull();
  });

  test("deve retornar -1 ao buscar índice de elemento não existente", () => {
    lista.push(1);
    expect(lista.indexOf(999)).toBe(-1);
  });

  test("deve retornar null ao tentar remover posição inválida", () => {
    lista.push(1);
    expect(lista.removeAt(-1)).toBeNull();
    expect(lista.removeAt(10)).toBeNull();
  });

  test("deve retornar string vazia ao chamar toString em lista vazia", () => {
    expect(lista.toString()).toBe("");
  });

  test("deve retornar null para índice inválido", () => {
    expect(lista.getElementAt(-1)).toBeNull();
    expect(lista.getElementAt(10)).toBeNull();
  });

  test("deve limpar a lista com clear", () => {
    lista.push(10);
    lista.push(20);
    lista.clear();
    expect(lista.isEmpty()).toBe(true);
    expect(lista.size()).toBe(0);
    expect(lista.toString()).toBe("");
  });
});
