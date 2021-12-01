//==============Ключевое слово New=======================================

function Cat(color, name) {
  this.color = color;
  this.name = name;
}

// const cat = new Cat("black", "КОТ");
// console.log(cat);
//--------------------еще один вариант--------------------------
// function myNew(constructor, ...args) {
//   const obj = {};
//   Object.setPrototypeOf(obj, constructor.prototype);
//   return constructor.apply(obj, args) || obj;
// }

// const cat = myNew(Cat, "black", "КОТ");
// console.log(cat);

//--------------------еще один вариант--------------------------

// const cat = new Cat();
// console.log(cat);
