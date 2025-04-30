import { palindromeChecker } from "../src/Palindrome";

describe("palindromeChecker", () => {
  it("deve retornar true para um palíndromo simples", () => {
    expect(palindromeChecker("arara")).toBe(true);
  });

  it("deve retornar true para um palíndromo com letras maiúsculas e minúsculas", () => {
    expect(palindromeChecker("ArArA")).toBe(true);
  });

  it("deve retornar true para um palíndromo com espaços", () => {
    expect(palindromeChecker("Ame o poema")).toBe(true);
  });

  it("deve retornar false para uma string que não é palíndromo", () => {
    expect(palindromeChecker("Olá mundo")).toBe(false);
  });

  it("deve retornar false para uma string vazia", () => {
    expect(palindromeChecker("")).toBe(false);
  });

  it("deve retornar false para uma string composta apenas por espaços", () => {
    expect(palindromeChecker("     ")).toBe(false);
  });
});
