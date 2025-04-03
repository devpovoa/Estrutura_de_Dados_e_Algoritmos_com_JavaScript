let tam: number = 5;

let int16 = new Int16Array(tam);
let array16: number[] = [];

array16.length = tam;
for (let i = 0; i < tam; i++) {
  int16[i] = i + 1;
}

console.log(int16);
