let numbersFillCopy: number[] = Array.of(1, 2, 3, 4, 5, 6);
console.log(numbersFillCopy);

// numbersFillCopy.fill(2, 3);
// numbersFillCopy.fill(0);
numbersFillCopy.fill(10, 3, 5);

console.log(numbersFillCopy);

let numbersOnes: number[] = Array(6).fill(1);
console.log(numbersOnes);
