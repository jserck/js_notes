{
  // proxy 相当于给对象外层添加一层代理，任何关于次对象的操作都有这层代理来处理
  // 可以替换 Object.defineProperty
  const obj = new Proxy({}, {
    get: function (target, propKey, receiver) {
      console.log('get')

      console.log(target, propKey, receiver)

      return 12
    },
    set: function (target, propKey, value, receiver) {
      console.log('set')

      console.log(target, propKey, value, receiver)

      return 13
    }
  })
//   obj.a = 1
//   const a = obj.a
//   console.log(obj)
}
{
  // 基本用法
  const obj = new Proxy({}, {
    get: function (target, propKey, receiver) {
      return 12
    },
    set: function (target, propKey, value, receiver) {
      if (propKey === 'b') {
        return Reflect.set(target, propKey, value, receiver)
      }
    }
  })
//   obj.b = 1
//   console.log(obj.a) // 12
//   console.log(obj)
}
{
  // 其他用法
//   let obj = {
//       proxy:new Proxy(target,handler)
//   }
  const obj = new Proxy({}, {
    get: function (params) {
      return 35
    }
  })
  const obj1 = Object.create(obj)
//   console.log(obj1.a) // 35 把 proxy 当做 obj1的原型对象，当访问 a 属性，如果没有找到就会沿着原型链查找
}
{
  // proxy 不止可以拦截 get set 方法，还可以拦截 apply has ownKeys等 13 种拦截方法
  const obj = new Proxy({}, {
    // 拦截 propKey in proxy 方法
    has: function (target, propKey) {
      if (propKey === 'a') {
        return true
      }
    }
  })
//   console.log('a' in obj) // true 其他代理方法如同
}
{
  // 详解 get 用于拦截某个属性的读取操作
  const obj = {
    name: 'pck'
  }
  const handler = {
    get: function _get (target, propKey, receiver) {
      if (propKey in target) {
        return target[propKey]
      } else {
        throw new Error(`${propKey} not in ${target}`)
      }
    }
  }
  const proxy = new Proxy(obj, handler)
  const obj1 = Object.create(proxy) // 通过原型对象继承 proxy 代理器
  //   console.log(proxy.name)// pck
  //   console.log(obj1.age) // 报错

  // 实现读取数组负索引位置
  function createArray (...e) {
    const arr = e
    const handler = {
      get (target, propKey, receiver) {
        const index = Number(propKey)
        if (propKey < 0) {
        //   return target[target.length + index]
          propKey = String(target.length + index)
        }
        return Reflect.get(target, propKey, receiver)
      }
    }
    const proxy = new Proxy(arr, handler)
    return proxy
  }
  //   const arr = createArray('a', 'b', 'c', 'd')
  //   console.log(arr[-1]) // d
  // receiver 参数返回 proxy 对象
  const proxy1 = new Proxy({}, {
    get (target, propKey, receiver) {
      return receiver
    }
  })
  const obj12 = Object.create(proxy1)
  obj12.b = 1
  //   console.log(proxy1.app)
  //   console.log(obj12.a)

  // 实现函数链式
  function pipe ({ ...obj }) {
    const arr = new Set([])
    const handler = {
      get (target, propKey, receiver) {
        if (propKey === 'get') {
          return function () {
            return Array.from(arr).reduce((val, fn) => {
              return fn(val)
            }, obj.val)
          }
        }
        arr.add(obj[propKey])
        return proxy
      }
    }
    const proxy = new Proxy({}, handler)
    return proxy
  }
  var double = n => n * 2
  var pow = b => b * b
  var reverseInt = c => c.toString().split('').reverse().join('') | 0
  const sum = pipe({ double, pow, reverseInt, val: 3 }).double.pow.reverseInt.get()
  console.log(sum)
}
{
  // set
  // 具体应用，实现一个 保证某属性不大于 200
  function attrNo200 (obj = {}) {
    const handler = {
      get (target, propKey, receiver) {
        return Reflect.get(target, propKey, receiver)
      },
      set (target, propKey, value, receiver) {
        if (!Number.isInteger(value)) {
          throw new Error('not isInteger')
        }
        if (value > 200) {
          throw new Error('not > 200')
        }
        target[propKey] = value
      }
    }
    return new Proxy(obj, handler)
  }
  // const obj = attrNo200({ age: 0 })
  // obj.age = Number.parseFloat(-3.3)
  // console.log(obj.age)

  // 实现内部属性隐藏
  function outAttrNoSee () {
    function fnError (fnName) {
      if ([...fnName][0] === '_') {
        throw Error('此属性不可访问')
      }
    }
    const handler = {
      get (target, propKey, receiver) {
        fnError(propKey)
        return Reflect.get(target, propKey, receiver)
      },
      set (target, propKey, value, receiver) {
        fnError(propKey)
        return Reflect.set(target, propKey, value, receiver)
      }
    }
    const proxy = new Proxy({}, handler)
    return proxy
  }
  const obj = outAttrNoSee()
  // console.log(obj._pop)
  // const op = obj._opp
  // obj._opp = 1
  // 无论是 get 还是 set 都会受到对象自身描述属性的限制，如果对象的某个属性是不可编辑或者不可写，get 和 set 都不会生效
}
