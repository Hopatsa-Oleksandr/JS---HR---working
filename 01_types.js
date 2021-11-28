console.log("Hi");

//в JS есть 7 типов данных
// null, undefined, Boolean, Number, String, Object, Symbol

console.log(typeof 0); //примитивный тип данных
console.log(typeof true);
console.log(typeof "Javascript");
console.log(typeof undefined);
console.log(typeof {}, Date, Math);
console.log(typeof Date);
console.log(typeof Math);
console.log(typeof Symbol("JS"));
console.log(typeof null); //неточность! это не object а null
console.log(typeof function () {});
console.log(typeof NaN); //Переводится как не число.
console.log(undefined * 1);

//Отличие undefined от null в том, что undefined используеться когда переменная не обявлена пример const - без значения.
//+ ф-ции котроые ничего не возвращают по умолчанию возвращают undefined.

//Приведения типов
//js приводит тип данных либо к false либо true
//Пример с true
let language = "JavaScript";

if (language) {
  console.log("The best language is: ", language);
}

//Существет определенные значения которые приводятся к false.
