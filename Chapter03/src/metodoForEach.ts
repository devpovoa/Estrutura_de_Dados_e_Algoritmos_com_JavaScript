const isEvenForEach = (x: number) => {
  return x % 2 === 0;
};

let numbersForEach: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
];

numbersForEach.forEach((x: number) => {
  if (isEvenForEach(x)) {
    console.log(x);
  }
});
