// Interface que contém um método.
interface Comparable {
  // Método que compara, sem argumento.
  comparaTo(b: this): number;
}
// classe que implementa o contrato Comparable.
class MyObject implements Comparable {
  age: number;
  // Construtor da classe
  constructor(age: number) {
    this.age = age;
  }
  // Método compare com argumento implementado pela classe MyObject.
  comparaTo(b: this): number {
    if (this.age === b.age) {
      return 0;
    }
    return this.age > b.age ? 1 : -1;
  }
}

const obj1 = new MyObject(25);
const obj2 = new MyObject(30);
const obj3 = new MyObject(25);

console.log(obj1.comparaTo(obj2)); // Deve imprimir -1 (25 < 30)
console.log(obj2.comparaTo(obj1)); // Deve imprimir 1 (30 > 25)
console.log(obj1.comparaTo(obj3)); // Deve imprimir 0 (25 == 25)
