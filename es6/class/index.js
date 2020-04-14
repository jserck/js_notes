{
  class Bar {
    constructor (a, b) {
      this.a = a
      this.b = b
    }

    toString () {
      return `${this.a}${this.b}`
    }
  }
  const bar = new Bar('我爱', 'js')
//   console.log(bar.toString())
//   console.log(bar.constructor === Bar.prototype.constructor)
//   console.log(Bar.prototype.constructor)
//   console.log(Object.keys(Bar.prototype))
//   console.log(Object.getOwnPropertyNames(Bar.prototype))
}
{
  const MyClass = class Me {
    constructor (a) {
      this.a = a
    }

    getA () {
      return me.a
    }
  }
//   const me = new MyClass('华为')
//   console.log(me.getA())
}
{
  const MyClass = new class Me {
    constructor (name = '没有') {
      this.name = name
      this.printName = this.printName.bind(this)
      this.getThis = () => this
    }

    printName (name = 'there') {
      this.print(`Hello ${name}`)
    }

    print (text) {
      console.log(text)
    }

    static getName () {
      return 'heihei'
    }
  }()
//   MyClass.printName()
//   console.log(MyClass.name)
//   const printName = MyClass.printName
//   printName()
}
{
  // class的继承
  class MyClass {
    constructor () {
      if (new.target.name === 'MyClass') {
        throw new Error('该类不能实例化')
      }
      this.name = 'pck'
    //   this.getName = this.getName.bind(this)
    }

    age = 18
    // static属性
    static xingbie = '女'
    // static方法
    static getName () {
      return this.xingbie
    }

    static c = 'static c'
  }
  MyClass.prototype.b = 'asdfsadf'
  class NewMyClass extends MyClass {
    constructor () {
      super()
      this.a = 1
      this.b = super.b
      super.c = 3 // 指向子类实例
      this.getC = this.getC.bind(this)
    }

    getC () {
      return super.b // 指向父类的原型对象
    }

    static getC () {
      return super.c // 指向父类
    }
  }
  const me = new NewMyClass()
  console.log(me)
  console.log(MyClass.getName())
  console.log(NewMyClass.getName())
  console.log(me.getC())
  console.log(NewMyClass.getC())
}
