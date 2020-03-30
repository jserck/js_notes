{
  // 基本用法
  function name (params) {
    console.log()
  }
  // 老写法
  //   try {
  //     Object.defineProperty(target, property, attributes)
  //     // success
  //   } catch (e) {
  //     // failure
  //   }

  //   // 新写法
  //   if (Reflect.defineProperty(target, property, attributes)) {
  //     // success
  //   } else {
  //     // failure
  //   }
  // 老写法
  Function.prototype.apply.call(Math.floor, undefined, [1.75]) // 1

  // 新写法
  Reflect.apply(Math.floor, undefined, [1.75]) // 1

//   console.log(Object.is(1, 2))
//   console.log(Reflect.has(1, 1))
}
{
  // proxy 实现一个观察者模式
  const obList = new Set()
  const observe = fn => obList.add(fn)
  const observebal = obj => new Proxy(obj, { set })
  function set (target, key, value, receiver) {
    const result = Reflect.set(target, key, value, receiver)
    obList.forEach(fn => fn())
    return result
  }
  function point () {
    console.log('111')
  }
  const a = observebal({
    name: 'pck',
    age: 18
  })
  observe(point)
  a.name = 1
}
