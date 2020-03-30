{
  // set es6 新加入的数据结构，类似数组，但是与arr 不同的是 set 结构里面不会出现重复的子集
  const s = new Set()
  const arr = Array.from([1, 2, 3, 1, 2, 3, 4])
  //   console.log(arr) // 1,2,3,1,2,3,4
  for (const [index, item] of arr.entries()) {
    s.add(item)
  }
  for (const [index, item] of s.entries()) {
    // console.log(item) // 1,2,3,4
  }
  const str = 'hello'
  function newStr (str = '') {
    // return [...new Set(str)].join('')
    return Array.from(new Set(str)).join('')
  }
//   console.log(newStr(str)) // helo
//   console.log(s)
//   console.log(Array.from(new Set(str)))
//   console.log(new Set([1, 2, 3, 4, 5, 6, 6]))
//   console.log(new Set([{ 0: 'a' }, { 1: '2' }]))
//   console.log(new Set([NaN, NaN])) //NaN
//   console.log(new Set([{}, {}])) //[{},{}]
}
{
  // set 的属性方法
  const s = new Set([])
  //   console.log(s.size)
  s.add(1).add(2).add(2)
  //   console.log(s.size)
  //   console.log(s.has(1))
  //   console.log(s.has(2))
  //   console.log(s.has(3))
  s.delete(1)
  //   console.log(s.has(1))
  s.add(1).add(3).add(4)
  const s1 = new Set([6, 7, 8])
  const s2 = [...s, ...s1]
  s2.filter(x => s.has(x))
  //   console.log(s2)
  //   console.log(s2.filter(x => s.has(x)))
  //   console.log(s2.filter(x => !s.has(x)))
  const s3 = s2.map(x => x * 2)
//   console.log(s3)
}
{
  // WeakSet
  const a = [[1, 2], [{ a: 1 }]]
  const ws = new WeakSet(a)
  const arr = [[0, 2]]
//   console.log(ws)
//   console.log(ws.add(arr))
//   console.log(ws.has(arr))
}
{
  // map 类似 object ，与 object 不同的是 map 的键可以用任何类型，而不是只能使用字符串
  const obj = {
    a: 1
  }
  //   console.log(obj.a) // 1
  const objMap = new Map()
  objMap.set(obj, '11')
  //   console.log(objMap.get(obj))
  //   console.log(objMap.has(obj))
  objMap.delete(obj)
  console.log(objMap.has(obj))
  const mObj = new Map([['name', 'pck'], [objMap, 'heihei']])
  //   console.log(mObj.get(objMap))
  //   console.log([...mObj])
  function strMapToObj (mObj = new Map()) {
    const obj = Object.create(null)
    for (const [k, v] of mObj.entries()) {
      if (mObj.has(k)) {
        obj[k] = v
      }
    }
    return obj
  }
  const mapObj1 = strMapToObj(mObj)
  function objToMap (obj = {}) {
    if (Object.is(obj, obj)) {
      return new Map(Object.entries(obj))
    }
  }
  function objToMap2 (obj = {}) {
    if (Object.is(obj, obj)) {
      const m2 = new Map()
      for (const [k, v] of Object.entries(obj)) {
        m2.set(k, v)
      }
      return m2
    }
  }
  console.log(objToMap(mapObj1))
  console.log(objToMap2(mapObj1))
}
