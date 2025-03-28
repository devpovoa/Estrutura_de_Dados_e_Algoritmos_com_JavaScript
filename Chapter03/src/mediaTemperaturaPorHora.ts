const averageTemp: number[][] = [];

averageTemp[0] = [72, 75, 79, 79, 81, 81];
averageTemp[1] = [81, 79, 75, 75, 73, 73];
averageTemp[2] = [45, 25, 33, 50, 80, 18];

// function printMatrix(myMatrix: number[][]) {
//  for (let linha = 0; linha < myMatrix.length; linha++) {
//   for (let coluna = 0; coluna < myMatrix[linha].length; coluna++) {
//    console.log(myMatrix[linha][coluna]);
//   }
//  }
// }
// printMatrix(averageTemp);

console.table(averageTemp);
