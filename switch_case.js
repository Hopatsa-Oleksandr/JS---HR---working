//switch используется как заменитель if else

// const alex = 4;

// switch (alex) {
//   case 1:
//     console.log("Вы плохо подготовились!");
//     break;
//   case 2:
//     console.log("Неудовлетворительно!");
//     break;
//   case 3:
//     console.log("Можно было и лучше!");
//     break;
//   case 4:
//     console.log("Хорошо, постарался!");
//     break;
//   case 5:
//     console.log("Молодец! Отлично!");
//     break;
//   default:
//     console.log("Такой оценки не существует!");
// }

//==========Масивы=============================

// const fruit1 = "Яблоко";
// const fruit2 = "Груша";
// const fruit3 = "Слива";
// const fruit4 = "Апельсин";

// console.log(fruit3);
//-------------------------

// const fruits = ["Яблоко" + "Груша" + "Слива" + "Апельсин"];
// console.log(fruits);

// console.log(fruits[1]);

//=====Цикл Фор - позволяет запускать код несколько раз====

// for (let i = 0; i < 10; i++) {
//   console.log("Hello world!");
// }

// for (let i = 0; i < 10; i++) {
//   console.log("i =" + i);
// }

// const fruits = [
//   "Яблоко",
//   "Груша",
//   "Слива",
//   "Апельсин",
//   "Яблоко1",
//   "Груша2",
//   "Слива3",
//   "Апельсин4",
//   "Яблоко11",
//   "Груша22",
//   "Слива33",
//   "Апельсин44",
// ];
// for (let i = 0; i < 12; i++) {
//   console.log(fruits[i]);
// }

// const fruits = [
//   "Яблоко",
//   "Груша",
//   "Слива",
//   "Апельсин",
//   "Яблоко1",
//   "Груша2",
//   "Слива3",
//   "Апельсин4",
//   "Яблоко11",
//   "Груша22",
//   "Слива33",
//   "Апельсин44",
// ];

// console.log(fruits.length);

// const fruits = [
//   "Яблоко",
//   "Груша",
//   "Слива",
//   "Апельсин",
//   "Яблоко1",
//   "Груша2",
//   "Слива3",
//   "Апельсин4",
//   "Яблоко11",
//   "Груша22",
//   "Слива33",
//   "Апельсин44",
// ];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// .forEach() - поиск всех заголовков, всех кнопок, всех дивов, найти их скрыть обойти что то сделать..

// const fruits = [
//   "Яблоко",
//   "Груша",
//   "Слива",
//   "Апельсин",
//   "Яблоко1",
//   "Груша2",
//   "Слива3",
//   "Апельсин4",
//   "Яблоко11",
//   "Груша22",
//   "Слива33",
//   "Апельсин44",
// ];

// fruits.forEach(function (item, i) {
//   console.log(`Элемент с индексом = ${i} = ${item}`);
//   console.log(`Элемент с индексом = ${item} = ${i}`);
//   console.log(`Элемент ${item}`);
// });

//========Функции=====================================

// let greeting1 = `Привет Алексей! Как дела?`;
// console.log(greeting1);

// let greeting2 = `Привет Alex! Как дела?`;
// console.log(greeting2);

// let greeting3 = `Привет Djon! Как дела?`;
// console.log(greeting3);

// function greeting(name) {
//   console.log(`Привет ${name}! Как дела?`);
// }

// greeting(Алексей);
// greeting(Alex);
// greeting(Djon);

//==========Function вычесление==============================================

// function calculateSum(x, y) {
//   let result = x + y;
//   console.log(result);
// }

// calculateSum(5, 10);

// function calculateSum(x, y) {
//   let result = x + y;
//   console.log(result);
//   return result;
// }

// let answer = calculateSum(5, 10);
// console.log(answer);

// function calculateSum(x, y) {
//   let result = x + y;
//   return result;
// }

