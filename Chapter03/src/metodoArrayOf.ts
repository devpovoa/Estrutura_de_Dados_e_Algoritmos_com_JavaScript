let numbers1: number[] = Array.of(1);
let numbers2: number[] = Array.of(1, 2, 3, 4, 5);

let numbersCopy: number[] = Array.of(...numbers1);

console.log(numbers1);
console.log(numbers2);
console.log(numbersCopy);
