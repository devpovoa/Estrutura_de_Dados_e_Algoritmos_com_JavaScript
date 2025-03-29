type Person = { name: string; age: number };

const friends: Person[] = [
  {
    name: "Thiago",
    age: 38,
  },
  {
    name: "Daiana",
    age: 35,
  },
  {
    name: "Ysabelle",
    age: 17,
  },
];

const comparePerson = (a: Person, b: Person) => a.age - b.age;

console.log(friends.sort(comparePerson));
