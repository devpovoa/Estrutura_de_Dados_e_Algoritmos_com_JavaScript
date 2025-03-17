interface Person {
  name: string;
  age: number;
}

function printName(person: Person) {
  console.log(person.name);
}

const thiago = { name: "Thiago", age: 38 };
const daiana = { name: "Daiana", age: 35, phone: "2199082-5252" };

printName(thiago);
printName(daiana);
