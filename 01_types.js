console.log("HI")

//7 типов данных
// null, undefined, boolean, number, string, object, (symbol - используется в E6 синтаксисе) 3

// В JS сучествует оператор typeOff -который позволит узнать какого типа переменная или значение.

console.log(typeof 0) //number
console.log(typeof true) //boolean
console.log(typeof "Javascript") //Существует 3 типа кавычек. "", '', ``. - string
console.log(typeof undefined)
console.log(typeof {}) - обьект
console.log(typeof Date)
console.log(typeof Math)
console.log(typeof Symbol('JS'))
console.log(typeof null) //object (это не точность)
console.log(typeof function () { })
console.log(typeof NaN) //not a number не число, но в консоле показывает как число. (это не точность). Nan мы можем получить, когда будем делить на 0.
console.log(typeof (1 / 0))
console.log(undefined * 1)
console.log(1 / 0) //Infinity

//В чем отличие undefined от null?
//undefined используеться тогда когда переменная не обьявлена или была обьявлена с помощью const
//но при этом не имеет никакого значения + ф - ции которые ничего не возвращают они по умолчанию возвращают undefined.



//ПРИВЕДЕНИЯ ТИПОВ
let language = "JavaScript"

if (language) {
    console.log('The best language is: ', language)
}

//существуют определенные значения которые приводяться к false
'', 0, null, undefined, NaN, false
console.log(Boolean('')) //false
console.log(Boolean('Hello')) //true
console.log(Boolean(' ')) //true - пробел являеться символом
console.log(Boolean('0')) //true - строка
console.log(Boolean(0)) //false
console.log(Boolean(null)) //false
console.log(Boolean([])) //true - пустой масив
console.log(Boolean({})) //true - пустой обьект
console.log(Boolean(function(){})) //true - ф-ция




//Строки и числа

console.log(1 + '2') //= string 12  не число
console.log('' + 1 + 0) //= string 10  не число
console.log('' - 1 + 0) //= -1 число number
console.log('3' * '8') //= 24 число number
console.log(4 + 10 + 'px') //= порядок очень важен = 14px
console.log('px' + 5 + 10) //= порядок очень важен = px510 - string
console.log('42' - 40) //= 2 - string
console.log('42px' - 2) //= NaN
console.log(null + 2) //= 2
console.log(undefined + 42) //= NaN - undefined невозможно привести к числу





//== vs === (разница в том что == - сравнивает значение с приведение типов === - и по типу и значению без приведений типов)


console.log(2 == '2') //= true - интепретатор пытается привести все к одному типу.
console.log(2 === '2') //= false - js сравнивает по значению.
console.log(undefined == null) //= true
console.log(undefined === null) //= false
console.log('0' == false) //= true
console.log('0' == 0) //= true
console.log(0 == 0) //= true



// =================================СПИСОК СРАВНЕНИЙ===========================================================================

console.log(false == '') //= true
console.log(false == []) //= true
console.log(false == {}) //= false
console.log('' == 0) //= true
console.log('' == []) //= true
console.log('' == {}) //= false
console.log(0 == []) //= true
console.log(0 == {}) //= false
console.log(0 == null) //= false
