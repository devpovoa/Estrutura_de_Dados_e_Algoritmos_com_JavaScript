let numbersEntries: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
];

let aEntries = numbersEntries.entries();
// console.log(aEntries.next().value);
// console.log(aEntries.next().value);
// console.log(aEntries.next().value);
// console.log(aEntries.next().value);

for (const next of aEntries) {
  console.log(next);
}
