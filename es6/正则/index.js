/*
 * @Author: mikey.zhaopeng
 * @Date: 2020-03-18 14:42:35
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-03-19 15:54:51
 */
// 正则表达式的声明方式
// 常用匹配字符
// \cx 匹配由x指明的控制字符。例如， \cM 匹配一个 Control-M 或回车符。x 的值必须为 A-Z 或 a-z 之一。否则，将 c 视为一个原义的 'c' 字符。
// \f  匹配一个换页符。等价于 \x0c 和 \cL。
// \n  匹配一个换行符。等价于 \x0a 和 \cJ。
// \r  匹配一个回车符。等价于 \x0d 和 \cM。
// \s  匹配任何空白字符，包括空格、制表符、换页符等等。等价于 [ \f\n\r\t\v]。注意 Unicode 正则表达式会匹配全角空格符。
// \S  匹配任何非空白字符。等价于 [^ \f\n\r\t\v]。
// \t  匹配一个制表符。等价于 \x09 和 \cI。
// \v  匹配一个垂直制表符。等价于 \x0b 和 \cK。

// $    匹配输入字符串的结尾位置。如果设置了 RegExp 对象的 Multiline 属性，则 $ 也匹配 '\n' 或 '\r'。要匹配 $ 字符本身，请使用 \$。
// ( )  标记一个子表达式的开始和结束位置。子表达式可以获取供以后使用。要匹配这些字符，请使用 \( 和 \)。
// *    匹配前面的子表达式零次或多次。要匹配 * 字符，请使用 \*。
// +    匹配前面的子表达式一次或多次。要匹配 + 字符，请使用 \+。
// .    匹配除换行符 \n 之外的任何单字符。要匹配 . ，请使用 \. 。
// [    标记一个中括号表达式的开始。要匹配 [，请使用 \[。
// ?    匹配前面的子表达式零次或一次，或指明一个非贪婪限定符。要匹配 ? 字符，请使用 \?。
// \    将下一个字符标记为或特殊字符、或原义字符、或向后引用、或八进制转义符。例如， 'n' 匹配字符 'n'。'\n' 匹配换行符。序列 '\\' 匹配 "\"，而 '\(' 则匹配 "("。
// ^    匹配输入字符串的开始位置，除非在方括号表达式中使用，当该符号在方括号表达式中使用时，表示不接受该方括号表达式中的字符集合。要匹配 ^ 字符本身，请使用 \^。
// {    标记限定符表达式的开始。要匹配 {，请使用 \{。
// |    指明两项之间的一个选择。要匹配 |，请使用 \|。

// *    匹配前面的子表达式零次或多次。例如，zo* 能匹配 "z" 以及 "zoo"。* 等价于{0,}。
// +    匹配前面的子表达式一次或多次。例如，'zo+' 能匹配 "zo" 以及 "zoo"，但不能匹配 "z"。+ 等价于 {1,}。
// ?    匹配前面的子表达式零次或一次。例如，"do(es)?" 可以匹配 "do" 、 "does" 中的 "does" 、 "doxy" 中的 "do" 。? 等价于 {0,1}。
// {n}  n 是一个非负整数。匹配确定的 n 次。例如，'o{2}' 不能匹配 "Bob" 中的 'o'，但是能匹配 "food" 中的两个 o。
// {n,} n 是一个非负整数。至少匹配n 次。例如，'o{2,}' 不能匹配 "Bob" 中的 'o'，但能匹配 "foooood" 中的所有 o。'o{1,}' 等价于 'o+'。'o{0,}' 则等价于 'o*'。
// {n,m}    m 和 n 均为非负整数，其中n <= m。最少匹配 n 次且最多匹配 m 次。例如，"o{1,3}" 将匹配 "fooooood" 中的前三个 o。'o{0,1}' 等价于 'o?'。请注意在逗号和两个数之间不能有空格。

// \
// 将下一个字符标记为一个特殊字符、或一个原义字符、或一个 向后引用、或一个八进制转义符。例如，'n' 匹配字符 "n"。'\n' 匹配一个换行符。序列 '\\' 匹配 "\" 而 "\(" 则匹配 "("。

// ^
// 匹配输入字符串的开始位置。如果设置了 RegExp 对象的 Multiline 属性，^ 也匹配 '\n' 或 '\r' 之后的位置。

