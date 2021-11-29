//Let   E6   - переменная которую в последствии можно изменить.

// let a = "Variable a";
// let b = "Variable b";
// {
//   a = "New Variable A";
//   let b = "Local Variable B";
//   console.log("Scope A", a);
//   console.log("Scope A", a);
// }
// console.log("A:", a);
// console.log("B:", b);

//Const
// const PORT = 8080;
// PORT = 2000; //const не меняется

//Масивы обьекты

const PORT = 8080;
const array = ["Javascript", "is", "Awesome"]; //const не меняется
array.push("!");
// array.shift("!");
array[0] = "JS"; //обращение по индексу
console.log(array);

const obj = {};
obj.name = "Alex";
obj.age = 26;

console.log(obj);

delete obj.name;
// obj.age = 21;

console.log(obj);
obj = 23;
