import { hotPotato } from "../src/JogoDaBatata";

describe("hotPotato", () => {
  it("deve retornar os eliminados e o vencedor corretamente", () => {
    const participantes = ["Ana", "Beto", "Carla", "Davi", "Eva"];
    const resultado = hotPotato(participantes, 3);

    expect(resultado.eliminated).toEqual(["Davi", "Carla", "Eva", "Beto"]);
    expect(resultado.winner).toBe("Ana");
  });

  it("deve retornar o único participante como vencedor se só houver um", () => {
    const resultado = hotPotato(["Zeca"], 3);

    expect(resultado.eliminated).toEqual([]);
    expect(resultado.winner).toBe("Zeca");
  });

  it("deve retornar vazio se a lista for vazia", () => {
    const resultado = hotPotato([], 3);

    expect(resultado.eliminated).toEqual([]);
    expect(resultado.winner).toBeUndefined();
  });
});