// $
// 匹配输入字符串的结束位置。如果设置了RegExp 对象的 Multiline 属性，$ 也匹配 '\n' 或 '\r' 之前的位置。

// *
// 匹配前面的子表达式零次或多次。例如，zo* 能匹配 "z" 以及 "zoo"。* 等价于{0,}。

// +
// 匹配前面的子表达式一次或多次。例如，'zo+' 能匹配 "zo" 以及 "zoo"，但不能匹配 "z"。+ 等价于 {1,}。

// ?
// 匹配前面的子表达式零次或一次。例如，"do(es)?" 可以匹配 "do" 或 "does" 。? 等价于 {0,1}。

// {n}
// n 是一个非负整数。匹配确定的 n 次。例如，'o{2}' 不能匹配 "Bob" 中的 'o'，但是能匹配 "food" 中的两个 o。

// {n,}
// n 是一个非负整数。至少匹配n 次。例如，'o{2,}' 不能匹配 "Bob" 中的 'o'，但能匹配 "foooood" 中的所有 o。'o{1,}' 等价于 'o+'。'o{0,}' 则等价于 'o*'。

// {n,m}
// m 和 n 均为非负整数，其中n <= m。最少匹配 n 次且最多匹配 m 次。例如，"o{1,3}" 将匹配 "fooooood" 中的前三个 o。'o{0,1}' 等价于 'o?'。请注意在逗号和两个数之间不能有空格。

// ?
// 当该字符紧跟在任何一个其他限制符 (*, +, ?, {n}, {n,}, {n,m}) 后面时，匹配模式是非贪婪的。非贪婪模式尽可能少的匹配所搜索的字符串，而默认的贪婪模式则尽可能多的匹配所搜索的字符串。例如，对于字符串 "oooo"，'o+?' 将匹配单个 "o"，而 'o+' 将匹配所有 'o'。

// .
// 匹配除换行符（\n、\r）之外的任何单个字符。要匹配包括 '\n' 在内的任何字符，请使用像"(.|\n)"的模式。

// (pattern)
// 匹配 pattern 并获取这一匹配。所获取的匹配可以从产生的 Matches 集合得到，在VBScript 中使用 SubMatches 集合，在JScript 中则使用 $0…$9 属性。要匹配圆括号字符，请使用 '\(' 或 '\)'。

// (?:pattern)
// 匹配 pattern 但不获取匹配结果，也就是说这是一个非获取匹配，不进行存储供以后使用。这在使用 "或" 字符 (|) 来组合一个模式的各个部分是很有用。例如， 'industr(?:y|ies) 就是一个比 'industry|industries' 更简略的表达式。

// (?=pattern)
// 正向肯定预查（look ahead positive assert），在任何匹配pattern的字符串开始处匹配查找字符串。这是一个非获取匹配，也就是说，该匹配不需要获取供以后使用。例如，"Windows(?=95|98|NT|2000)"能匹配"Windows2000"中的"Windows"，但不能匹配"Windows3.1"中的"Windows"。预查不消耗字符，也就是说，在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，而不是从包含预查的字符之后开始。

// (?!pattern)
// 正向否定预查(negative assert)，在任何不匹配pattern的字符串开始处匹配查找字符串。这是一个非获取匹配，也就是说，该匹配不需要获取供以后使用。例如"Windows(?!95|98|NT|2000)"能匹配"Windows3.1"中的"Windows"，但不能匹配"Windows2000"中的"Windows"。预查不消耗字符，也就是说，在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，而不是从包含预查的字符之后开始。

// (?<=pattern)反向(look behind)肯定预查，与正向肯定预查类似，只是方向相反。例如，"(?<=95|98|NT|2000)Windows"能匹配"2000Windows"中的"Windows"，但不能匹配"3.1Windows"中的"Windows"。
// (?<!pattern)反向否定预查，与正向否定预查类似，只是方向相反。例如"(?<!95|98|NT|2000)Windows"能匹配"3.1Windows"中的"Windows"，但不能匹配"2000Windows"中的"Windows"。
// x|y
// 匹配 x 或 y。例如，'z|food' 能匹配 "z" 或 "food"。'(z|f)ood' 则匹配 "zood" 或 "food"。

