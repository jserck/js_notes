{
  function * fn1 () {
    yield 1
    yield 2
  }
  for (const iterator of fn1()) {
    // console.log(iterator)
  }
  // console.log(fn1().next())
}
{
  const obj3 = {
    a: 3,
    next: null
  }
  const obj2 = {
    a: 2,
    next: obj3
  }

  const obj1 = {
    a: 1,
    next: obj2,
    b: function * (params) {
      let this_ = this
      yield this_.a
      this_ = this_.next
      yield this_.a
      this_ = this_.next
      yield this_.a
    },
    [Symbol.iterator]: function () {
      let this_ = this
      return {
        next: function (params) {
          if (this_) {
            const value = this_.a
            this_ = this_.next
            return {
              value, done: false
            }
          } else {
            return {
              value: undefined, done: true
            }
          }
        }
      }
    }
  }
  for (const iterator of obj1) {
    // console.log(iterator)
  }
  for (const iterator of obj1.b()) {
    // console.log(iterator)
  }
  // generator函数返回的遍历器对象会一次寻找yield标识符执行，当找到第一个yeild时会暂停后面的执行，当第一个
  // 返回结果时，再去寻找第二yeild，途中的函数会依次执行
  function * fn2 () {
    function num (number) {
      return number * 2
    }
    yield num(2)
    const obj1 = {}
    yield obj1.a = num(2)
    return obj1
  }
  // console.log(fn2().next())
}
{
  function * fn (params) {
    console.log('1')
  }
  // fn().next() // 只有调用next方法才会去执行
}
{
  const arr1 = [1, [[2, 3], 4], [5, 6]]
  const arr2 = [1, 2, 3, 4, 5, 6, 7]
  function * flat (arr) {
    const length = arr.length
    for (let index = 0; index < length; index++) {
      var item = arr[index]
      yield item
    }
  }
  // for (const iterator of flat(arr2)) {
  //   console.log(iterator) // 1234567
  // }
  // for (const iterator of flat(arr1)) {
  //   console.log(iterator) // 1 Array Array
  // }
  function * flat2 (arr) {
    const length = arr.length
    for (let index = 0; index < length; index++) {
      const element = arr[index]
      if (typeof element === 'number') {
        yield element
      } else {
        yield * flat2(element)
      }
    }
  }
  // for (const iterator of flat2(arr2)) {
  //   console.log(iterator) // 1234567
  // }
  // for (const iterator of flat2(arr1)) {
  //   console.log(iterator) // 123456
  // }
}
{
  // yeild 用在表达式中一定要加（），但是放在函数的参数或者rsh的时候不用
  function * fene () {
    // console.log('Hello' + (yield '123')) // OK
  }
  for (const iterator of fene()) {
    // console.log(iterator)
  }
}
{
  // 与 Iterator 接口的关系
  const arr = [{ name: 'pxck', age: 1 }, { names: 'pck', ages: 44 }]
  const [obj1, obj2] = arr
  const obj = Object.assign({ [Symbol.iterator]: objIntenetorCreate }, obj1, obj2)
  function * objIntenetorCreate () {
    yield obj.name
    yield obj.age
    yield obj.names
    yield obj.ages
  }
  for (const iterator of obj) {
    // console.log(iterator)
  }
  // console.log(...obj)

  // for (const iterator of obj) {
  //   console.log(iterator)
  // }
  // for (const key in obj) {
  //   if (obj.hasOwnProperty(key)) {
  //     const element = obj[key]
  //     console.log(element)
  //   }
  // }
}
{
  // next 方法的参数
  // iterator接口的yeild 是没有返回值的，如果需要返回值的话，可以通过next方法传入
  function * f () {
    for (var i = 0; true; i++) {
      var reset = yield i
      if (reset) { i = -1 }
    }
  }

  var g = f()
  // console.log(g.next()) // { value: 0, done: false });
  // console.log(g.next()) // { value: 0, done: false });
  // console.log(g.next(true)) // { value: 0, done: false });
}
{
  function * foo (mun) {
    // const x = (yield (mun + 1))
    // const y = (yield (x + 1))
    // const z = (yield y * 2)
    // return (x + y + z + mun)
    //* ***原demo */
    var y = 2 * (yield (mun + 1))
    var z = yield (y * 3)
    return (mun + y + z)
  }
  var a = foo(5)
  // console.log(a.next())
  // console.log(a.next(6))
  // console.log(a.next(7))
  // console.log(a.next(14))
  //* ***原demo */
  // console.log(a.next())
  // console.log(a.next(6))
  // console.log(a.next(7))
}
{
  function * foo () {
    console.log('staart')
    console.log(`1.${yield}`)
    console.log(`2.${yield}`)
    return 'reset'
  }
  const a = foo(5)
  // console.log(a.next(1))
  // console.log(a.next(2))
  // console.log(a.next(3))
}
{
  function wrapper (generatorFunction) {
    return function (args = '') {
      const generatorObject = generatorFunction()
      generatorObject.next(args)
      return generatorObject
    }
  }

  const wrapped = wrapper(function * () {
    console.log(`First input: ${yield}`)
    return 'DONE'
  })
  // wrapped('hello!').next('hello!')
  // wrapped().next()
  // wrapped()
}
{
  // js原生对象无法用for of 来遍历 object is not iterable，以下方法可以实现
  const obj = {
    name: 'pck',
    age: 24
  }
  // 1
  const objNew = Object.assign(Object.create({
    [Symbol.iterator]: function () {
      let num = 0
      const this_ = this
      return {
        next: function () {
          const objKey = Object.keys(objNew)
          const value = this_[objKey[num]]
          if (num > objKey.length) {
            return {
              done: true
            }
          }
          num++
          return {
            value: value,
            done: num > objKey.length
          }
        }
      }
    }
  }), obj)
  // for (const iterator of objNew) {
  //   console.log(iterator) // pck 24
  // }

  // 2
  function * iteatorGen () {
    const objKey = Object.keys(this)
    for (let index = 0; index < objKey.length; index++) {
      const element = objKey[index]
      yield this[element]
    }
  }
  obj[Symbol.iterator] = iteatorGen
  // for (const iterator of obj) {
  //   console.log(iterator) // pck 24
  // }
}
{
  function * g1 () {
    yield 'pck'
    yield '123'
  }
  function * g2 () {
    yield 'pckggg'
    yield * g1()
    yield '123344444'
  }
  // for (const iterator of g2()) {
  //   console.log(iterator)
  // }
}
{
  // let ticking = true
  // const clock = function () {
  //   if (ticking) { console.log('Tick!') } else { console.log('Tock!') }
  //   ticking = !ticking
  // }
  // clock()
  // clock()
  // clock()
  // clock()
  const clock = function * () {
    while (true) {
      console.log('Tick!')
      yield
      console.log('Tock!')
      yield
    }
  }
  const b = clock()
  b.next()
  b.next()
  b.next()
  b.next()
}
