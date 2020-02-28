var flvjs = window.flvjs
if (flvjs.isSupported()) {
  var videoElement = document.getElementById('videoElement')
  var flvPlayer = flvjs.createPlayer({
    type: 'flv',
    url: 'https://sslproxy.yy.com:4443/livesystem/15013_xv_54880976_54880976_0_1_0-15013_xa_54880976_54880976_0_10_0.m3u8?org=yyweb&uuid=e01d4b006b3040f5803101159ad27cf2&t=1582881944&tk=bfbb15bf504fa4a8b0a5fcf4b6e20ae2'
  })
  flvPlayer.attachMediaElement(videoElement)
  flvPlayer.load()
  flvPlayer.play()
}