// [xyz]
// 字符集合。匹配所包含的任意一个字符。例如， '[abc]' 可以匹配 "plain" 中的 'a'。

// [^xyz]
// 负值字符集合。匹配未包含的任意字符。例如， '[^abc]' 可以匹配 "plain" 中的'p'、'l'、'i'、'n'。

// [a-z]
// 字符范围。匹配指定范围内的任意字符。例如，'[a-z]' 可以匹配 'a' 到 'z' 范围内的任意小写字母字符。

// [^a-z]
// 负值字符范围。匹配任何不在指定范围内的任意字符。例如，'[^a-z]' 可以匹配任何不在 'a' 到 'z' 范围内的任意字符。

// \b
// 匹配一个单词边界，也就是指单词和空格间的位置。例如， 'er\b' 可以匹配"never" 中的 'er'，但不能匹配 "verb" 中的 'er'。

// \B
// 匹配非单词边界。'er\B' 能匹配 "verb" 中的 'er'，但不能匹配 "never" 中的 'er'。

// \cx
// 匹配由 x 指明的控制字符。例如， \cM 匹配一个 Control-M 或回车符。x 的值必须为 A-Z 或 a-z 之一。否则，将 c 视为一个原义的 'c' 字符。

// \d
// 匹配一个数字字符。等价于 [0-9]。

// \D
// 匹配一个非数字字符。等价于 [^0-9]。

// \f
// 匹配一个换页符。等价于 \x0c 和 \cL。

// \n
// 匹配一个换行符。等价于 \x0a 和 \cJ。

// \r
// 匹配一个回车符。等价于 \x0d 和 \cM。

// \s
// 匹配任何空白字符，包括空格、制表符、换页符等等。等价于 [ \f\n\r\t\v]。

// \S
// 匹配任何非空白字符。等价于 [^ \f\n\r\t\v]。

// \t
// 匹配一个制表符。等价于 \x09 和 \cI。

// \v
// 匹配一个垂直制表符。等价于 \x0b 和 \cK。

// \w
// 匹配字母、数字、下划线。等价于'[A-Za-z0-9_]'。

// \W
// 匹配非字母、数字、下划线。等价于 '[^A-Za-z0-9_]'。

// \xn
// 匹配 n，其中 n 为十六进制转义值。十六进制转义值必须为确定的两个数字长。例如，'\x41' 匹配 "A"。'\x041' 则等价于 '\x04' & "1"。正则表达式中可以使用 ASCII 编码。

// \num
// 匹配 num，其中 num 是一个正整数。对所获取的匹配的引用。例如，'(.)\1' 匹配两个连续的相同字符。

// \n
// 标识一个八进制转义值或一个向后引用。如果 \n 之前至少 n 个获取的子表达式，则 n 为向后引用。否则，如果 n 为八进制数字 (0-7)，则 n 为一个八进制转义值。

// \nm
// 标识一个八进制转义值或一个向后引用。如果 \nm 之前至少有 nm 个获得子表达式，则 nm 为向后引用。如果 \nm 之前至少有 n 个获取，则 n 为一个后跟文字 m 的向后引用。如果前面的条件都不满足，若 n 和 m 均为八进制数字 (0-7)，则 \nm 将匹配八进制转义值 nm。

// \nml
// 如果 n 为八进制数字 (0-3)，且 m 和 l 均为八进制数字 (0-7)，则匹配八进制转义值 nml。

// \un
// 匹配 n，其中 n 是一个用四个十六进制数字表示的 Unicode 字符。例如， \u00A9 匹配版权符号 (?)。

// const regex = /1[0-9]{2}(\d*)/g
// const reH1 = /<.*>/g
// const str = '<h1>dfdf</h1><h1>dfdf</h1>'
// console.log(reH1.exec(str))
// console.log(str.match(reH1))

// U修饰符
// 含义为“Unicode 模式”，用来正确处理大于\uFFFF的 Unicode 字符。也就是说，会正确处理四个字节的 UTF-16 编码。
// const re = /\uD83D/
// const reu = /\uD83D/u
// const str = '\uD83D\uDC2A'
// console.log(re.test(str)) true
// console.log(reu.test(str)) false
// 以上示例证明 U 修饰符会将本来是四个字节（两个字符） 识别为一个字符 所以不能匹配，
// 不加 U 修饰符则会将其识别为两个字符，便可以匹配到第一个字符

