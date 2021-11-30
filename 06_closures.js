//Замыкания  -это момент когда ф-ция имеет доступ до переменных выше стоящего scoupe

// function sayHelloTo(name) {
//   const message = "Hello " + name;

//   return function () {
//     console.log(message);
//   };
// }

// const helloToElena = sayHelloTo("Elena");
// const helloToIgor = sayHelloTo("Igor");
// helloToElena();
// helloToIgor();

//================================================================
//практическое применнения замыкания

// function createFrameworkManager() {
//   const fw = ["Angular", "React"];

//   return {
//     print: function () {
//       console.log(fw.join(" "));
//     },
//     add: function (framework) {
//       fw.push(framework);
//     },
//   };
// }

// const manager = createFrameworkManager();
// console.log(manager);
// manager.print();
// manager.add("VueJS");

// manager.print();

//==============================================================
// setTimeout

// const fib = [1, 2, 3, 5, 8, 13];

// for (var i = 0; i < fib.length; i++) {
//   setTimeout(function () {
//     console.log(`fib[${i}] = ${fib[i]}`);
//   }, 1500);
// }

//Обяснение.. мы один раз создаем переменную i и она изменяеться у нас как ссылка.
//когда переменная i ровняеться 6, проверяем, что 6 меньше fib.length, фибоначи меньше.. поэтому цыкл не работает.
//Как поченить? Заменить var на let

// const fib = [1, 2, 3, 5, 8, 13];

// for (let i = 0; i < fib.length; i++) {
//   setTimeout(function () {
//     console.log(`fib[${i}] = ${fib[i]}`);
//   }, 1500);

// }

const fib = [1, 2, 3, 5, 8, 13];

for (var i = 0; i < fib.length; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(`fib[${j}] = ${fib[j]}`);
    }, 1500);
  })(i);
}
