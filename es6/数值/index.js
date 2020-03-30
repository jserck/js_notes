/* eslint-disable no-unexpected-multiline */

//* ********二进制和八进制表示法 */
// es5 严格模式下不允许使用前缀 0 表示 ， ES6 提供了 0B /  0O 来表示
// console.log(0b111110111 === 503) // true
// eslint-disable-next-line func-call-spacing
// console.log(0B111110111 === 503) // true
// console.log(Number(0o17)) // 15

//* ********Number.isFinity  Number.isNaN */
// ES6提供了 以上两个方法来判断目标是否是有限的和是否是 NAN
// console.log(Number.isFinite(100)) // true
// console.log(Number.isFinite('100')) // false
// console.log(Number.isFinite(true)) // false
// console.log(Number.isFinite(Infinity)) // false
// console.log(Number.isNaN(100)) // false
// console.log(Number.isNaN('100')) // false
// console.log(Number.isNaN(NaN)) // true
// console.log(Number.isNaN('NaN')) // true
// 但是在原先全局的 isFinity 和 isnan 方法里面，如果目标不是数值，会先转换数据类型
// es6 提供的方法只对数值有效
// console.log(isFinite(100)) // true
// console.log(isFinite('100')) // true
// console.log(isNaN(NaN)) // true
// console.log(isNaN('NaN')) // true

//* *****Number.parseInt Number.parseFloat */
// ES6 把原先的 parseInt parseFloat 放在了 Number 对象上，为了逐步减少全局的属性
// console.log(parseInt('100.1')) //100
// console.log(parseFloat('100.999e')) //100.000

//* ******* Number.isInteger 判断是否为整数 */
// console.log(Number.isInteger(100)) // true
// console.log(Number.isInteger(100.1)) // false
// 但是，由于 js 采用 64位双精度格式储存数值，数值精度最多可达 53 位，一旦超过 53 ，第54位会被遗弃
// 这种情况下，该方法就会误判
// console.log(Number.isInteger(100.0000000000000000000000003)) // true
// 上面数值因为超过了 53 位，之后的 3 被遗弃
// 当然了，如果数值太小，也会误判，下面的例子因为数值超过了 js 能够识别的最小值，所以误判
// console.log(Number.isInteger(5E-324)) // FALSE
// console.log(Number.isInteger(5E-325)) // TURE
// 因为5e-325 超过了 324 所以被转为 0 ，所以，如果实际应用中对数值精度要求过高，不建议使用

//* *****Number.EPSILON 一个极小的常量 */
// 在 JS 中 0.1 + 0.2 === 0.3  为 false ,也就是说计算浮点数是有误差的
// 那么根据这个极小的常量，可以设置一个误差值来使这个式子成立
// function withInErrorMargin (l, r) {
//   return Math.abs(l - r) < Number.EPSILON * Math.pow(2, 2)
// }
// const num = withInErrorMargin(0.1 + 0.2, 0.3)
// console.log(num) // true

//* ********安全整数和 Number.isSafeInteger 是否在安全整数范围内*/
// js 能够表示的数值的精度在 2^53 和 2^-53 之间，不包括两者，一旦超过这个范围，就会误判
// 而它们的具体数值是
// console.log(Math.pow(2, 53))// 9007199254740992
// console.log(Math.pow(2, -53))// 1.1102230246251565e-16
// console.log(Math.pow(2, 53) === Math.pow(2, 53) + 1) // true
// Math.pow(2, 53) + 1因为超过了 js 可以表示的最大精度，所以误判为 Math.pow(2, 53) 9007199254740992
// es6 提供了两个属性来表示 这两个范围的上下限度 MAX_SAFE_INTEGER 和 MIN_SAFE_INTEGER
// console.log(Math.pow(2, 53) - 1 === Number.MAX_SAFE_INTEGER)
// console.log(Number.MIN_SAFE_INTEGER === -Number.MAX_SAFE_INTEGER)
// ES6提供了 Number.isFsfeInteger 来判断是否在安全范围内
// console.log(Number.isSafeInteger(1)) // true
// console.log(Number.isSafeInteger(Infinity)) // false
// console.log(Number.isSafeInteger(Math.pow(2, 53))) // false
// console.log(Number.isSafeInteger(Math.pow(2, 53) - 1)) // true
// console.log(Number.isSafeInteger(Math.pow(2, -53))) // false
// console.log(Number.isSafeInteger('123')) // false
// 简易的函数实现
// function newIsSafeInteger (num) {
//   return (typeof num === 'number' && Number.MAX_SAFE_INTEGER >= num && num >= Number.MIN_SAFE_INTEGER)
// }
// console.log(newIsSafeInteger(100)) // true
// console.log(newIsSafeInteger(Infinity)) // false
// 考虑以下情况
// function trusty1 (a, b) {
//   const c = a - b
//   if (Number.isSafeInteger(c)) {
//     return c
//   }
// }
// console.log(trusty1(Math.pow(2, 53), 990)) // 9007199254740002 Number.isSafeInteger(c) true
// 因为Math.pow(2, 53)是无法表示的，但是在表达式里面被转换成了 9007199254740002 所以返回错误的

// function trusty2 (a, b) {
//   const c = a - b
//   if (Number.isSafeInteger(a) && Number.isSafeInteger(b) && Number.isSafeInteger(c)) {
//     return c
//   }
//   throw new RangeError('cuo')
// }
// console.log(trusty2(Math.pow(2, 53), 990)) // 报错

// Math 对象扩展
// Math,trunc 用于去除数值的小数部分，返回整数部分，不是数值的话会先转换为数值，无法转换的话返回 nan
// Math.trunc(4.1) // 4
// Math.trunc(4.9) // 4
// Math.trunc(-4.1) // -4
// Math.trunc(-4.9) // -4
// Math.trunc(-0.1234) // -0
// Math.trunc('123.456') // 123
// Math.trunc(true) //1
// Math.trunc(false) // 0
// Math.trunc(null) // 0
// Math.trunc(NaN);      // NaN
// Math.trunc('foo');    // NaN
// Math.trunc();         // NaN
// Math.trunc(undefined) // NaN
// 兼容写法
// function trunc (num) {
//   if (typeof num === 'number') {
//     return Math.trunc(num) || Math.ceil(num) || Number.parseFloat(num)
//   }
// }
// console.log(trunc(4.9))// 4

// Math.sign方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。

// 它会返回五种值。

// 参数为正数，返回+1；
// 参数为负数，返回-1；
// 参数为 0，返回0；
// 参数为-0，返回-0;
// 其他值，返回NaN。
// console.log(Math.sign(10)) // 1
// console.log(Math.sign(-10)) // -1
// console.log(Math.sign(0))// 0
// console.log(Math.sign(-0))// -0
// console.log(Math.sign(10 - 20))// -1
// console.log(Math.sign(NaN))// NAN
// console.log(Math.sign('10'))// 1
// console.log(Math.sign(Infinity))// 1

// Math.cbrt方法用于计算一个数的立方根。
// console.log(Math.cbrt(1)) // 1
// console.log(Math.cbrt(8))// 2
// console.log(Math.cbrt(27))// 3
// console.log(Math.cbrt(NaN))// NAN
// console.log(Math.cbrt(Infinity))// INFINITY
// console.log(2 ** 2)
//* *******BigInt 新数据类型，表示大整数 */
//
// console.log(Math.pow(2, 1024)) // infinity
// 大于2的1024 次幂的数js 是无法表示的，返回 infinity，大整数就是可以表示任何大的整数
// console.log(Math.pow(Number(2n), Number(1024n)))
