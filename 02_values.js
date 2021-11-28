// let a = 42
// let b = a
// b++
// console.log('a', a) //= a42
// console.log('b', b) //= a43

// Вычесляемые типы данных - масивы.

// let a = [1, 2, 3]
// let b = a
// b.push(4) // добавлет после 3 - 4!.

// console.log('a', a)
// console.log('b', b)


//============метод .concat() - вызываем чтобы масив не мутировал.=================

// let a = [1, 2, 3]
// let b = a.concat() //возвращает копию масива
// b.push(4) // добавлет после 3 - 4!.

// console.log('a', a)
// console.log('b', b)

//=================================================================================

let a = [1, 2, 3]
let b = a
b.push(4) // добавлет после 3 - 4!

let c = [1, 2, 3, 4]

console.log('a', a)
console.log('b', b)

console.log(a === b) // = true
console.log(a === c) // = false