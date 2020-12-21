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
    "revision": "8294aecb14e4664252a6721ec0d54841"
  },
  {
    "url": "assets/css/0.styles.18a950d7.css",
    "revision": "ae1b1f32826dbd9bb0d799a95b662e5a"
  },
  {
    "url": "assets/img/01.0001bc95.jpg",
    "revision": "0001bc95eced78ff779b5343f4a6000b"
  },
  {
    "url": "assets/img/03.2108fbcf.jpg",
    "revision": "2108fbcfbef8672770cb358db540e044"
  },
  {
    "url": "assets/img/04.a428f20e.jpg",
    "revision": "a428f20e17f6fc53bd80ce4d8aabd498"
  },
  {
    "url": "assets/img/05.9e7a7edf.jpg",
    "revision": "9e7a7edf7f6598bcdfc250846903a2a2"
  },
  {
    "url": "assets/img/06.7e7e406d.jpg",
    "revision": "7e7e406d2a7d800030de5af554b89628"
  },
  {
    "url": "assets/img/07.e1081551.jpg",
    "revision": "e1081551998cd49041caf9a86632d4dc"
  },
  {
    "url": "assets/img/08.ee612bad.jpg",
    "revision": "ee612baddb3f2e09b926c9af6f277e42"
  },
  {
    "url": "assets/img/10.2304d9b6.jpg",
    "revision": "2304d9b61d01771f9d3dfe963853af93"
  },
  {
    "url": "assets/img/11.bdb17e44.jpg",
    "revision": "bdb17e44962fec103994601349007e03"
  },
  {
    "url": "assets/img/12.272f9034.gif",
    "revision": "272f90341f7ae9ed80c66342c04f50ee"
  },
  {
    "url": "assets/img/13.13f865cb.gif",
    "revision": "13f865cbaa34c13bbfb5513eb20f0cb8"
  },
  {
    "url": "assets/img/14.119a9c21.jpg",
    "revision": "119a9c210b294b3790604f0d6ed661be"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/http_method.24d683ae.jpg",
    "revision": "24d683ae3f7ad26118b37aa18e7812b8"
  },
  {
    "url": "assets/img/map_local_1.2dd19c45.jpg",
    "revision": "2dd19c45d69daf1c45508a5b6290d79a"
  },
  {
    "url": "assets/img/map_local_2.6bfd8dc6.jpg",
    "revision": "6bfd8dc62aff8ca0fce2b4844b0a6ef5"
  },
  {
    "url": "assets/img/map_local_3.b315380b.jpg",
    "revision": "b315380bed908eaeeeccc4eeede1b830"
  },
  {
    "url": "assets/img/map_local_4.8459030b.jpg",
    "revision": "8459030b0f070fe7ec5f69051f14e716"
  },
  {
    "url": "assets/img/map_local_5.a166c5b8.jpg",
    "revision": "a166c5b8cf7d77e8a478fe54748c0548"
  },
  {
    "url": "assets/img/map_local_6.266c4f19.jpg",
    "revision": "266c4f19566719854ddf20ede538d2c5"
  },
  {
    "url": "assets/img/map_local_7.e2c92a38.jpg",
    "revision": "e2c92a384a489620f132baad39ed3901"
  },
  {
    "url": "assets/img/map_local_8.72ba408e.jpg",
    "revision": "72ba408ed91ffb0e131662aa9972674c"
  },
  {
    "url": "assets/img/options.4926a7d2.jpg",
    "revision": "4926a7d2ae48187c53e4d55edfc1b9ca"
  },
  {
    "url": "assets/img/rewrite_1.d0989e0a.jpg",
    "revision": "d0989e0abe84b54a0afc79621880ca3d"
  },
  {
    "url": "assets/img/rewrite_2.b3946d2a.jpg",
    "revision": "b3946d2a31226182542db1da37410a0f"
  },
  {
    "url": "assets/img/rewrite_3.65967d42.jpg",
    "revision": "65967d42ec1fc034ee4fef16ef0376e2"
  },
  {
    "url": "assets/img/rewrite_4.229640c9.jpg",
    "revision": "229640c96946d866764ec68f8c8ad8d3"
  },
  {
    "url": "assets/img/rewrite_5.01dfc091.jpg",
    "revision": "01dfc0913002035f93e8f04f2648044b"
  },
  {
    "url": "assets/img/step_3_1.b9fbc8b7.jpg",
    "revision": "b9fbc8b7eb9e0e1a274250f7278da810"
  },
  {
    "url": "assets/img/step_3_2.16c488d5.jpg",
    "revision": "16c488d56e69faa00330c9a4eddcb0c0"
  },
  {
    "url": "assets/img/step_3_3.501c0f52.jpg",
    "revision": "501c0f52a29321636859bad29cfa1342"
  },
  {
    "url": "assets/img/step1.9da31456.png",
    "revision": "9da314562b3628be0daa76e39a708d9f"
  },
  {
    "url": "assets/img/step2.d038750d.jpg",
    "revision": "d038750dcac170cf619bbf8e018ac4a9"
  },
  {
    "url": "assets/js/1.e6e1adab.js",
    "revision": "e543137a6b3489f58b10fb2c5109f4cd"
  },
  {
    "url": "assets/js/10.77709dbc.js",
    "revision": "90c4bf68d95eb89773ccc361172d1ea1"
  },
  {
    "url": "assets/js/11.db997f63.js",
    "revision": "3f868b737510a54badd0508777973fc0"
  },
  {
    "url": "assets/js/12.c4dff92f.js",
    "revision": "b2d57b90b4d2f6c447e0ac76fade825c"
  },
  {
    "url": "assets/js/13.6a0863c9.js",
    "revision": "7ccbaeacee53479b7dc91b2f8283c793"
  },
  {
    "url": "assets/js/14.f3ebd469.js",
    "revision": "bf40f6e5526e512b93bf25d79a454c42"
  },
  {
    "url": "assets/js/15.88b0feb5.js",
    "revision": "fabc00cc7928e4caf3020f131a087f02"
  },
  {
    "url": "assets/js/16.4902584f.js",
    "revision": "f14ab6277c4a396af502ab9b93c36d96"
  },
  {
    "url": "assets/js/17.5c5a13f6.js",
    "revision": "e4bee8a3ce34a0a328226f4350876b03"
  },
  {
    "url": "assets/js/18.6ad9fff6.js",
    "revision": "461d546161bd65474c1b8fd5403d41e4"
  },
  {
    "url": "assets/js/19.3865a5cf.js",
    "revision": "32d29940238d0953f9a6f65e59744c70"
  },
  {
    "url": "assets/js/20.6f2c32f5.js",
    "revision": "5ef0f043861e46dde5aae100026f6896"
  },
  {
    "url": "assets/js/21.20932f57.js",
    "revision": "9a62c4f04b3bbe927dce9c10615e5e33"
  },
  {
    "url": "assets/js/22.3a8e62b1.js",
    "revision": "ebdf67c5b1a9b06513c72820d4e9b753"
  },
  {
    "url": "assets/js/23.dc2318c1.js",
    "revision": "7787cd5ef46b5ddb1be90025fd802759"
  },
  {
    "url": "assets/js/24.bfb76bdf.js",
    "revision": "59fd00106dd9599ef70c2e30b4238a76"
  },
  {
    "url": "assets/js/25.ba8b9f6f.js",
    "revision": "de7d3c3904808be470ca761e5da05b44"
  },
  {
    "url": "assets/js/26.1ee8bc6c.js",
    "revision": "20874474c84fbffb370041e0d3cf86a6"
  },
  {
    "url": "assets/js/27.59b8dabb.js",
    "revision": "b495374756d784c92bcef2da600042c7"
  },
  {
    "url": "assets/js/28.a42e1a17.js",
    "revision": "5fd9f4816600c53191f1eaa93d53b5bc"
  },
  {
    "url": "assets/js/29.541588ab.js",
    "revision": "b13fec2c9afd1016314442c147157c5f"
  },
  {
    "url": "assets/js/3.d9c6e3d4.js",
    "revision": "b99d65afc6f3de4d2714680c9143cf27"
  },
  {
    "url": "assets/js/30.4d90aa4b.js",
    "revision": "a2aabf3972f360c383490501ba38e927"
  },
  {
    "url": "assets/js/31.f046ef90.js",
    "revision": "4bca0fb35c62fa79533bdec1dd6856a4"
  },
  {
    "url": "assets/js/32.34e6d50c.js",
    "revision": "086ebb7bbdbf20d3271914b6801e2c7b"
  },
  {
    "url": "assets/js/4.b2b4aed7.js",
    "revision": "b2ebcd41ec4d9fd53a37fabf1e85cf1b"
  },
  {
    "url": "assets/js/5.191454f4.js",
    "revision": "c351ab7c3ee802effd8ec7b7fb657398"
  },
  {
    "url": "assets/js/6.14ca29b8.js",
    "revision": "a11dcf91cf6f991e77a7b1d078f08494"
  },
  {
    "url": "assets/js/7.30476999.js",
    "revision": "b4f257960ddc540026e68faa43f5dd1d"
  },
  {
    "url": "assets/js/8.881d4737.js",
    "revision": "e598cb77171abf7fa078715c0a6e9ccc"
  },
  {
    "url": "assets/js/9.1946ef7f.js",
    "revision": "79f15f21ae1af9c69da8b388fd5967f5"
  },
  {
    "url": "assets/js/app.ffbd418e.js",
    "revision": "eea05ab007a73b2fd153159686f12781"
  },
  {
    "url": "banner.jpg",
    "revision": "efb10cca6ee76d6884857d80c8ab2020"
  },
  {
    "url": "categories/Git命令/index.html",
    "revision": "86e03f640f50b25fa2bbec048c401f36"
  },
  {
    "url": "categories/index.html",
    "revision": "c39c74d19d2af3821ba25f554e761e66"
  },
  {
    "url": "categories/webpack/index.html",
    "revision": "7490f8746a79a4e29e63bf7ba4d7f0e3"
  },
  {
    "url": "categories/前端问题/index.html",
    "revision": "afa5e9b5d7895cb1a8f74cf3e21e44fc"
  },
  {
    "url": "categories/微信小程序/index.html",
    "revision": "9e6d72e7663af0a7e9562f5a1e4e4002"
  },
  {
    "url": "categories/日常生活/index.html",
    "revision": "47c906ccd614d91c216a32200e0b2b01"
  },
  {
    "url": "categories/神奇海螺/index.html",
    "revision": "070a3c80550bef9028ea35c5c8e9bffc"
  },
  {
    "url": "head.jpg",
    "revision": "b5655fa9747cfded725c0da999cab598"
  },
  {
    "url": "head.png",
    "revision": "b5655fa9747cfded725c0da999cab598"
  },
  {
    "url": "img/dailyLife/2020/090401/01.jpg",
    "revision": "0001bc95eced78ff779b5343f4a6000b"
  },
  {
    "url": "img/dailyLife/2020/090401/02.jpg",
    "revision": "9328f4559d6774c9b7740975610b9486"
  },
  {
    "url": "img/dailyLife/2020/090401/03.jpg",
    "revision": "2108fbcfbef8672770cb358db540e044"
  },
  {
    "url": "img/dailyLife/2020/090401/04.jpg",
    "revision": "a428f20e17f6fc53bd80ce4d8aabd498"
  },
  {
    "url": "img/dailyLife/2020/090401/05.jpg",
    "revision": "9e7a7edf7f6598bcdfc250846903a2a2"
  },
  {
    "url": "img/dailyLife/2020/090401/06.jpg",
    "revision": "7e7e406d2a7d800030de5af554b89628"
  },
  {
    "url": "img/dailyLife/2020/090401/07.jpg",
    "revision": "e1081551998cd49041caf9a86632d4dc"
  },
  {
    "url": "img/dailyLife/2020/090401/08.jpg",
    "revision": "ee612baddb3f2e09b926c9af6f277e42"
  },
  {
    "url": "img/dailyLife/2020/090401/09.jpg",
    "revision": "493869e4e8cec6ca9ad5290de7633f29"
  },
  {
    "url": "img/dailyLife/2020/090401/10.jpg",
    "revision": "2304d9b61d01771f9d3dfe963853af93"
  },
  {
    "url": "img/dailyLife/2020/090401/11.jpg",
    "revision": "bdb17e44962fec103994601349007e03"
  },
  {
    "url": "img/dailyLife/2020/090401/12.gif",
    "revision": "272f90341f7ae9ed80c66342c04f50ee"
  },
  {
    "url": "img/dailyLife/2020/090401/13.gif",
    "revision": "13f865cbaa34c13bbfb5513eb20f0cb8"
  },
  {
    "url": "img/dailyLife/2020/090401/14.jpg",
    "revision": "119a9c210b294b3790604f0d6ed661be"
  },
  {
    "url": "img/dailyLife/2020/110201/step_3_1.jpg",
    "revision": "b9fbc8b7eb9e0e1a274250f7278da810"
  },
  {
    "url": "img/dailyLife/2020/110201/step_3_2.jpg",
    "revision": "16c488d56e69faa00330c9a4eddcb0c0"
  },
  {
    "url": "img/dailyLife/2020/110201/step_3_3.jpg",
    "revision": "501c0f52a29321636859bad29cfa1342"
  },
  {
    "url": "img/dailyLife/2020/110201/step1.png",
    "revision": "9da314562b3628be0daa76e39a708d9f"
  },
  {
    "url": "img/dailyLife/2020/110201/step2.jpg",
    "revision": "d038750dcac170cf619bbf8e018ac4a9"
  },
  {
    "url": "img/frontEnd/2020/121601/http_method.jpg",
    "revision": "24d683ae3f7ad26118b37aa18e7812b8"
  },
  {
    "url": "img/frontEnd/2020/121601/map_local_1.jpg",
    "revision": "2dd19c45d69daf1c45508a5b6290d79a"
  },
  {
    "url": "img/frontEnd/2020/121601/map_local_2.jpg",
    "revision": "6bfd8dc62aff8ca0fce2b4844b0a6ef5"
  },
  {
    "url": "img/frontEnd/2020/121601/map_local_3.jpg",
    "revision": "b315380bed908eaeeeccc4eeede1b830"
  },
  {
    "url": "img/frontEnd/2020/121601/map_local_4.jpg",
    "revision": "8459030b0f070fe7ec5f69051f14e716"
  },
  {
    "url": "img/frontEnd/2020/121601/map_local_5.jpg",
    "revision": "a166c5b8cf7d77e8a478fe54748c0548"
  },
  {
    "url": "img/frontEnd/2020/121601/map_local_6.jpg",
    "revision": "266c4f19566719854ddf20ede538d2c5"
  },
  {
    "url": "img/frontEnd/2020/121601/map_local_7.jpg",
    "revision": "e2c92a384a489620f132baad39ed3901"
  },
  {
    "url": "img/frontEnd/2020/121601/map_local_8.jpg",
    "revision": "72ba408ed91ffb0e131662aa9972674c"
  },
  {
    "url": "img/frontEnd/2020/121601/options.jpg",
    "revision": "4926a7d2ae48187c53e4d55edfc1b9ca"
  },
  {
    "url": "img/frontEnd/2020/121601/rewrite_1.jpg",
    "revision": "d0989e0abe84b54a0afc79621880ca3d"
  },
  {
    "url": "img/frontEnd/2020/121601/rewrite_2.jpg",
    "revision": "b3946d2a31226182542db1da37410a0f"
  },
  {
    "url": "img/frontEnd/2020/121601/rewrite_3.jpg",
    "revision": "65967d42ec1fc034ee4fef16ef0376e2"
  },
  {
    "url": "img/frontEnd/2020/121601/rewrite_4.jpg",
    "revision": "229640c96946d866764ec68f8c8ad8d3"
  },
  {
    "url": "img/frontEnd/2020/121601/rewrite_5.jpg",
    "revision": "01dfc0913002035f93e8f04f2648044b"
  },
  {
    "url": "index.html",
    "revision": "eb7242fc875ace950bd553df932cc4bb"
  },
  {
    "url": "tag/GDP定位/index.html",
    "revision": "437b5a70e7b22185e2ef121ec1f9b054"
  },
  {
    "url": "tag/git stash/index.html",
    "revision": "27339a5d68772048e5a0d72850415374"
  },
  {
    "url": "tag/git介绍/index.html",
    "revision": "44419b913042fcb38cb4428c74d4624b"
  },
  {
    "url": "tag/index.html",
    "revision": "407daba14f1f0c84f6b8dd8948111e14"
  },
  {
    "url": "tag/webpack学习/index.html",
    "revision": "3919c7895d76217a607c15ce406edfd1"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "4de7b1ff1c356643ae69b5cff5c3f788"
  },
  {
    "url": "tag/代码调试/index.html",
    "revision": "b0c09fb9f4cb9bb15f38ecd01cc50c75"
  },
  {
    "url": "tag/小程序学习/index.html",
    "revision": "1ca9d5f30f9aa71d475b7011a5e288bd"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "a660d68b799e5a3c1fd3c6f645e4b70f"
  },
  {
    "url": "tag/手机预装软件/index.html",
    "revision": "d1ead1d2491858a20118e6aefd43fa31"
  },
  {
    "url": "tag/智能手环/index.html",
    "revision": "8d903923d24d8565693af490a32289b9"
  },
  {
    "url": "tag/浏览器/index.html",
    "revision": "403adf8875f7c6ba95b6ddaa264728c8"
  },
  {
    "url": "tag/调试工具/index.html",
    "revision": "e7aa71b6ac3c26d790d7a4a1db30450c"
  },
  {
    "url": "timeline/index.html",
    "revision": "ecceb7c04fca697f5d8272d034e473bf"
  },
  {
    "url": "views/dailyLife/2020/090401.html",
    "revision": "bd3f9f9f2ac1606d4a1c2b0fbbcc1df1"
  },
  {
    "url": "views/dailyLife/2020/090402.html",
    "revision": "b6fa32f4b2c245e77fdedc047b4f142b"
  },
  {
    "url": "views/dailyLife/2020/110201.html",
    "revision": "e9dfba8e90bc14047fbd39934a97e65c"
  },
  {
    "url": "views/frontEnd/2020/101301.html",
    "revision": "567cdb64b77b4a353b29b5d0f5bea004"
  },
  {
    "url": "views/frontEnd/2020/102301.html",
    "revision": "1cc34c4b513427893038dc61fb2be0d6"
  },
  {
    "url": "views/frontEnd/2020/121601.html",
    "revision": "a5e7e3e63f01016a11552fc919c500be"
  },
  {
    "url": "views/git/2020/091601.html",
    "revision": "8046406d226ca3361769da7d1fe276ee"
  },
  {
    "url": "views/git/2020/091701.html",
    "revision": "320b65e644edd878b6f591cc45d658b2"
  },
  {
    "url": "views/index.html",
    "revision": "cc502d7662925979614b01681ae70d1b"
  },
  {
    "url": "views/magic/2020/091101.html",
    "revision": "c30116f6400a00c032762a9d2de5c234"
  },
  {
    "url": "views/miniProgram/122101.html",
    "revision": "f323be49e72961110c10335be8cbcffc"
  },
  {
    "url": "views/personalInfo/index.html",
    "revision": "22daeb0d1d5e74f08c7bb4defc46d201"
  },
  {
    "url": "views/webpack/2020/090101.html",
    "revision": "25e25c0d0c30dcb10aac8d7c7b36e209"
  },
  {
    "url": "views/webpack/2020/090201.html",
    "revision": "b34782e05998561e40fb3c09265682f1"
  },
  {
    "url": "views/webpack/2020/090301.html",
    "revision": "6c03a7029ab2ebadf2d0714fa2c86076"
  },
  {
    "url": "views/webpack/2020/090701.html",
    "revision": "8a211aad2d42f22200b125a0cf0527c2"
  },
  {
    "url": "views/webpack/2020/090702.html",
    "revision": "ca56c979c3edacb438553a5b255ac093"
  },
  {
    "url": "views/webpack/2020/090703.html",
    "revision": "5d8a851876d4acdfc2556c90efc1bf43"
  },
  {
    "url": "views/webpack/2020/091201.html",
    "revision": "f08a741441cbfd51be221b52cca6f8af"
  },
  {
    "url": "views/webpack/2020/091202.html",
    "revision": "ec929ee28512fc12a28a1976d7e64b88"
  },
  {
    "url": "views/webpack/2020/091501.html",
    "revision": "163950425c2826f320f8e2e59a0435be"
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
