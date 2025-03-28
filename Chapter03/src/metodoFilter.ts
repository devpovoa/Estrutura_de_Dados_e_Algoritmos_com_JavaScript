const isEvenValuesTrue = (x: number) => {
  return x % 2 === 0;
};

let numbersFilter: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
];

const evenNumbers: string = numbersFilter.filter(isEvenValuesTrue).join(" - ");
console.log(evenNumbers);
