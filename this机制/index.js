//什么是this?
//JS里面添加THIS机制的初衷就是让函数可以访问她的上下文当中的标识符，看代码：
// function foo(obj) {
//         console.log(this.a);
//         this.fn();
// }
// var o1 = {
//         a: 1,
//         fn: function () {
//                 console.log('1');
//         }
// }
// var o2 = {
//         a: 2,
//         fn: function () {
//                 console.log('2');
//         }
// }
// foo.call(o1);
// foo.call(o2);
//由上面代码可以看出，函数内部的this可以隐式的指向参数里边的OBJ，这样不仅让代码更加简洁，而且易于复用，
//相反 如果不用this也是可以实现的，但是就得每次执行都要传不同的上下文进去。这就是this 存在的意义，
//那么this到底是什么，有人this指向了函数自身，其实这么说也没错，看下面的例子：
// function foo(i) {
//         console.log(i);
//         this.conut++;
// }
// foo.count = 0;
// for (let i = 0; i < 9; i++) {
//         if (i > 5) {
//                 foo(i)
//         }
// }
// setTimeout(function timer() {
//         console.log(foo.count);//0
//         console.log(count);//3
// });
//循环是正常输出678，那么为什么count没有自增呢，原来在内置方法当中，函数里面的this丢失了原本的绑定，
//所以当前的this指向window,并且在window里面创建了count,根据词法作用域的查找机制。
//由此看来this并不是单纯的指向函数本身，在很多情况下，this会丢失本来的绑定。那么是什么原因导致的呢？
//先看解决方案：
// function foo(i) {
//         console.log(i);
//         this.count++;//foo.count++;
// }
// foo.count = 0;
// for (let i = 0; i < array.length; i++) {
//         foo.call(foo, i);
// }
// setTimeout(function timer() {
//         console.log(foo.count);
// });
//可以看到上面的两个解决方案都很巧妙的逃避了this出现问题，因为this的指向并不是在定义时来确定的，而是在函数调用时才确定的，
//所以正确的使用 this 是很有必要的。
//接下来我们说一下this的四种绑定机制，
//默认绑定
//当函数通过自身调用执行，不依赖上下文的时候，会采用默认绑定到全局，
// function foo() {
//         console.log(this.a);
// }
// var a = 2;
// foo();//2
//但是，在严格模式下是不支持默认绑定的，this会被绑定到undefined;
//隐式绑定
// function foo() {
//         console.log(this.a);
// }
// var obj = {
//         a:2,
//         foo:foo
// }
// obj.foo();//2
//由于函数被绑定到OBJ上下文中，所以函数里面的this指向obj，这就是隐式绑定，
//显示绑定
// function foo() {
//         console.log(this.a);
// }
// var obj = {
//         a:2,
//         foo:foo
// }
// var a = 3;
// foo.call(obj);//2
//利用call/apply来显示的指定this的上下文，这就是显示绑定，
//但是无论是以上哪一种绑定，都没有解决this绑定丢失的问题，
// function foo() {
//         console.log(this.a);
// }
// var obj = {
//         a:2,
//         foo:foo
// }
// var a =3;
// var bar = obj.foo;
// bar();//3
// setTimeout(obj.foo,0);//3
// var baz = function (fn) {
//         fn();
// }
// baz(obj.foo);//3
//前面说过，无论函数怎么样调用，上述的函数被复制的只是堆内存中储存的一个函数的指引，
//当执行的时候，其实调用的是默认绑定到全局。也就是this丢失。
//硬绑定
// function foo() {
//         console.log(this.a);
// }
// var a = 3;
// var obj = {
//         a :2,
//         foo:foo
// }
// function bar() {
//         return function () {
//                 return foo.call(obj);
//         }
// }
// bar()();//2
// bar.call(window)();//2
//呐，上述就是典型的硬绑定方法，很多第三方库都是这样来强制绑定this到指定的dom元素上面，
//对象的内置方法bind就是硬绑定来实现，当然，在bind的实现比这个要更负责很多。
//bind函数，通常可以用来做科里化，为函数指定默认的参数，
// function foo(a, b) {
//         console.log(a + b);

// }
// var a = Object.create(null);
// var bar = foo.bind(a, 2);
// bar(3);
//上述的A是一个空对象，有人会问为什么不用{}，那是因为A的实现方式并不会给新建的对象提供prototype，
//所以这种对象比{}，更空；为什么要指定一个空对象呢，因为如果函数当中用到了this,那么用bind来做科里化的时候，
//可能会对this造成影响，比如，this默认绑定到全局，因为bind并没有指定具体的this上下文！
//硬绑定其实也有缺点，由于它是强制指向，所以对代码的维护性跟可读性并不强，最终导致代码难以复用，
//软绑定，可以解决这个问题，软绑定的实现是为默认绑定指定一个具体的上下文，使默认绑定并不是绑定在全局或者
//undefined上面。这样既实现了硬绑定的效果，也可以修改this的指向，一举两得！
// this词法
//还有最后一种绑定就是NEW绑定，说道NEW，大家可能会想到构造函数，或者是类，传统的类语言，都是以NEW来实例化一个类，
//但是在JS里面并没有类，只是实现了一种类似类的结构，但是真正意义上与类的差距环视很大的，我们获得
//new一个构造函数，就相当于实例化了一个类，这个说法并不是完全正确的，构造函数，其实也是一个函数，并不是一个特殊的
//数据结构，你可以把他当成一个普通的函数，与其说是new了一个构造函数，不如说是用new构造调用了一个普通的函数。
//当new一个构造函数之后，会生成一个新的对象，并且新对象的this指向构造函数，然后建立prototype连接！

// ES6引入的胖剪头函数，
//胖剪头函数也就是箭头函数，他的除了代码简洁意外还有一个重要额功能就是可以无视this的四种绑定机制，
//他的原理是使用当前的词法作用域来替换this原本绑定的默认值，可是说是 this继承了上一层作用域的this；
//原理相当于var self =this;
//虽然这样子但是，他有不足之处，就是逃避了this的绑定规范，我们写代码的时候最好是使用bind来正确的使用this;
