// var str = 'dfsfsfs';
// var strObj = new String('dfsfsfsfs');
// var obj = {}
// var num = new Number(3);
// var rex = new RegExp(/f/);
// console.log(str.length);
// var arr = [];
// arr['2'] = 'bar';
// console.log(arr);
// var obj = {
//         a:1
// }
// console.log(obj.hasOwnProperty('a'));

var obj = {
        name: 'pck',
        age: 18,
        color: 'yellow'
}
Object.defineProperty(obj, Symbol.iterator, {
        writable: true,
        enumerable: false,
        configurable: true,
        value: function () {
                var o = this;
                var ids = 0;
                var keys = Object.keys(o);
                return {
                        next: function () {
                                return {
                                        value: o[keys[ids++]],
                                        done: ids > keys.length
                                }
                        }
                }
        }
})
var it = obj[Symbol.iterator]();
console.log(it.next());
for (let item of obj) {
        console.log(item);
}
