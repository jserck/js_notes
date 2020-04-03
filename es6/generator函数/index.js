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
    console.log('Hello' + (yield '123')) // OK
  }
  for (const iterator of fene()) {
    console.log(iterator)
  }
}
