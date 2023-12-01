/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "bf6f542c591c9044fcdb8d08f5f287f7"
  },
  {
    "url": "assets/css/0.styles.a700039a.css",
    "revision": "8c87fad0d092a3446e25f7073efb1484"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.9c095946.js",
    "revision": "2f29ceea72079a8f2b1e6eb7072fe65b"
  },
  {
    "url": "assets/js/10.79789b25.js",
    "revision": "e2a2d0e080562366f6e840402515732a"
  },
  {
    "url": "assets/js/11.2c4afc16.js",
    "revision": "7580cf16820e13469927f84998ac5a4b"
  },
  {
    "url": "assets/js/12.85db2593.js",
    "revision": "31f0cbca608fd2a76dca31cef0b1d6ca"
  },
  {
    "url": "assets/js/13.7dc3689b.js",
    "revision": "edfa33aa84c8aa158b680ca77f539edb"
  },
  {
    "url": "assets/js/14.2d835ba6.js",
    "revision": "efdad12335fc7c3c7533517066d804d1"
  },
  {
    "url": "assets/js/15.f2beab23.js",
    "revision": "5dd98ef99c6c6f677d81d45ad7002207"
  },
  {
    "url": "assets/js/16.9cb6b3e4.js",
    "revision": "d4916deeb451df55d4294ba43677e37d"
  },
  {
    "url": "assets/js/17.fdb74ed2.js",
    "revision": "2310a73450e309757d7ee056307e196d"
  },
  {
    "url": "assets/js/18.4c222183.js",
    "revision": "ec62ae1edd9d1a3d573cf959240c379f"
  },
  {
    "url": "assets/js/19.d6f0da8b.js",
    "revision": "d1a0838b118240248ffca7b4ffebd5b6"
  },
  {
    "url": "assets/js/20.a5ab8533.js",
    "revision": "be4979c91be57f9f46dc4e40c4ac1191"
  },
  {
    "url": "assets/js/21.1453fa38.js",
    "revision": "5d4faa35ed21c34580262bef66c88e50"
  },
  {
    "url": "assets/js/22.717f5b85.js",
    "revision": "6baf509a7894dca4b6e1c5ba42e78aa7"
  },
  {
    "url": "assets/js/23.86552df2.js",
    "revision": "4045bbb62456b3eb0a85ad761b2b406a"
  },
  {
    "url": "assets/js/24.ac059fd1.js",
    "revision": "7de95738018229b1c057150c09e03a87"
  },
  {
    "url": "assets/js/25.d74f3357.js",
    "revision": "a290b6e7de9298b3478aba8a11db76aa"
  },
  {
    "url": "assets/js/26.fa818b1c.js",
    "revision": "b71bfec24ebd67ec37636c203aad3550"
  },
  {
    "url": "assets/js/27.8b25b7ee.js",
    "revision": "984a5d73f21889a14f0b804852371628"
  },
  {
    "url": "assets/js/28.325300d8.js",
    "revision": "bc8c1eaeaf1ae1f2074e1da971c8ae0e"
  },
  {
    "url": "assets/js/29.85302f0a.js",
    "revision": "5e8a59c5dc59dfe941291db1ab88ceeb"
  },
  {
    "url": "assets/js/3.f9330212.js",
    "revision": "e1dec3a2fc8c234c63b15c1b4b680745"
  },
  {
    "url": "assets/js/30.dccf0e84.js",
    "revision": "d6587de10b8df8e99a43cb6016b3207c"
  },
  {
    "url": "assets/js/31.bd8e9275.js",
    "revision": "f647968e0855879498a2638247156517"
  },
  {
    "url": "assets/js/32.92756e00.js",
    "revision": "805887c69b449a1bb5bb6f1d8541c927"
  },
  {
    "url": "assets/js/33.e6979132.js",
    "revision": "528a0dfab9312c13d4a2f8d5d72b4514"
  },
  {
    "url": "assets/js/34.82b0ffc8.js",
    "revision": "bebd632794a4162ae956bfc705e6a720"
  },
  {
    "url": "assets/js/35.910f536d.js",
    "revision": "49c6a8bb5de421585fb31afee029e35c"
  },
  {
    "url": "assets/js/36.08ae4e4b.js",
    "revision": "f53b1a9f118cd81d3f301226183dfdad"
  },
  {
    "url": "assets/js/37.05438abd.js",
    "revision": "0fa6193fb800fcc4ff72860cb75aac6a"
  },
  {
    "url": "assets/js/4.297324e5.js",
    "revision": "e17d40be1de0b90ad81ed97e03d74b63"
  },
  {
    "url": "assets/js/5.a21ee252.js",
    "revision": "aae019678d77e0a7f943e7c16ed3cc72"
  },
  {
    "url": "assets/js/6.c7e93475.js",
    "revision": "8f7d787f8720c1e11c44149b6a03cf67"
  },
  {
    "url": "assets/js/7.31e26c75.js",
    "revision": "11b77e4d655cad8a1ce5e757b8fcaf32"
  },
  {
    "url": "assets/js/8.80a63c96.js",
    "revision": "e47eee72344d896ba9f48faeea974bee"
  },
  {
    "url": "assets/js/9.abbd977f.js",
    "revision": "384631162f23250d48917c0115295b44"
  },
  {
    "url": "assets/js/app.296db006.js",
    "revision": "3a3c2f846f62098ec303bb1357c9e9d5"
  },
  {
    "url": "banner.jpg",
    "revision": "8b554bea76252e44c1799968352edb1a"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "dcb1d8d03a460dd0757f301756a1336b"
  },
  {
    "url": "categories/index.html",
    "revision": "3af038cb3a8d134b5c8454e0780efcb6"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "745d03aad5a2cbe5d6f0f34789648469"
  },
  {
    "url": "categories/工作分享/index.html",
    "revision": "86ab62c77e166d6ba7abf06e952678ca"
  },
  {
    "url": "categories/微信小程序/index.html",
    "revision": "50c8846f8b50f7ee66dcaefa160dbf87"
  },
  {
    "url": "categories/打包工具/index.html",
    "revision": "93b9b4165f4fdea3b807bc4f5b1af848"
  },
  {
    "url": "categories/日常生活/index.html",
    "revision": "62170766e818f2a7e07b64d8f814612b"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "33e42031fa96f4f7b5a20f404f428fe2"
  },
  {
    "url": "head.jpg",
    "revision": "7c79c795cda1c307d178a9e6164f7a5b"
  },
  {
    "url": "head.png",
    "revision": "7c79c795cda1c307d178a9e6164f7a5b"
  },
  {
    "url": "index.html",
    "revision": "14929de6772d2f390e354b4481e419ed"
  },
  {
    "url": "tag/bug总结/index.html",
    "revision": "38af76be50730cdd2d421bd93bf96edc"
  },
  {
    "url": "tag/Charles调试工具/index.html",
    "revision": "ca7282d0ffc644ff2fe9c0a6b5712dda"
  },
  {
    "url": "tag/Debugger方法/index.html",
    "revision": "52ba9a11d3a242fe69a98ada80607836"
  },
  {
    "url": "tag/git stash/index.html",
    "revision": "c7b0169f796e52df6aa96056e5edd6ab"
  },
  {
    "url": "tag/git介绍/index.html",
    "revision": "af77a64369764bdf29c0f0681006064d"
  },
  {
    "url": "tag/HTML编译/index.html",
    "revision": "c2fc616e5c29a91efab4fe10b69a4fcd"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "6f9a8fc9a2c9e72a6d5b1ce6f1da3d5b"
  },
  {
    "url": "tag/index.html",
    "revision": "e411e4206567eaafd0cc75fc71917faf"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "5f59f203e54b580c83b9d51af9b68533"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "e91a743019dd83c8b0a5ef85f57c5b9b"
  },
  {
    "url": "tag/力扣/index.html",
    "revision": "680ca7c172c2d3c1fdfd9afaf90504fd"
  },
  {
    "url": "tag/华为机试/index.html",
    "revision": "6b90fdfc6995a592d588220befadd31d"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "4391cee36737daf979c5fe040b1f5e02"
  },
  {
    "url": "tag/微信小程序学习/index.html",
    "revision": "0be3e6f19783c9c694da753656f05702"
  },
  {
    "url": "tag/手机预装软件/index.html",
    "revision": "8ea56fa5bf96de74ca70828e02aadb0e"
  },
  {
    "url": "tag/智能手环/index.html",
    "revision": "0ca657dfd2f35c1854edc4658328e681"
  },
  {
    "url": "tag/浏览器/index.html",
    "revision": "9bb583c699f4253940062d166dbd1457"
  },
  {
    "url": "timeline/index.html",
    "revision": "9ea87eafd51271fc40c3b30ca30daa97"
  },
  {
    "url": "views/buglist/2023/060201.html",
    "revision": "6f78de73250abf9ca558712192e3e2e0"
  },
  {
    "url": "views/coding/2021/030101.html",
    "revision": "a89b9edf871eb90e3b4be87b3d88c69f"
  },
  {
    "url": "views/coding/2023/020901.html",
    "revision": "d2fe45cad94829b086d6492be1adca62"
  },
  {
    "url": "views/dailylife/2020/090401.html",
    "revision": "cad21e196ddf6dbd9fea6133f980c17f"
  },
  {
    "url": "views/dailylife/2020/091101.html",
    "revision": "9da946b8d0caafe61e3c1165c1ed070f"
  },
  {
    "url": "views/dailylife/2020/110201.html",
    "revision": "172d1a2bf169ea403cdc05e27e2303f0"
  },
  {
    "url": "views/frontend/2020/101301.html",
    "revision": "681983c9bc3e9a9693eaca771755f364"
  },
  {
    "url": "views/frontend/2020/102301.html",
    "revision": "eb8ebe21589a9e6a8f57f27918592142"
  },
  {
    "url": "views/frontend/2020/121601.html",
    "revision": "677a1d4ea528f352e853a9a3936c1ea0"
  },
  {
    "url": "views/frontend/2021/011801.html",
    "revision": "1840cb76ebb1f01f48aacabd25a62f48"
  },
  {
    "url": "views/frontend/2021/110201.html",
    "revision": "0171b820676ddfc80bb32c2be9ee4dd8"
  },
  {
    "url": "views/git/2020/091601.html",
    "revision": "c3ca025cdf926474e472e59bcb97af36"
  },
  {
    "url": "views/git/2020/091701.html",
    "revision": "6557faee2c7fe50d35d558ce2b12398a"
  },
  {
    "url": "views/git/2023/060201.html",
    "revision": "4e969b446dad62684a0075e50ff36ffa"
  },
  {
    "url": "views/index.html",
    "revision": "235ab76fd0760ecaf5bd58ec2fca963f"
  },
  {
    "url": "views/miniprogram/2020/122101.html",
    "revision": "d23deed3925a100fcca3a3d0bc975ad9"
  },
  {
    "url": "views/personalinfo/index.html",
    "revision": "881bf8e867d8db7463c02825dadd08a0"
  },
  {
    "url": "views/webpack/2020/090101.html",
    "revision": "78f914fd1208e07bbeadd5724a80e1d1"
  },
  {
    "url": "views/webpack/2020/090201.html",
    "revision": "d7c276766f5789a6a263eb973a247095"
  },
  {
    "url": "views/webpack/2020/090301.html",
    "revision": "60e97c8122adefe07327a38d3d423c01"
  },
  {
    "url": "views/webpack/2020/090701.html",
    "revision": "9a2eac9701c5239f9fdcc7252c4cc961"
  },
  {
    "url": "views/webpack/2020/090702.html",
    "revision": "e93398ecf41104a3fae51d2075ea5e7d"
  },
  {
    "url": "views/webpack/2020/090703.html",
    "revision": "f0be4dcd62ac1cb2c2eda985b7655593"
  },
  {
    "url": "views/webpack/2020/091201.html",
    "revision": "98aa5ea26b52be207eccadb5852788e9"
  },
  {
    "url": "views/webpack/2020/091202.html",
    "revision": "7ff88b6b94eb3ff5af4c8c52a03580fa"
  },
  {
    "url": "views/webpack/2020/091501.html",
    "revision": "478f474ad3d75bcb01aaaa819bbb9151"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
