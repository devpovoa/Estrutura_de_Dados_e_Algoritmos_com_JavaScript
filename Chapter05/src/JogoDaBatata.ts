import { Queue } from "./Queue";

/**
 * Simula o jogo "Batata Quente" (Hot Potato).
 *
 * Participantes giram na fila até que reste apenas um.
 *
 * @param elementList Lista de nomes dos participantes
 * @param num Número de "passes" antes de eliminar alguém
 * @returns Objeto com lista dos eliminados e o vencedor
 */
export function hotPotato(
  elementList: string[],
  num: number
): {
  eliminated: string[];
  winner: string;
} {
  const queue = new Queue<string>();
  const eliminated: string[] = [];

  // Adiciona todos os participantes à fila
  for (const name of elementList) {
    queue.enqueue(name);
  }

  // Enquanto houver mais de 1 pessoa na fila
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      const person = queue.dequeue();
      if (person !== undefined) {
        queue.enqueue(person);
      }
    }

    const eliminatedPerson = queue.dequeue();
    if (eliminatedPerson !== undefined) {
      eliminated.push(eliminatedPerson);
    }
  }

  // O último que sobrou é o vencedor
  const winner = queue.dequeue() as string;

  return {
    eliminated,
    winner,
  };
}
