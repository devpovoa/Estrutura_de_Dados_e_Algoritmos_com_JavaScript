let numbersFrom: number[] = [23, 15, 16, 33, 45];

let numbersFrom2: number[] = Array.from(numbersFrom);
let evens = Array.from(numbersFrom2, (x) => x % 2 === 0);

console.log(evens);
console.log(numbersFrom2);
