{
  // promise 基本用法
  const promise = new Promise((resolve, reject) => {
    // const timer = setTimeout(() => {
    //   clearTimeout(timer)
    //   return resolve('2')
    // }, 2000)
    const timerErr = setTimeout(() => {
      clearTimeout(timerErr)
      return reject(new Error('dfdfd'))
    }, 2000)
  })
  promise.then((res) => {
    console.log(res)
  }).catch((err) => {
    console.log(err)
  })
}
{
  function loadImg (src = '') {
    return new Promise((resolve, reject) => {
      const img = new Image('')
      img.style.width = '100%'
      img.style.display = 'block'
      img.onload = function () {
        return resolve(img)
      }
      img.src = src
    })
  }
  function createElemtnDiv () {
    const div = document.createElement('div')
    div.id = imgContainer
    div.style.width = '400px'
    div.style.height = '200px'
    div.style.background = 'rgba(0,0,0,0.5)'
    div.style.overflow = 'hidden'
    return div
  }
  const imgContainer = 'g-imgContainer'
  const str = 'http://app1.homehawkeye.com/pms_1522402353652.jpg'
//   document.body.appendChild(createElemtnDiv())
//   loadImg(str).then((res) => {
//     document.getElementById(imgContainer).appendChild(res)
//   })
}
{
  // 利用Promise优化ajax
  function getHttp ({ methods = '', url = '', type = [] }) {
    return new Promise((resolve, reject) => {
      function handler () {
        if (this.readyState !== 4) {
          return
        }
        if (this.status === 200) {
          resolve(this.response)
        } else {
          reject(new Error(this.statusText))
        }
      }
      function createXmlHttp () {
        const axaj = new XMLHttpRequest()
        axaj.open(methods, url)
        axaj.onreadystatechange = handler
        axaj.responseType = 'json'
        axaj.setRequestHeader(...type)
        axaj.send()
      }
      createXmlHttp()
    })
  }
  getHttp({ methods: 'get', url: './post.json', type: ['Accept', 'application/json'] }).then((res) => {
    return res
  }).then((post) => {
    console.log(post)
  })
}
{
  // promise实例返回另一个promise实例会覆盖原有的状态回调
  const p1 = new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      clearTimeout(timer)
      return reject(new Error('fimo0'))
    }, 6000)
  })
  const p2 = new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      clearTimeout(timer)
      console.log('返回promise-1')
      return resolve(p1)
    }, 3000)
  })
  const p3 = new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      clearTimeout(timer)
      console.log('返回promise-2')
      return resolve(p2)
    }, 1000)
  })
  p3.then((res) => {
    console.log(res)
  }).catch((err) => {
    console.log(err)
  })
}
{
  // 链式调用then方法
  const p1 = new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      clearTimeout(timer)
      return resolve('第一次回调')
    }, 1000)
  })
  const p2 = new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      clearTimeout(timer)
      return resolve('第二次回调')
    }, 3000)
  })
  p1.then((res) => {
    console.log(res)
    return p2
  }).then((res2) => {
    console.log(res2)
  })
}
{
  // finally
  const p1 = new Promise((resolve, reject) => {
    const timerSuccess = setTimeout(() => {
      clearTimeout(timerSuccess)
      resolve('111111111111111111111111')
    }, 1000)
    // const timerErr = setTimeout(() => {
    //   clearTimeout(timerErr)
    //   reject(new Error('22'))
    // }, 3000)
  })
  p1.then((res) => {
    console.log(res)
  }).catch((err) => {
    console.log(err)
  }).finally((a, b) => {
    console.log(a, b)
    console.log('我不管，谁都拦不住')
  })
}
{
  // promise all 包裹多个promise实例
  const p1 = new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      clearTimeout(timer)
      return resolve('第一次回调')
    }, 1000)
  }).then((res) => {
    console.log('我能阻止你么' + res)
  })
  const p2 = new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      clearTimeout(timer)
      return reject(new Error('阻止他'))
    }, 2000)
  }).catch((err) => {
    console.log('嘿嘿' + err)
  })
  const p3 = new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      clearTimeout(timer)
      return resolve('第仨次回调')
    }, 3000)
  })
  Promise.all([p1, p2, p3]).then((res) => {
    console.log(res)
  }).catch((err) => {
    console.log(err)
  })
}
{
  // promise.race 方法 ，与all方法类似，包裹多个Promise实例，但是不同的是只要有一个返回状态，就会返回到race实例
  const p1 = new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      clearTimeout(timer)
      return resolve('拿到数据')
    }, 5000)
  })
  const p2 = new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      clearTimeout(timer)
      return reject(new Error('没有拿到结果'))
    }, 3000)
  })
  Promise.race([p1, p2]).then((res) => {
    // 如果三秒之内没有拿到数据，就报错/或者执行另一个
    console.log(res)
  }).catch((err) => {
    console.log(err)
  })
}
{
  // promise.allsettled 包裹多个实例，只有全部执行完成才会返回结果，不管是成功或者失败
  const p1 = new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      clearTimeout(timer)
      return resolve('他结束了么')
    }, 2000)
  })
  const p2 = new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      clearTimeout(timer)
      return reject(new Error('他也结束了么'))
    }, 1000)
  })
  Promise.allSettled([p1, p2]).then((res) => {
    console.log('allSettled', res)
  }).catch((err) => {
    console.log(err)
  })
}
{
  const t = Promise.resolve('自定义then对象')
  t.then((res) => {
    console.log(res)
  })
  const b = Promise.resolve({
    then: function (params) {
      console.log('我是谁，我在那')
    }
  })
  const c = Promise.reject(new Error('玩呀呀呀呀呀呀呀我是谁'))
  c.catch((err) => {
    console.log(err)
  })
}
{
  function loadImg (src = '') {
    return new Promise((resolve, reject) => {
      const img = new Image('')
      img.style.width = '100%'
      img.style.height = '100%'
      img.style.display = 'block'
      img.id = 'blur'
      img.onload = function () {
        document.getElementById('g-imgMoban').style.opacity = '0'
        document.getElementById('g-imgMoban').style.height = '0'
        return resolve(img)
      }
      img.src = src
    })
  }
  const imgContainer = 'g-imgContainer1'
  const str = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585659633250&di=ce6ee604fbd5e1b43932a3a1589728ff&imgtype=0&src=http%3A%2F%2Fdfi5wu8thl82p.cloudfront.net%2Fwp-content%2Fuploads%2F2017%2F07%2Fsss05travel02.jpg'
  loadImg(str).then((res) => {
    document.getElementById(imgContainer).appendChild(res)
  })
}
