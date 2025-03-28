const zero: number = 0;
const positiveNumbers: number[] = [1, 2, 3];
const negativeNumbers: number[] = [-3, -2, -1];
let numbersOut: string = negativeNumbers
  .concat(zero, positiveNumbers)
  .join(", ");

console.log(numbersOut);
