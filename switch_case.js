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

const fruits = [
  "Яблоко",
  "Груша",
  "Слива",
  "Апельсин",
  "Яблоко1",
  "Груша2",
  "Слива3",
  "Апельсин4",
  "Яблоко11",
  "Груша22",
  "Слива33",
  "Апельсин44",
];
for (let i = 0; i < 12; i++) {
  console.log(fruits[i]);
}

const fruits = [
  "Яблоко",
  "Груша",
  "Слива",
  "Апельсин",
  "Яблоко1",
  "Груша2",
  "Слива3",
  "Апельсин4",
  "Яблоко11",
  "Груша22",
  "Слива33",
  "Апельсин44",
];

console.log(fruits.length);

const fruits = [
  "Яблоко",
  "Груша",
  "Слива",
  "Апельсин",
  "Яблоко1",
  "Груша2",
  "Слива3",
  "Апельсин4",
  "Яблоко11",
  "Груша22",
  "Слива33",
  "Апельсин44",
];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// .forEach() - поиск всех заголовков, всех кнопок, всех дивов, найти их скрыть обойти что то сделать..

const fruits = [
  "Яблоко",
  "Груша",
  "Слива",
  "Апельсин",
  "Яблоко1",
  "Груша2",
  "Слива3",
  "Апельсин4",
  "Яблоко11",
  "Груша22",
  "Слива33",
  "Апельсин44",
];

fruits.forEach(function (item, i) {
  console.log(`Элемент с индексом = ${i} = ${item}`);
  console.log(`Элемент с индексом = ${item} = ${i}`);
  console.log(`Элемент ${item}`);
});

//========Функции=====================================

let greeting1 = `Привет Алексей! Как дела?`;
console.log(greeting1);

let greeting2 = `Привет Alex! Как дела?`;
console.log(greeting2);

let greeting3 = `Привет Djon! Как дела?`;
console.log(greeting3);

function greeting(name) {
  console.log(`Привет ${name}! Как дела?`);
}

greeting(Алексей);
greeting(Alex);
greeting(Djon);

//==========Function вычесление==============================================

function calculateSum(x, y) {
  let result = x + y;
  console.log(result);
}

calculateSum(5, 10);

function calculateSum(x, y) {
  let result = x + y;
  console.log(result);
  return result;
}

let answer = calculateSum(5, 10);
console.log(answer);

function calculateSum(x, y) {
  let result = x + y;
  return result;
}

// let res = calculateSum(calculateSum(10, 20), calculateSum(30, 40));
// console.log(res);
//или вот так

console.log(calculateSum(calculateSum(10, 20), calculateSum(30, 40)));

//====Function Declartion======================
//можем вызывать до того, как они обявлены
calculateSum(20, 15);

function calculateSum(x, y) {
  let result = x + y;
  console.log(result);
  return result;
}

//====Function Expression======================

let calculateSum = function (x, y) {
  let result = x + y;
  console.log(result);
  return result;
};
//такие ф-ции можем вызывать только после того как они обявлены.hide

calculateSum(10, 20);
