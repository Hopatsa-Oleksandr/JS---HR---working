// Прототипы.
// Каждый обьект берет свой прототип от родительского обьекта где был создан данный обьект
//__proto__
//Object.getPrototypeOf()

// function Cat(name, color) {
//   this.name = name;
//   this.color = color;
// }

// Cat.prototype.voice = function () {
//   console.log(`Cat ${this.name} says myay`);
// };

// const cat = new Cat("Кот", "white");

// console.log(Cat.prototype);
// console.log(cat);
// console.log(cat.__proto__);
// console.log(cat.__proto__ === Cat.prototype);
// console.log(cat.constructor);
// cat.voice();

//======Свойства достуаные в прототипе================================================================

function Person() {}
Person.prototype.legs = 2;
Person.prototype.skin = "white";

const person = new Person();
person.name = "Alex";

console.log("skin" in person);
console.log(person.legs);
console.log(person.name);

//===определяем какие есть свойства у прототипе а какие есть собственные=========

console.log(person.hasOwnProperty("name"));
console.log(person.hasOwnProperty("skin"));

//========Object.create() - Позволяет использовать некоторые обьекты, используя уже существующий прототип.

const proto = { year: 2019 };
const myYear = Object.create(proto);

console.log(myYear.year);

// proto.year = 2200;
// console.log(myYear.year);

// console.log(myYear.hasOwnProperty("year"));
// console.log(myYear.__proto__ === proto);
