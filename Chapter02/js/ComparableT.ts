interface Compareble<T> {
  compareTo(b: T): number;
}

class MyObjectOne implements Compareble<MyObjectOne> {
  age: number;

  constructor(age: number) {
    this.age = age;
  }

  compareTo(b: MyObjectOne): number {
    if (this.age === b.age) {
      return 0;
    }
    return this.age > b.age ? 1 : -1;
  }
}

const obj1 = new MyObjectOne(38);
const obj2 = new MyObjectOne(27);
const obj3 = new MyObjectOne(16);
const obj4 = new MyObjectOne(40);

console.log(obj1.compareTo(obj2));
console.log(obj2.compareTo(obj3));
console.log(obj3.compareTo(obj4));
console.log(obj4.compareTo(obj1));
console.log(obj4.compareTo(obj4));
