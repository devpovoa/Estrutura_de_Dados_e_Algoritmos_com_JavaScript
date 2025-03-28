const Matrix3x3x3: number[][][] = [];

for (let i = 0; i < 3; i++) {
  Matrix3x3x3[i] = [];
  for (let j = 0; j < 3; j++) {
    Matrix3x3x3[i][j] = [];
    for (let z = 0; z < 3; z++) {
      Matrix3x3x3[i][j][z] = i + j + z;
    }
  }
}
console.log("Matriz 3x3x3:");

for (let i = 0; i < Matrix3x3x3.length; i++) {
  console.log(`Camada ${i}:`);
  console.table(Matrix3x3x3[i]);
}
