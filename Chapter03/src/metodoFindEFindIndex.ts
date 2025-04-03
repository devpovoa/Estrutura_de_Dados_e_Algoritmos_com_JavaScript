let numbersFindeFindIndex: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
];

function multipleOf13(element: number) {
  return element % 13 == 0;
}

console.log(numbersFindeFindIndex.find(multipleOf13));
console.log(numbersFindeFindIndex.findIndex(multipleOf13));
console.table(numbersFindeFindIndex);
