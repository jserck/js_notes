{
  // async函数可以说是gen函数的改进版本，其中最明显的区别就是async函数自带执行器
  async function timeout (ms) {
    await new Promise((resolve) => {
      setTimeout(resolve, ms)
    })
  }

  async function asyncPrint (value, ms) {
    await timeout(ms)
    console.log(value)
  }

  //   asyncPrint('hello world', 5000)
  async function sleep () {
    let i = 0
    while (i < 5) {
      await timeout(3000)
      console.log(i)
      i++
    }
    return {
      data: {
        name: 'pck'
      }
    }
  }
//   sleep().then((res) => {
//     console.log(res)
//   })
}
{
  class Sleep {
    constructor (timeout) {
      this.timeout = timeout
    }

    then (resolve, reject) {
      const startTime = Date.now()
      setTimeout(
        () => resolve(Date.now() - startTime),
        this.timeout
      )
    }
  }

//   (async () => {
//     const sleepTime = await new Sleep(1000)
//     console.log(sleepTime)
//   })()
}
{
  async function threw () {
    // await Promise.reject(new Error('错了外')).catch(err => {
    //   console.log(err)
    // })
    try {
      await Promise.reject(new Error('错了外'))
    } catch (error) {
      console.log(error)
    }
    return Promise.resolve('好了')
  }
//   threw().then((res) => {
//     console.log(res)
//     // return Promise.reject(new Error('错了里'))
//   }, e => console.log(e + '1')
//   ).catch(err => console.log(err))
}
{
  function createHttp (num = 0) {
    return new Promise((resolve, reject) => {
      if (num < 4) {
        setTimeout(() => {
          return reject(new Error('502'))
        }, 2000)
      }
      setTimeout(() => {
        return resolve('data')
      }, 2000)
    })
  }
  function saveHttp () {
    const num = 0
    async function forHttp (num) {
      await createHttp(num).then(res => {
        return Promise.resolve(res)
      }).catch(err => {
        console.log(err)
        num += 1
        forHttp(num)
      })
    }
    return forHttp(num)
  }
//   saveHttp().then(res => {
//     console.log(res)
//   })
}
{
  async function time1 () {
    return new Promise((resolve) => {
      setTimeout(function () {
        console.log('我第1个触发')
        resolve()
      }, 2000)
    })
  }
  function time2 () {
    return new Promise((resolve) => {
      setTimeout(function () {
        console.log('我第2个触发')
        resolve()
      }, 2000)
    })
  }
  //   async function asFn () {
  //     try {
  //       await time1()
  //       await time2()
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   asFn().then(res => {
  //     console.log('执行完成')
  //   })
  // const [l, r] = Promise.all([time1(), time2()])
  // console.log(l, r)
}
{
  // 利用async函数实现多个重复的尝试
  async function getHttp ({ time = 0, index = 0 } = {}) {
    const timer = await setTimeout(async () => {
      const ERRNUM = 2
      if (index < ERRNUM) {
        await Promise.reject(new Error('用力啊弟弟'))
      } else {
        console.log({ response: { data: { name: `pck${index}` } } })
      }
      clearTimeout(timer)
    }, time)
  }
  (async function sleep (fn) {
    const NUM = 3
    const SNDATA = {
      time: 2000,
      index: 0
    }
    for (let index = 0; index < NUM; index++) {
      try {
        SNDATA.index = index
        await fn(SNDATA)
        break
      } catch (error) {
        console.log(error)
      }
    }
  })(getHttp)
}
