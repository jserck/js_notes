/* eslint-disable no-self-compare */
/* eslint-disable no-lone-blocks */
// 对象的扩展
{
  // 属性的简洁表示法
// 基本用法
  const obj = {
    a: 'name',
    b () {
    //   console.log(this.a)
    }
  }
  obj.b()
  const v = obj.b
  v()
  const vv = {

  }
  function fn1 (x, y) {
    // console.log(x, y)
  }
  function fn2 () {
    // console.log('11')
  }
  module.exports = {
    fn1, fn2
  }

  const wha = {
    _weels: 4,
    get weels () {
      return this._weels
    },
    set weels (value) {
      if (value < this._weels) {
        throw new Error('数值太小了！')
      }
      return this._weels
    }
  }
  //   console.log(wha.weels)

  const obj1 = {
    a: '1'
  }
  const obj2 = {
    a: '2',
    fn () {}
  }
//   console.log({ obj1, obj2 })
//   new obj2.fn() // 用在构造函数报错
}
{
  // 属性名表达式
  const objNmae = {
    pack: 'heoo'
  }
  function fn1 () {
    return 'age'
  }
  const obj = {
    a: '1',
    [objNmae.pack]: 'pckpck',
    [objNmae]: 'name',
    [fn1()]: 27
  }
//   console.log(obj) // [object Object]: "name"
}
{
  // 方法的 name 属性
  const obj = {
    a () {}
  }
  function b (params) {

  }
  const own = {
    _a: 4,
    get a () {
      return this._a
    },
    set a (value) {
      return this._a
    }
  }
  const de = Object.getOwnPropertyDescriptor(own, 'a')
  const key1 = Symbol('wo shi key')
  const objSy = {
    [key1] () {
    //   console.log('s')
    }
  }
//   console.log(obj.a.name)
//   console.log(b.name)
//   console.log(de.get.name)
//   console.log(de.set.name)
//   console.log(objSy[key1].name)
}
{
  // 属性的可枚举性和遍历
  const obj = {
    a: '1',
    b: '2',
    c: '3',
    d: '4'
  }
  const cc = Object.getOwnPropertyDescriptor(obj, 'a', {
    value: '1', writable: true, enumerable: true, configurable: true
  })
  //   console.log(cc)
  //   console.log(Object.keys(obj))
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const element = obj[key]
    //   console.log(element)
    }
  }
  for (const iterator of [11, 22, 33, 44].entries()) {
    // console.log(iterator)
  }
  [11, 22, 33, 44].forEach((a, b) => {
    // console.log(a, b)
  })
}
{
  // super 关键字
  const obj = {
    a: '2',
    // c:super.a, //报错
    b () {
    //   console.log(super.a)
    },
    c () {
      super.fn()
    }
  }
  const obj2 = {
    a: 'dfd',
    b: '3',
    fn () {
    //   console.log(this.a)
    }
  }
  Object.setPrototypeOf(obj, obj2)
  obj.b()
  obj.fn()
  obj.c()
}
{
  // 对象的扩展运算符
  const obj = {
    a: 1, b: 2, c: 3
  }
  const { a, ...obj1 } = obj
  //   console.log(a, obj1)
  function fn1 ({ a, ...obj2 }) {
    // console.log(obj2)
  }
  fn1(obj)
  const obj3 = Object.create({ a: 11, b: 22, c: 33 })
  obj3.d = 44
  const { ...obj4 } = obj3
//   console.log(Object.getPrototypeOf(obj3))
//   console.log(obj4)
}
{
  // 扩展运算符
  const obj = {
    a: 1, b: 2, c: 3
  }
  const obj1 = { ...obj }
  const { obj2 } = { ...[1, 2, 3, 4] }
//   console.log(obj1)
//   console.log(obj2)
}
{
  // Object.is()
//   console.log(NaN === NaN)
//   console.log(NaN == NaN)
//   console.log(+0 == -0)
//   console.log(Object.is(NaN, NaN))
//   console.log(Object.is(+0, -0))
//   console.log(Object.getPrototypeOf(Object))
//   console.log(Object.getOwnPropertyDescriptor(Object.prototype, 'is'))
  Object.defineProperty(Object, 'is', {
    value: function (x, y) {
      console.log(1 / 0 === 1 / -0)
      if (x === y) {
        // 针对+0 不等于 -0的情况
        return x !== 0 || 1 / x === 1 / y
      }
      // 针对NaN的情况
      return x !== x && y !== y
    },
    configurable: true,
    enumerable: false,
    writable: true
  })
//   console.log(Object.is(-0, +0))
}
{
  /// / Object.assign()
  const obj1 = { a: 1 }
  const obj2 = { b: 2 }
  const obj3 = { c: 3 }
  const obj4 = Object.assign(obj1, obj2, obj3)
  //   console.log(Object.assign(4))
  // 为对象添加属性
  Object.assign(obj4, { e: '我是多的' })
//   console.log(obj4)
}
// Object.getOwnPropertyDescriptors()
{
  const obj = { a: 1 }
  Object.getOwnPropertyDescriptor(obj)
  //   console.log(Object.getOwnPropertyDescriptor({ a: 4 }))
  const obj1 = Object.create(
    {},
    Object.getOwnPropertyDescriptors({
      foo: 123
    })
  )
  const source = {
    set foo (value) {
      console.log(value)
    }
  }

  const target2 = {}
  Object.defineProperties(target2, Object.getOwnPropertyDescriptors(source))
  Object.getOwnPropertyDescriptor(target2, 'foo')
  target2.foo = 2
  // console.log(new URLSearchParams('foo=bar&baz=qux'))
  // console.log(Object.fromEntries(new URLSearchParams('foo=bar&baz=qux')))

//   console.log(target2)
}
// __proto__属性，Object.setPrototypeOf()，Object.getPrototypeOf()
// Object.keys()，Object.values()，Object.entries()
{
  // Object.fromEntries()
  // Object.fromEntries()方法是Object.entries()的逆操作，用于将一个键值对数组转为对象。
  console.log(Object.fromEntries([['a', 1], ['b', 2]]))// {a: 1, b: 2}
}
{
  // // 链式运算符
  // const obj = {
  //   a: 1
  // }
  // const str = obj?.a ?? '1'
  // console.log(str)
}
