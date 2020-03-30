/* eslint-disable no-unexpected-multiline */
// 扩展运算符
// 扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。
const arr = [1, 2, 3]
console.log(...arr)
function fn1 (a, b, c) {
  return a + b + c
}
console.log(fn1(...arr))
function fn2 (a, b, c, d, e, f) {
  return a + b + c + d + e + f
}
console.log(fn2(1, 2, ...arr, 3))
function fn3 (...arr) {
  console.log(arr)
}
fn3(1, 2, 3)
// 只有函数调用的时候...才可以放在括号中
// console.log((...arr)); //报错
console.log(...arr) // 1 2 3
// 代替 apply 方法
console.log(fn1.apply(null, arr))
console.log(Math.max.apply(null, arr))
// ES5的 写法
var arr1 = [0, 1, 2]
var arr2 = [3, 4, 5]
// Array.prototype.push.apply(arr1, arr2)
// ES6的 写法
arr1.push(...arr2)
console.log('ha', arr1)
// 扩展运算符的应用
// （1）复制数组
{
  const arr1 = [1, 2, 3]
  const arr2 = [4, 5, 6]
  const arr3 = arr1.concat() // es5
  const arr4 = [...arr1] // es6
  const arr5 = arr1 // 浅拷贝
  arr3[0] = 10
  arr4[0] = 10
  arr5[0] = 10
  console.log(arr1) // 10 2 3
}
{
  // 合并数组
  const arr1 = ['a', 'b']
  const arr2 = ['c']
  const arr3 = ['d', 'e']
  // ES5 的合并数组
  arr1.concat(arr2, arr3)
  // ES6 的合并数组
  console.log([...arr1, ...arr2, ...arr3])
  console.log(arr1.concat(arr2, arr3))
}
{
  // （3）与解构赋值结合
  const arr1 = [1, 2, 3]
  const [...arr2] = arr1
  const [first, ...arr3] = arr1 // 扩展运算符必须放在尾部 否则会报错
  console.log(arr2, first, arr3)
}
{
  // 结合字符串
  const str = 'hello'
  const arr = [...str]
  console.log(arr)
  // 它有一个重要的好处是能识别四个字节的 uncode 字符
  function length (str) {
    return [...str].length
  }

  length('x\uD83D\uDE80y') // 3
  const strs = 'x\uD83D\uDE80y'
  str.split('').reverse().join('')
  // 'y\uDE80\uD83Dx'
  console.log([...strs].reverse().join(''))
// 'y\uD83D\uDE80x'
}
// {
//   // 5）实现了 Iterator 接口的对象
//   // 任何定义了遍历器（Iterator）接口的对象（参阅 Iterator 一章），都可以用扩展运算符转为真正的数组。
//   Number.prototype[Symbol.iterator] = function * () {
//     let i = 0
//     const num = this.valueOf()
//     while (i < num) {
//       yield i++
//     }
//   }
//   console.log([...5]) // [0, 1, 2, 3, 4]
// }
{
  // Map 和 Set 结构，Generator 函数
  const map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three']
  ])
  const arr = [...map.keys()] // [1, 2, 3]
}
{
  // Array.from() Array.from方法用于将两类对象转为真正的数组：
  // 类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）。
  const arrayLike = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
  }

  // ES5的写法
  var arr1 = [].slice.call(arrayLike) // ['a', 'b', 'c']

  // ES6的写法
  const arr2 = Array.from(arrayLike) // ['a', 'b', 'c']
  // 只要是部署了 Iterator 接口的数据结构，Array.from都能将其转为数组。
  Array.from('hello')
  // ['h', 'e', 'l', 'l', 'o']
  const namesSet = new Set(['a', 'b'])
  Array.from(namesSet) // ['a', 'b']
  // 与扩展运算符不同的是 array.form 可以转换任何类数组的结构，也就是只要有 length 就可以转换
  Array.from({ length: 3 }) /// / [ undefined, undefined, undefined ]
  // [].slice.call({}) //兼容写法
  Array.from({ length: 2 }, () => 'jack') // 支持第二个参数
  // ['jack', 'jack']
}
// {
//   // Array.of方法用于将一组值，转换为数组。
//   // 原始的 Array() 方法有缺陷，参数的个数必须大于 2 才能正确的生成数组
//   Array() // []
//   Array(3) // [, , ,]
//   Array(3, 11, 8) // [3, 11, 8]

