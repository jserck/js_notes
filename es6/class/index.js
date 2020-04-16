{
  // 基本用法
  function Point (x, y) {
    this.x = x
    this.y = y
  }
  Point.prototype.tostring = function () {
    console.log(this)
  }
  const p = new Point(1, 2)
  p.tostring()
  // calss 改写
  class Pointsas {
    constructor (x, y) {
      this.x = x
      this.y = y
      // this.tostring = this.tostring.bind(this)
      this.getThis = () => this
    }

    tostring () {
      console.log(this.x)
    }

    // [Symbol.iterator] () {
    //   const this_ = this
    //   return {
    //     next () {
    //       const index = this_.x++
    //       return {
    //         value: index,
    //         // eslint-disable-next-line no-unneeded-ternary
    //         done: index < 5 ? false : true
    //       }
    //     }
    //   }
    // }
    * [Symbol.iterator] () {
      yield 1
      yield 2
      yield 3
    }
  }
  const ps = new Pointsas(1, 2)
  const ps2 = new Pointsas(3, 4)
  // ps.tostring() // this代表类的实例
  // ps2.tostring()
  const tos = ps2.tostring
  // tos() // tostring方法里面的this指向出错
  console.log(ps2.getThis())

  tos.call(ps2.getThis())
  // Pointsas.prototype.tostring() // this代表Point类

  // 不同的是 类的原型上定义的方法都是不可枚举的，但是构造函数可以
  console.log(Object.keys(Point.prototype)) // ['tostring']
  console.log(Object.getOwnPropertyNames(Point.prototype))

  console.log(Object.keys(Pointsas.prototype)) // []
  console.log(Object.getOwnPropertyNames(Pointsas.prototype))
  console.log(ps.__proto__ === Pointsas.prototype)
  console.log(ps.__proto__ === ps2.__proto__)
  const iter = new Pointsas(0, 4)
  for (const iterator of iter) {
    console.log(iterator)
  }
}
{
  // 静态方法
  const Point = new class Me {
    constructor (x) {
      this.x = x
    }

    static x = 2
    static getx () {
      console.log(this.x)
    }
  }(1)
  // Point.__proto__.constructor.getx()
  class ExPonit extends Point.__proto__.constructor {
    constructor (x) {
      super()
      this.x = x
    }

    static x = 22
  }
  const exp = new ExPonit(3)
  console.log(exp.x)
  console.log(ExPonit.getx())
}
