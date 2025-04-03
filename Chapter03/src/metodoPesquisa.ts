let numbersSearch: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
];

console.log(`${"-".repeat(8)} Usando o IndexOf ${"-".repeat(8)}`);
console.log(numbersSearch.indexOf(10));
console.log(numbersSearch.indexOf(100));
console.table(numbersSearch);

console.log(`${"-".repeat(8)} Usando o LastIndexOf ${"-".repeat(8)}`);
numbersSearch.push(10);
console.log(numbersSearch.lastIndexOf(10));
console.log(numbersSearch.lastIndexOf(100));
console.table(numbersSearch);