//   Array.of() // []
//   Array.of(undefined) // [undefined]
//   Array.of(1) // [1]
//   Array.of(1, 2) // [1, 2]
// }
{
  // copyWithin 数组实例的copyWithin()方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），
  // 然后返回当前数组。也就是说，使用这个方法，会修改当前数组。
  // Array.prototype.copyWithin(target, start = 0, end = this.length)

  // 基本用法
  const arr = [1, 2, 3, 4, 5]
  const arr1 = arr.copyWithin(0, 3) // [4,5,3,4,5]
  // 另一种兼容写法
  // [].prototype.copyWithin(arr,0,3)
}
{
  // 数组实例的 find() 和 findIndex()
  // 数组实例的find方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，
  // 直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined。
  // 基本用法
  const arr = [0, 1, 2, 3]
  arr.find(f => f > 2) // 3
  arr.findIndex(f => f > 0) // 1 位置

  // 第二参数，可以指定 this
  const obj = {
    name: 'pck',
    age: 2
  }
  arr.find(f => f > this.age, obj) // 3  this 指向 obj
}
{
  // 数组实例的 fill()
  // fill方法使用给定值，填充一个数组。
  // 基本用法
  const arr = [0, 1, 2]
  arr.fill(7) // [7,7,7]
  Array.from({ length: 3 }).fill(7) // [7,7,7]
  // 接受第二第三参数，指定起始位置跟结束位置
  Array.from({ length: 5 }).fill(7, 1, 3) // [undefined,7,7,undefined,undefined]
  // 如果填充的是对象，那么该数组里的所有项都指向同一个对象指针
  arr.fill({ name: 'pck' }) // [{name:'pck'},{name:'pck'},{name:'pck'}]
  arr[0].name = 'ppp' // [{name:'ppp'},{name:'ppp'},{name:'ppp'}]
}
// {
//   // 数组实例的 entries()，keys() 和 values()
//   for (const index of ['a', 'b'].keys()) {
//     console.log(index)
//   }
//   // 0
//   // 1

//   for (const elem of ['a', 'b'].values()) {
//     console.log(elem)
//   }
//   // 'a'
//   // 'b'

//   for (const [index, elem] of ['a', 'b'].entries()) {
//     console.log(index, elem)
//   }
//   // 0 "a"
//   // 1 "b"
// }
{
  // Array.prototype.includes方法返回一个布尔值，
  // 表示某个数组是否包含给定的值，与字符串的includes方法类似
  const arr = [0, 1, 2]
  arr.includes(0) // true
  // 第二个参数代表查找位置
  arr.includes(0, 1) // false
  // 在此之前我们通常使用 indexof
  if (arr.indexOf(0) !== -1) {
    console.log(true)
  }
  // indexOf方法有两个缺点，一是不够语义化，它的含义是找到参数值的第一个出现位置，所以要去比较是否不等于-1，表达起来不够直观。
  // 二是，它内部使用严格相等运算符（===）进行判断，这会导致对NaN的误判。
  // 以下代码可以检测是否支持该方法，不支持可以做兼容代替
  const contains = (() =>
    Array.prototype.includes
      ? (arr, value) => arr.includes(value)
      : (arr, value) => arr.some(el => el === value)
  )()
  contains(['foo', 'bar'], 'baz') // => false
}
{
  // 数组实例的 flat()，flatMap()
  // 数组的成员有时还是数组，Array.prototype.flat()用于将嵌套的数组“拉平”，
  // 变成一维的数组。该方法返回一个新数组，对原数据没有影响。
  [1, 2, [3, 4]].flat() // [1,2,3,4]
    // 第二个参数表示拉平的层数
    [1, 2, [3, [4, 5]]].flat() // [1,2,3,[4,5]]
    [1, 2, [3, [4, 5]]].flat(2) // [1,2,3,4,5]
    // ，flatMap 相当于 map 方法
    [1, 2, 3].flatMap(x => [x, x * 2]) // [1,2,2,4,3,6]
    // 但是它只能展开一层
    [1, 2, 3].flatMap(x => [[x * 2]]) // [[2],[4],[6]]
    // 可以指定 this
  const obj = {
    age: 2
  }
    [1, 2, 3].flatMap(x => [x * this.age], obj) // [2,4,6]
}
