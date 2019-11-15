//首先我来问个问题，是先有的鸡，还是现有的蛋呢？先卖个关子，
//回顾之前提到的，程序在执行的时候，先要经过代码的编译处理，编译器会把所有的声明先进行处理，并且与当前的词法作用域进行关联
//然后再执行，考虑以下代码：

a = 2;
var a;
console.log(a);//2
//奇怪，代码为啥会正确输出呢，其实，编译器在编译的时候先对var a进行了处理，然后才会执行，
//所有编译处理后的代码应该是这样子的：
var a;
a = 2;
console.log(a);

//那么下面的代码为啥呢，2可以正常输出，但是不是变量提升么，为什么上面的输出不是预想的结果呢，
//道理是一样的，编译器虽然会对声明进行提升，但是，代码的执行时不会提升的，编译处理后的结果参照上面。
//需要注意的是let 声明是不会提升的哦！因为let 声明在声明代码之后，上面的部分就被定义为暂时性死区，是无法再访问了哦；
console.log(a);//undefined
var a = 2;
console.log(a); //2

//并不是只有变量的声明才会提升，函数的声明也是会提升的，
//下面的代码可以正常运行应该没有问题吧，
foo();
function foo(params) {
        console.log(1);
}
//虽然函数可以提升，但是，表达式声明的函数可是会有问题哦，
foo();//err
var foo = function (params) {
        console.log(1);
}
//编译后的代码大概为
var foo;
foo();
foo = function (params) {
        // ....
}
//这样子的话当然会报错啊
//还有一点需要注意的是，函数声明相对于变量的提升是优先的
foo();//1
function foo(params) {
        console.log(1);
}
var foo = function (params) {
        console.log(1);
}
var foo = 1;
//编译处理后：
function foo(params) {
        console.log(1);
}
var foo;
foo();
foo = function (params) {
        console.log(2);
}
//重复的变量声明会被忽略
//还有就是重复的函数声明是会覆盖的，
//并且函数会被提升到当前作用域的最顶部，所以if else块是不会影响的！
foo();//2
if(true){
        function foo(params) {
                console.log(1);
        }
}else{
        function foo(params) {
                console.log(2);
        }
}
//综上所述，是现有的蛋（声明），后有的鸡（执行）