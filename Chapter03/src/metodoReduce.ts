let numbersReduce: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
];

const totalNumbers: number = numbersReduce.reduce(
  (previous, current) => previous + current,
  0
);
console.log(totalNumbers);