// var s = '𠮷'
// console.log(/^.$/.test(s)) false
// console.log(/^.$/u.test(s)) true

// 以上示例是点字符在 u 标识符的应用，.字符无法识别码点大于0xFFFF的 Unicode 字符，会识别为两个字符，所以无法匹配

// console.log(/\u{20BB7}/u.test('𠮷')) // true
// es6 新增大括号表示 Un 字符，但是正则必须加 u 修饰符，否则会当成{}标识符来匹配

// console.log(/𠮷{2}/u.test('𠮷𠮷')) true
// 使用u 修饰符之后所有的量词都会识别两个字符的字符
// function returnStrLength (text) {
//   let reList = text.match(/[\s\S]/gu)
//   if (!Array.isArray(reList)) {
//     reList = []
//   }
//   return reList ? reList.length : 0
// }
// console.log(returnStrLength('𠮷𠮷𠮷𠮷')) 4
// console.log('𠮷𠮷𠮷𠮷'.length) 8
// 利用 u 修饰符可以识别四个字节字符的特性，可以正确识别特殊码点字符的长度

// RegExp.prototype.unicode 属性 : 正则表达式是否设置了u修饰符
// const r1 = /hello/;
// const r2 = /hello/u;

// r1.unicode // false
// r2.unicode // true

// Y修饰符 “粘连”
// var s = 'bbbabbb'
// var r1 = /a+_/g
// var r2 = /a+_/y
// var r11 = /a+/g
// var r22 = /a+/y
// var r3 = /a?/g
// var r3y = /a?/y
// console.log(r1.exec(s))
// console.log(r2.exec(s))
// console.log(r1.exec(s))
// console.log(r2.exec(s))
// console.log(r22.exec(s))
// console.log(r11.exec(s))
// r22.lastIndex = 4
// const mouch = r22.exec(s)
// console.log(mouch)
// console.log(mouch.index)
// r3.lastIndex = 3
// const mouchR3 = r3.exec(s)
// console.log(mouchR3)
// r3y.lastIndex = 4
// const mouchR4 = r3y.exec(s)
// console.log(mouchR4)
// console.log(r11.exec(s))
// const TOKEN_Y = /\s*(\+|[0-9]+)\s*/y
// const TOKEN_G = /([0-9]+)/gy

// tokenize(TOKEN_Y, '3 + 4')
// [ '3', '+', '4' ]
// tokenize(TOKEN_G, '3 + 4')
// [ '3', '+', '4' ]

// function tokenize (TOKEN_REGEX, str) {
//   const result = []
//   let match
//   while (match = TOKEN_REGEX.exec(str)) {
//     console.log(match)
//     result.push(match[1])
//   }
//   return result
// }
// console.log(TOKEN_G.exec('3+4'))
// console.log(TOKEN_G.exec('3+4'))
// console.log(TOKEN_G.exec('3+4'))
// y 修饰符 跟全局匹配修饰符类似，不同的地方是 G 修饰符是只要有匹配的地方就会匹配， 而 Y修饰符必须从上次结束的位置开始匹配
// const str = 'aaa_aaa_aa_aa'
// const reg = /a+/y
// console.log(reg.exec(str)) aaa_
// console.log(reg.lastIndex) 4
// console.log(reg.exec(str))aaa_
// console.log(reg.lastIndex) 8
// console.log(reg.exec(str))aa_
// console.log(reg.lastIndex) 11
// console.log(reg.exec(str))null
// console.log(reg.lastIndex) 0

// console.log(reg.exec(str))
// console.log(reg.lastIndex)
// console.log(reg.exec(str))
// console.log(reg.lastIndex)
// console.log(reg.exec(str))
// console.log(reg.lastIndex)
// console.log(reg.exec(str))
// console.log(reg.lastIndex)

// 就是这样，exec 方法每次会把上次匹配到得位置记录在 lastindex 属性上面
// 每一次匹配都是从上一次的 lastindex 位置开始

// s 修饰符：dotAll 模式
// 正则中 . 表示匹配除 换行度以外的任意字符 ，但是遇到下面情况：
// const str = 'foo\nboo'
// const reg = /foo.boo/
// const regs = /foo.boo/s
// console.log(reg.test(str)) // false
// // 因为.无法匹配换行符，所以 es6 引入了新的s 修饰符，代表. 匹配一切字符
// console.log(regs.test(str)) // true

