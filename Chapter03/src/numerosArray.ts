let numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// numbers[numbers.length] = 10;
// numbers.push(11, 12);

// numbers.unshift(10, 11, 12, 13);
// numbers.pop();
// numbers.shift();
// numbers.splice(3, 5);
// delete numbers[0];
numbers.splice(5, 0, 15, 16, 17, 18);
console.log(numbers);
