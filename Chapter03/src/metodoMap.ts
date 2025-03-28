const isEvenMap = (x: number) => {
  return x % 2 === 0;
};

let numbersMap: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const myMap = numbersMap.map(isEvenMap);
console.table(myMap);
