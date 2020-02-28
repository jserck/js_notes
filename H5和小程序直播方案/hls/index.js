var Hls = window.Hls
var video = document.querySelector('video')
var btn = document.querySelector('.btn')
var player = document.querySelector('.player')
// var url = 'http://127.0.0.1:7002/live/movie.m3u8'
var url = 'https://sslproxy.yy.com:4443/livesystem/15013_xv_54880976_54880976_0_1_0-15013_xa_54880976_54880976_0_10_0.m3u8?org=yyweb&uuid=e01d4b006b3040f5803101159ad27cf2&t=1582881944&tk=bfbb15bf504fa4a8b0a5fcf4b6e20ae2'
if (Hls.isSupported()) {
  var hls = new Hls()
  hls.loadSource(url)
  hls.attachMedia(video)
  hls.on(Hls.Events.MANIFEST_PARSED, function () {
    // video.play()
  })
} else if (video.canPlayType('application/vnd.apple.mpegurl')) {
  video.src = url
  video.addEventListener('canplay', function () {
    // video.play()
  })
}

btn.addEventListener('click', function () {
  if (video.paused) {
    video.play()
  } else {
    video.pause()
  }
})

video.addEventListener('click', function () {
  if (video.paused) {
    video.play()
  } else {
    video.pause()
  }
})

video.addEventListener('play', function () {
  player.className = 'player'
})

video.addEventListener('pause', function () {
  player.className = 'player pause'
})