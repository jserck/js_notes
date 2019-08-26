//其实闭包是一个挺难理解的概念，到底什么是闭包呢？
function foo() {
        var a = 1;
        function bar() {
                console.log(a);
        }
        bar();
}
//那么上面的代码是闭包么，可以说是，也可以说不是，为什么呢？
//首先上面的代码我们可以理解为bar函数里面是通过词法作用域的查找机制来执行的，
//并不是因为闭包，但是bar函数创建的时候确实是生成了一个保函foo函数作用域的闭包，
//那么到底什么是闭包，首先闭包的产生是在代码创建的时候，其次，闭包必须可以访问当前的词法作用域，
//参照上面的代码，另外一个就是，必须是在的所在的词法作用域之外执行，什么意思呢，看代码：
function foo(params) {
        var a = 1;
        function bar(params) {
                console.log(a);
        }
        return bar;
}
var fn = bar();
//没错，这就是闭包
//根据绗棉提到的三个先行条件，无论bar函数是通过怎么样的方式来执行，都称得上是闭包；比如：
function foo(params) {
        var a = 1;
        function bar(params) {
                console.log(a);
        }
        fn(bar);
}
function fn(f) {
        f();
}
fn();
//那么再看一个代码
var a = 1;
(function foo(params) {
        console.log(a);
})();
//那么IIFE函数FOO是不是一个闭包呢，是，但是也不能全是，
//回顾上面的条件，其实IIFE函数虽然创建了一个独有的作用域，但是，
//她并不是在当前的词法作用域之外执行的，相反的，因为他是一个表达式，所以，
//她其实是在全局的作用域里边执行的。
//闭包的典型的例子 还是for循环。
for (var i = 0; i < 9; i++) {
        setTimeout(() => {
                console.log(i);
        }, 1000);
}
//上面的代码相信大家都遇到过，没错是，9个9，那为什么呢？
//很多人刚开始都会认为是9个1，因为大家都很自然的认为，每一次的迭代，
//都会‘捕获’一个I的副本，其实并不是这样子的，前面说过，var 声明的变量都在当前的作用域之外，也就是说，I其实就一个，
//每一次迭代都是引用的全局的I，那么怎么来解决呢？
//回顾块作用域
for (var i = 0; i < 9; i++) {
        (function foo(params) {
                setTimeout(() => {
                        console.log(i);
                }, 1000);
        })();
}
//我们都知道，IIFE函数创建会生成一个独立的块作用域，并且，每次迭代都会把IIFE创建的作用域封闭起来，
//但是有什么用呢，上面虽然每个作用域都独立了，但是换是引用的全局的I啊 ，有什么区别，所以应该这样：
for (var i = 0; i < 9; i++) {
        (function foo(params) {
                var j = i;
                setTimeout(() => {
                        console.log(j);
                }, 1000);
        })();
}
//或者
{
        for (let i = 0; i < 9; i++) {
                setTimeout(() => {
                        console.log(i);
                }, 1000);
        }
}