// let res = calculateSum(calculateSum(10, 20), calculateSum(30, 40));
// console.log(res);
//или вот так

// console.log(calculateSum(calculateSum(10, 20), calculateSum(30, 40)));

//====Function Declartion======================
//можем вызывать до того, как они обявлены
// calculateSum(20, 15);

// function calculateSum(x, y) {
//   let result = x + y;
//   console.log(result);
//   return result;
// }

//====Function Expression======================

// let calculateSum = function (x, y) {
//   let result = x + y;
//   console.log(result);
//   return result;
// };
//такие ф-ции можем вызывать только после того как они обявлены.hide

// calculateSum(10, 20);

//========обьект=================

// const alex = {
//   name: "Alex",
//   age: 32,
//   speciality: "html coder",
//   city: "Moscow",
// };

// console.log(alex);

// sayHi(alex.name, alex.age, alex.speciality, alex.city);

//==---------==

// const alex = {
//   name: "Alex",
//   age: 32,
//   speciality: "html coder", //это все свойства обьекта
//   city: "Moscow",
//   sayHi: function (name, age, speciality, city) {
//     console.log(
//       `Привет, меня зовут ${this.name}, мне ${age}, я ${speciality} из города ${city}.`
//     );
//   }, //если в свойствах записана ф-ция, то это метод.
// this внутри метода ссылается на обьект
// };

// alex.sayHi(alex.name, alex.age, alex.speciality, alex.city);

//===============this в нутри метода вернет обьект=================

// const alex = {
//   name: "Alex",
//   age: 32,
//   speciality: "html coder", //это все свойства обьекта
//   city: "Moscow",
//   sayHi: function (name, age, speciality, city) {
//     console.log(
//       `Привет, меня зовут ${this.name}, мне ${this.age}, я ${this.speciality} из города ${this.city}.`
//     );
//   }, //если в свойствах записана ф-ция, то это метод.
// this внутри метода ссылается на обьект
// };

// alex.sayHi();

//======construcor для создания обьекта======================

//Суть конструктора описать один раз структуру

// function Person(name, age, spec, city) {
//   this.name = name;
//   this.age = age;
//   this.spec = spec;
//   this.city = city;
// }

// const alex = new Person("Алех", 30, "веб-дизайнер", "Самара");
// console.log(alex);

// const grisha = new Person("Гриша", 45, "веб-разраб", "Стамбул");
// console.log(grisha);

// const olya = new Person("Оля", 18, "дизайнер", "Киев");
// console.log(olya);

//====  В ф-ию констуктор мы можем помесить метод

// function Person(name, age, spec, city) {
//   this.name = name;
//   this.age = age;
//   this.spec = spec;
//   this.city = city;
//   this.sayHi = function () {
//     console.log(
//       `Привет, меня зовут ${this.name}, мне ${this.age}, я ${this.speciality} из города ${this.city}.`
//     );
//   };
// }

// const alex = new Person("Алех", 30, "веб-дизайнер", "Самара");
// console.log(alex);
// alex.sayHi();

// const grisha = new Person("Гриша", 45, "веб-разраб", "Стамбул");
// console.log(grisha);
// grisha.sayHi();

// const olya = new Person("Оля", 18, "дизайнер", "Киев");
// console.log(olya);
// olya.sayHi();

//=====классы ЕС6 ======================

// const mary = new Person("Мария", 25, "блогер", "Москва");

class Person {
  constructor(name, age, speciality, city) {
    this.name = name;
    this.age = age;
    this.speciality = speciality;
    this.city = city;
  }

  sayHi() {
    console.log(
      `Привет, меня зовут ${this.name}, мне ${this.age}, я ${this.speciality} из города ${this.city}.`
    );
  }
}

const petr = new Person("Петр", 28, "веб-разработчик", "Москва");

console.log(petr);
petr.sayHi();

const mary = new Person("Мирия", 18, "разработчик", "Киев");

console.log(mary);
mary.sayHi();