//* **************后行断言，后行否定断言 先行断言 ， 先行否定断言 */
// (?=%) (?!%) (?<=%) (?>=%)
// const str = '100% 100% %50 %50 55'
// const reg = /\d+(?=%)/g // 匹配百分号之前的数字
// const reg2 = /\d+(?!%)/g// 匹配不在百分号之前的数字
// const reg3 = /(?<=%)\d+/g// 匹配百分号之后的数字
// const reg4 = /(?!=%)\d+/g// 匹配不在百分号之后的数字
// console.log(reg.exec(str)) // 100
// console.log(reg2.exec(str)) // 10
// console.log(reg3.exec(str)) // 50
// console.log(reg4.exec(str)) // 100

//* *************Unicode 属性类 */
// 匹配所有空格
// \p{White_Space}

// // 匹配各种文字的所有字母，等同于 Unicode 版的 \w
// [\p{Alphabetic}\p{Mark}\p{Decimal_Number}\p{Connector_Punctuation}\p{Join_Control}]

// // 匹配各种文字的所有非字母的字符，等同于 Unicode 版的 \W
// [^\p{Alphabetic}\p{Mark}\p{Decimal_Number}\p{Connector_Punctuation}\p{Join_Control}]

// // 匹配 Emoji
// /\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F/gu

// // 匹配所有的箭头字符
// const regexArrows = /^\p{Block=Arrows}+$/u;
// regexArrows.test('←↑→↓↔↕↖↗↘↙⇏⇐⇑⇒⇓⇔⇕⇖⇗⇘⇙⇧⇩') // true
//* *****具名组匹配 */
// const RE_DATE = /(\d{4})-(\d{2})-(\d{2})/

// const matchObj = RE_DATE.exec('1999-12-31')
// const year = matchObj[1] // 1999
// const month = matchObj[2] // 12
// const day = matchObj[3] // 31
// 上面是传统的提取日期的方式
// 具名组匹配（Named Capture Groups），允许为每一个组匹配指定一个名字，既便于阅读代码，又便于引用。
// const NEW_RE_DATE = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/
// const dateObj = NEW_RE_DATE.exec('1994-02-07')
// console.log(dateObj.groups.year) // 1994
// 解构赋值和替换
// const { groups: { year, month, day } } = NEW_RE_DATE.exec('1994-02-07')
// console.log(year, month, day) // 1994 02 07
// 具名组的引用
// const NEW_RE_DATE2 = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})!\k<year>/

// const NEW_RE_DATE3 = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})!\1/ // \1 标识第一个括号的内容
// const NEW_RE_DATE3 = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})!\1!\k<month>/
// console.log(NEW_RE_DATE2.exec('1994-02-07!1994'))// Array(4) ["1994-02-07!1994", "1994", "02", "07"]
// console.log(NEW_RE_DATE3.exec('1994-02-07!1994')) // 同上
// console.log(NEW_RE_DATE3.exec('1994-02-07!1994!02')) // 同上
// 有了具名组就可以不用担心数据顺序的变化导致取值错误，由组名组衍生的 \1  \k  使具名组更加的灵活

//* ****matchAll方法可以一次性返回所有匹配 */
// const string = 'test1test2test3'

// // g 修饰符加不加都可以
// const regex = /t(e)(st(\d?))/g

// for (const match of string.matchAll(regex)) {
//   console.log(match)
// }
// ["test1", "e", "st1", "1", index: 0, input: "test1test2test3"]
// ["test2", "e", "st2", "2", index: 5, input: "test1test2test3"]
// ["test3", "e", "st3", "3", index: 10, input: "test1test2test3"]

// 不用matchAll时
// var regex = /t(e)(st(\d?))/g;
// var string = 'test1test2test3';

// var matches = [];
// var match;
// while (match = regex.exec(string)) {
//   matches.push(match);
// }

// matches
// [
//   ["test1", "e", "st1", "1", index: 0, input: "test1test2test3"],
//   ["test2", "e", "st2", "2", index: 5, input: "test1test2test3"],
//   ["test3", "e", "st3", "3", index: 10, input: "test1test2test3"]
// ]
