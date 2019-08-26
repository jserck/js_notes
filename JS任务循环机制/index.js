//demo
/**
 * 首先创建执行上下文
 * 第一次循环从整个js的宏任务开始
 * 执行到Log 1 打印1
 * 遇到promise里面的任务直接执行,log 2
 * 执行到settimeout是宏任务，放到宏任务队列，
 * log3
 * 清空微任务队列,第一次循环结束。
 * 第二次循环开始，清空宏任务队列，log3，把ewslove放到微任务队列，‘
 * 第二次循环第一个宏任务执行完毕，
 * 开始清空第二次循环第一个微任务，reslove，log res;
 *
 */
console.log('1');
new Promise((resolve, reject) => {
    console.log('2');
    let timer = setTimeout(() => {
        console.log('3');
        resolve('timer');
        clearTimeout(timer);
    }, 0);
}).then((res) => {
    console.log(res);
}).catch(() => {});
console.log('4');
console.log('第一次循环主执行栈开始')
setTimeout(function() {
    console.log('第二次循环开始，宏任务队列的第一个宏任务执行中')
    new Promise(function(resolve) {
        console.log('宏任务队列的第一个宏任务的微任务继续执行')
        resolve()
    }).then(function() {
        console.log('第二次循环的微任务队列的微任务执行')
    })
}, 0)

new Promise(function(resolve) {
    console.log('第一次循环主执行栈进行中...')
    resolve()
}).then(function() {
    console.log('第一次循环微任务，第一次循环结束')
    setTimeout(function() {
        console.log('第二次循环的宏任务队列的第二个宏任务执行')
    })
})
console.log('第一次循环主执行栈完成');