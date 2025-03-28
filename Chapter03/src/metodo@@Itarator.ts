let valuesNumbers: number[] = [];
valuesNumbers = [1, 2, 3, 4];

let iterator = valuesNumbers[Symbol.iterator]();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
