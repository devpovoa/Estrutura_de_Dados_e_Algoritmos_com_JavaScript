const isEvenEvery = (x: number) => {
  console.log(x);
  return x % 2 === 0;
};

let numbersEvery: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
];

numbersEvery.every(isEvenEvery);
