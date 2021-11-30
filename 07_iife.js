//Immediate Invoked Function Expression
//Function Expression - который мгновенно выполняеться.
//создаються определенные ф-ции которые моментально вызываються)

// let result = [];
// for (var i = 0; i < 5; i++) {
//   result.push(function () {
//     console.log(i);
//   });
// }

// result[2]();
// result[4]();

//немного переделаем тот самый код дабы все работало правильно.
let result = [];
for (var i = 0; i < 5; i++) {
  (function () {
    var j = i;
    result.push(function () {
      console.log(j);
    });
  })();
}

result[2]();
result[4]();
