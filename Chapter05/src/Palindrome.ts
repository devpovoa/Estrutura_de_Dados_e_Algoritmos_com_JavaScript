import { Deque } from "./Deque";

/**
 * Verifica se a string fornecida é um palíndromo.
 *
 * Um palíndromo é uma palavra ou frase que pode ser lida da mesma forma de trás para frente, ignorando espaços e diferenças   entre maiúsculas e minúsculas.
 * @example
 * palindromoChecker("arara");// true
 * palindromoChecker("Ame o poema");// true
 * palindromoChecker("Olá mundo");// false
 *
 * @param aString - A string que será verificada.
 * @returns `True` se a string for um palíndromo; `False` caso contrário.
 */
export function palindromeChecker(aString: string): boolean {
  if (!aString || aString.trim().length === 0) {
    return false;
  }

  const deque = new Deque<string>();
  const lowerString: string = aString
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");

  let isEqual: boolean = true;
  let firstChar: string | undefined;
  let lastChar: string | undefined;

  for (const char of lowerString) {
    deque.addBack(char);
  }

  while (deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront();
    lastChar = deque.removeBack();

    if (firstChar !== lastChar) {
      isEqual = false;
    }
  }

  return isEqual;
}
