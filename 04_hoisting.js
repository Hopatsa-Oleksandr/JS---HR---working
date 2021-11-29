//hoisting - это когда js берет и переопределяет начет вещей, например обращение к ф-ции еще в начале файла.

// console.log(sum((1), (41))); // = 42

// function sum(a, b) {
//   return a + b;
// }

//еще пример================================================

// console.log(i); // = undefined

// var i = 42;
// console.log(i); // = 42

//=========================================================

//const let -переменные не подвержены хостингу. Var -  поддерживается.

// console.log(num);
// const num = 42;   // ошибка
// console.log(num);

// console.log(num);
// let num = 42; // все ок
// console.log(num);

// console.log(num);
// var num = 42; // все ок
// console.log(num);

//Function Expression & Function Declaration (разные способы обьявления ф-ии)

// console.log(square(25));

// function square(num) {
//   return num ** 2;                //Function Declaration (можно вызивать где угодно, и где она определена)
// }

//**************************************************************************************************** */

// var square = function (num) {
//   return num ** 2;                //Function Expression
// };

// console.log(square(25));
