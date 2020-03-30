// {
//   // 链式运算符
//   // null 判断
//   const obj = {
//     a: 1
//   }
// //   const str = obj?.a?.b || 'defined'
// //   const data = (obj.a && obj.b) ?? 'defined'
// //   console.log(str, data)
// }
{
  // symbol 新的数据类型 为了保证新增方法不重名避免全局冲突以及命名冲突
  // 代表独一无二的
  const jquerys = Symbol('jquery')
  //   console.log(jquerys)
  //   console.log(typeof jquerys)
  //   console.log(jquerys.toString(16))
  //   console.log('123'.toString(2))
  //   console.log(Number('123', 2))
  //   console.log(Number.parseInt('11', 2))
  // 如果 symbol 的参数是对象的话，会调用 tostring 方法
  const obj = {
    toString () {
      return '123'
    }
  }
  const obj1 = {
    a: 1
  }
//   console.log(Symbol(obj))
//   console.log(Symbol(obj1))
}
{
  // Symbol.prototype.description
  const name = Symbol('name')
//   console.log(name.description) // name
}
{
  // 作为属性名的 Symbol
  const DEBUG = Symbol('debug')
  const INFO = Symbol('info')
  const obj = {
    [DEBUG]: 1,
    [INFO] () {
      return 23
    }
  }
//   console.log(obj[DEBUG])
}
{
  let colorClassName = ''
  // 实例：消除魔术字符串
  function colorClass (color) {
    switch (color) {
      case 'red':
        colorClassName = 'g-red'
        break
      default:
        colorClassName = 'g-link'
        break
    }
  }
  //   colorClass('red')
  console.log(colorClassName)
  function switchBug (obj) {
    switch (obj.a) {
      case 'value':
        obj.b = '2'
        break
      default:
        break
    }
  }
  const obj1 = {
    a: 'value'
  }
  switchBug(obj1)
//   console.log(obj1)
}
{
  // 属性名的遍历
//   console.log(Reflect)
  const b = Symbol('b')
  const obj = {
    a: 1,
    [b]: 2,
    c: 3
  }
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const element = obj[key]
    //   console.log(element) //  1 3
    }
  }
//   console.log(Object.getOwnPropertySymbols(obj))
//   console.log(Reflect.ownKeys(obj))// ["a", "c", Symbol(b)]
}
{
  // Symbol.for()，Symbol.keyFor()
  const foo = Symbol.for('foo')
//   const fox = Symbol.for('foo')
//   //   console.log(foo === fox) // 全局注册
//   const ifr = document.createElement('iframe')
//   ifr.src = 'https://es6.ruanyifeng.com/#docs/symbol#Symbol-for%EF%BC%8CSymbol-keyFor'
//   ifr.width = '400px'
//   ifr.height = '300px'
//   document.body.appendChild(ifr)
//   ifr.contentWindow[foo] = Symbol.for('foo') ?? Symbol.for('fox')
//   console.log(ifr.contentWindow[foo] === foo) // true 简直太全局了
}
{
  // 实例：模块的 Singleton 模式
  const a = require('./m')
  global._foo = { a: 'name' }
//   console.log(a, global._foo)
}
{
  let str = Symbol.for('str')
  str = 'abcd'
  //   String.prototype.split(str, () => {
  //     return '我擦擦擦'
  //   })
  //   String[Symbol.split](this, () => {
  //     return '我擦擦擦'
  //   })
  console.log(str.split(''))
}
