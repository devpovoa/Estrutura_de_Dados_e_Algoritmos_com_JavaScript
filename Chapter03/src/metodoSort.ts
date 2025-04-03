let names: string[] = ["Ana", "ana", "john", "John"];
// console.log(names.sort());

// console.log(
//   names.sort((a, b) => {
//     return a.toLowerCase() < b.toLowerCase() ? -1 : 1;
//   })
// );

// console.log(
//   names.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }))
// );

console.log(names.sort((a, b) => a.localeCompare(b)));
