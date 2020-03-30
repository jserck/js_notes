//* ***函数参数的默认值 */
// es6 之前给参数设置默认值
// function fn1 (a) {
//   if (!a) {
//     a = ''
//   }
//   // 或者
//   a = a || ''
//   return a
// }
// fn1()
// 但是这样的话不易维护，es6 简化了函数参数的默认值写法
// function fn2 (a = 1) {
//   return a
// }
// fn2()
// 除了简洁，ES6 的写法还有两个好处：首先，阅读代码的人，可以立刻意识到哪些参数是可以省略的，
// 不用查看函数体或文档；其次，有利于将来的代码优化，即使未来的版本在对外接口中，彻底拿掉这个参数，
// 也不会导致以前的代码无法运行。
// 显示的在参数里面给予默认，在参数里面声明之后，无法再次声明
// function fn3 (a = 1) {
//   // let a = 1
//   // const a = 1  会报错
//   return a
// }
// fn3()
// 与解构赋值结合使用
// function fn1 ({ a = 1, b = 2 }) {
//   return a + b
// }
// console.log(fn1({ a: 11, b: 12 })) // 23
// console.log(fn1()) // 报错
// 但是如果方法调用的时候没有提供参数，就会报错，所以需要为解构赋值对象提供默认值
// function fn1 ({ a = 1, b = 2 } = {}) {
//   return a + b
// }
// console.log(fn1({ a: 11, b: 12 })) // 23
// console.log(fn1()) // 3
// function fn1 ({ x, y } = { x: 0, y: 0 }) {
//   console.log(x, y)
// }
// function fn2 ({ x = 0, y = 0 } = {}) {
//   console.log(x, y)
// }
// 以上两种写法都是正确的，但是他们的不同之处在于 fn1 为解构赋值对象提供默认值 ， fn2 为参数提供默认值
// fn1() // 0 0
// fn2() // 0 0
// fn1({}) // undefined undefined
// fn2({}) // 0 0
// fn1({ x: 1 }) // 1 undefined
// fn2({ x: 1 }) // 1 0
// 参数默认值最好是在尾部，这样可以省略该参数，方法也会正确执行,但是应该尽量避免这种写法
// 例一
// function f(x = 1, y) {
//     return [x, y];
//   }

//   f() // [1, undefined]
//   f(2) // [2, undefined]
//   f(, 1) // 报错
//   f(undefined, 1) // [1, 1]

//   // 例二
//   function f(x, y = 5, z) {
//     return [x, y, z];
//   }

//   f() // [undefined, 5, undefined]
//   f(1) // [1, 5, undefined]
//   f(1, ,2) // 报错
//   f(1, undefined, 2) // [1, 5, 2]

// 函数的 length 属性
// const arr = { a: 1, b: 2 }
// function fn1 (a, b) {
//   console.log(a, b)
// }
// function fn2 (a = 1, b = 1) {
//   console.log(a, b)
// }
// function fn3 (a = 1, b) {
//   console.log(a, b)
// }
// function fn4 (...arr) {
//   console.log(...arr)
// }
// console.log(fn1.length) // 2
// console.log(fn2.length) // 0
// console.log(fn3.length) // 0
// console.log(fn4.length) // 0
// fn4(arr)
// 函数的 length 属性返回的是函数预设值参数的个数，但是这个属性会忽略设置了默认值的参数
// 和默认值之后的参数
// 作用域
// 一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域（context）。
// 等到初始化结束，这个作用域就会消失。这种语法行为，在不设置参数默认值时，是不会出现的。
// const x = 1
// function fn1 (x, y = x) {
//   console.log(y)
// }
// fn1(2) // 2
// console.log(x) // 1
// 当在当前作用域里面没有声明 x 会去全局找
// const x = 1
// function fn1 (y = x) {
//   const x = 2
//   console.log(y)
// }
// fn1()// 1
// 当全局 x 声明不存在就会报错
// function fn1 (y = x) {
//   const x = 2
//   console.log(y)
// }
// fn1()// 报错
// var x = 1

// function foo (x = x) {
//   // ...
// }

// foo() // ReferenceError: x is not defined
// 默认值是函数的时候也是一样的
// function bar (func = () => foo) {
//   const foo = 'inner'
//   console.log(func())
// }

// bar() // ReferenceError: foo is not defined
// var x = 1
// function foo (x, y = function () { x = 2 }) {
//   var x = 3
//   y()
//   console.log(x)
// }

// foo() // 3
// x // 1
//* *****rest 参数 */
// ES6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了。
// rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
// function fn1 (...items) {
//   let sum = 0
//   items.forEach((index) => {
//     sum += index
//   })
//   console.log(sum)
//   return sum
// }
// fn1(2, 5, 3) // 10
// 代替 arguments
// function fn1 (...items) {
//   return Array.prototype.slice.call(arguments).sort()
// }
// function fn2 (...items) {
//   return items.sort()
// }
// console.log(fn1(13, 4, 7))
// console.log(fn2(13, 4, 7))
// function push(array, ...items) {
//     items.forEach(function(item) {
//       array.push(item);
//       console.log(item);
//     });
//   }

//   var a = [];
//   push(a, 1, 2, 3)
// rest 参数会影响 length 属性
// 严格模式下使用 解构赋值 rest 参数 默认值 会报错，可以用以下方式来解决
// 1. 全局开启严格模式
// 2. 用一个自执行函数体包裹严格模式启动命令
// const fn1 = (function () {
//   'use strict'
//   return function (value = 0o110) {
//     return value
//   }
// })()
// console.log(fn1())
// 箭头函数嵌套
// const pipeline = (...funcs) =>
//   val => funcs.reduce((a, b) => b(a), val)

// const plus1 = a => a + 1
// const mult2 = a => a * 2
// const addThenMult = pipeline(plus1, mult2)
// console.log(addThenMult(5)) // 12
// console.log(mult2(plus1(5))) // 12

// function getNum (a, b, c, d) {
//   console.log(a, b, c, d)
//   return a + b
// }
// const arr = [1, 2, 3]
// const sum = arr.reduce(getNum, 5)
// console.log(sum)
// 箭头函数不适用的场景
// 1  不适用创建对象属性,因为 this 机制的原因， 表现会不同
// const a = 2
// const obj = {
//   a: 1,
//   b: () => {
//     console.log(this.a)
//   },
//   c: function () {
//     console.log(this.a)
//   }
// }
// obj.b() // 2
// obj.c() // 1
// 2  点击事件的回调函数,当前的 this 不是 document 对象
// document.addEventListener(() => {
//   console.log(this.classList)
// })
