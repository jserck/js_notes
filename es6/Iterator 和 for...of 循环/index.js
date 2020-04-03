{
  // iterator 接口主要是为数组等可遍历解构分配一个指引，每调用一次Next方法，返回下一个指针所指向的索引{value,done}
  function createInterotor (arr = []) {
    let indexNum = 0
    return {
      next: function () {
        return indexNum === arr.length - 1 ? { value: arr[indexNum], done: true } : { value: arr[indexNum++], done: false }
      }
    }
  }
  const it = createInterotor(['a', 's', 'f'])
//   console.log(it.next())
//   console.log(it.next())
//   console.log(it.next())
}
{
  // 遍历器与数据结构是分开的，也就是说遍历器是可以单独运行的
  function interoTor () {
    let index = 0
    return {
      next: function () {
        return { value: index++, done: false }
      }
    }
  }
  const t = interoTor()
//   console.log(t.next())
//   console.log(t.next())
//   console.log(t.next())
//   console.log(t.next())
//   console.log(t.next())
//   console.log(t.next())
}
{
  // 某些原生的数据结构是默认部署了Intertoer遍历器的
  const arr = [0, 1, 2, 3]
  const t = arr[Symbol.iterator]()
//   for (const iterator of arr) {
//     console.log(iterator)
//     console.log(t.next())
//   }
//   console.log(t.next())
}
{
  function Obj (value) {
    this.value = value
    this.next = null
  }
  Obj.prototype[Symbol.iterator] = function () {
    var iterator = { next: next }
    var current = this
    function next () {
      if (current) {
        // console.log(current)
        var value = current.value
        current = current.next
        return { done: false, value: value }
      } else {
        return { done: true }
      }
    }
    return iterator
  }
  var one = new Obj(1)
  var two = new Obj(2)
  var three = new Obj(3)

  one.next = two
  two.next = three
  for (var i of one) {
    // console.log(i) // 1, 2, 3
  }
  // console.log(one[Symbol.iterator]().next()) // {done: false,value: 1}
  // console.log(one[Symbol.iterator]().next())// {done: false,value: 1}
  // console.log(one[Symbol.iterator]().next())// {done: false,value: 1}
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
  const obj = {
    a: 1,
    next: obj2,
    [Symbol.iterator]: function () {
      let this_ = this
      return {
        next: function () {
          if (this_) {
            const value = this_.a
            this_ = this_.next
            return { value: value, done: false }
          } else {
            return { value: undefined, done: true }
          }
        },
        return () {
          return { done: true }
        }
      }
    }
  }
  // for (const iterator of obj) {
  //   console.log(iterator)
  //   throw new Error('给我听')
  // }
  for (const iterator of obj) {
    // console.log(iterator)
    break
  }
  // console.log(obj[Symbol.iterator]().next())
  // console.log(obj[Symbol.iterator]().next())
  // console.log(obj[Symbol.iterator]().next())
}
{
  const set = new Set().add('1').add('2')
  const map = new Map()
  map.set('a', '1')
  map.set('b', '2')
  console.log(set.size)
  console.log(map.size)
  for (const iterator of set.keys()) {
    console.log(iterator)
  }
  for (const iterator of map.keys()) {
    console.log(map.get(iterator))
  }
}
