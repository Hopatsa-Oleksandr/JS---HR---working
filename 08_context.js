//Контект this

// const person = {
//   surname: "Alex",
//   knows: function (what, name) {
//     console.log(`Ты ${what} можешь, ${name} ${this.surname}`);
//   },
// };

// const john = { surname: "Сноу" };

// person.knows("все", "BC");
// person.knows.call(john, "в следующий раз", "Джон");
// person.knows.apply(john, ["в следующий раз", "Джон"]);
// person.knows.call(john, ...["в следующий раз", "Джон"]);
// person.knows.bind(john, "в следующий раз", "Джон")();
// const bound = person.knows.bind(john, "в следующий раз", "Джон");
// bound();

//=======================================================================

// function Person(name, age) {
//   this.name = name;
//   this.age = age;

//   console.log(this);
// }

// const elena = new Person("Elena", 20);

//bind================Явный=================================================

function logThis() {
  console.log(this);
}

const obj = { num: 42 };
logThis.apply(obj);
// logThis.call(obj);
// logThis.bind(obj)();

//====================Неявный====================================
//не явная передача контекста

const animal = {
  legs: 4,
  logThis: function () {
    console.log(this);
  },
};

animal.logThis();

//=================стрелочные фу-ции => ============================

function Cat(color) {
  this.color = color;
  console.log("This", this);
  (() => console.log("Arrow this", this))();
}

new Cat("White");
