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
    "revision": "b8dccf16f5f57b5564df54d796c3ab23"
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
    "url": "assets/js/12.c457201d.js",
    "revision": "d0a0349ff585ae399aaa674261e311a5"
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
    "url": "assets/js/16.f4f5599f.js",
    "revision": "383db2e09de4aa1364c11f6ac5481a42"
  },
  {
    "url": "assets/js/17.be155e98.js",
    "revision": "08132fdf9017f2963e54a5d4c1687209"
  },
  {
    "url": "assets/js/18.b233d3d6.js",
    "revision": "2ae386f8d43348bd2527f1a0cafe0751"
  },
  {
    "url": "assets/js/19.c6da30fa.js",
    "revision": "8bca6dee697addc27b1982a3bdde488c"
  },
  {
    "url": "assets/js/20.03ff8474.js",
    "revision": "a5358fc12379ed8b0716eace7b15f562"
  },
  {
    "url": "assets/js/21.e86d32b0.js",
    "revision": "be6b4ca437a530ed4ddc063e81bc1884"
  },
  {
    "url": "assets/js/22.03f96e3c.js",
    "revision": "0d63d78d91f2a034537a3dc6c2127cc6"
  },
  {
    "url": "assets/js/23.9db46ac3.js",
    "revision": "f41e2d5f416e9cc283bcd0c612519352"
  },
  {
    "url": "assets/js/24.171d9e15.js",
    "revision": "c511e8a6643d3f639c35e17c2a6e510d"
  },
  {
    "url": "assets/js/25.e5a25fca.js",
    "revision": "ac26dce0243cbbee6893e50001ce9ea7"
  },
  {
    "url": "assets/js/26.d0286d16.js",
    "revision": "dcf7dbe232925c7154880951a514cf80"
  },
  {
    "url": "assets/js/27.c8401fae.js",
    "revision": "0bc508baa8ae6cbb1a34714f3c1354af"
  },
  {
    "url": "assets/js/28.468e6100.js",
    "revision": "164c0c045dfe46cf38a149b2257d8bae"
  },
  {
    "url": "assets/js/29.ad14eb34.js",
    "revision": "e02836f9d437e97f8ed71fc4d2b2af74"
  },
  {
    "url": "assets/js/3.d9c6e3d4.js",
    "revision": "b99d65afc6f3de4d2714680c9143cf27"
  },
  {
    "url": "assets/js/30.04d2f3bf.js",
    "revision": "c1095a724394ca0a3abcab716cdc393e"
  },
  {
    "url": "assets/js/31.3c38327c.js",
    "revision": "f9f4f4c5d3dfa2113ed707eccf15cfa6"
  },
  {
    "url": "assets/js/4.8c76b1dd.js",
    "revision": "d2636703b50f9f2bc6ffbed36e52f48e"
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
    "url": "assets/js/7.97aa63f7.js",
    "revision": "11ca0de0abd753d0300ff1206f94a0db"
  },
  {
    "url": "assets/js/8.881d4737.js",
    "revision": "e598cb77171abf7fa078715c0a6e9ccc"
  },
  {
    "url": "assets/js/9.4820ce51.js",
    "revision": "f38d39e846742cd9a854f3a75472d3fe"
  },
  {
    "url": "assets/js/app.0ae33e73.js",
    "revision": "07a1c0aae78b53596027548c0179f775"
  },
  {
    "url": "banner.jpg",
    "revision": "efb10cca6ee76d6884857d80c8ab2020"
  },
  {
    "url": "categories/Git命令/index.html",
    "revision": "ae85219ac4a42e7b9326e9d76f188eea"
  },
  {
    "url": "categories/index.html",
    "revision": "e1f09da7f8624f986549064ce733dcb7"
  },
  {
    "url": "categories/webpack/index.html",
    "revision": "3ceb6f09e187277feed3eeed9b0151b0"
  },
  {
    "url": "categories/前端问题/index.html",
    "revision": "8b1bb2cd6bae1999f8426c8dd600d598"
  },
  {
    "url": "categories/日常生活/index.html",
    "revision": "1b69a8b71d116cc26a748fa7268d9cf7"
  },
  {
    "url": "categories/神奇海螺/index.html",
    "revision": "95711c3b96a5ba4c6c68f219286aba13"
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
    "revision": "61485906a19786a2e6a59b82a2d64e07"
  },
  {
    "url": "tag/GDP定位/index.html",
    "revision": "31f1bb8dcf4772d1b05f0e3bb0ed1f9e"
  },
  {
    "url": "tag/git stash/index.html",
    "revision": "e3e7537934a5e5e9fab3808ff42f05ab"
  },
  {
    "url": "tag/git介绍/index.html",
    "revision": "3e4f1bdeef24d7f5f87f7fc94d3ad1c2"
  },
  {
    "url": "tag/index.html",
    "revision": "8f44c6726511da2e31e753adcf435ca6"
  },
  {
    "url": "tag/webpack学习/index.html",
    "revision": "5a17736380591594f399d6fcc457a8c8"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "28e5f2f6cdf07972f06ba38bc5d70ba1"
  },
  {
    "url": "tag/代码调试/index.html",
    "revision": "30ab01fd2343dd6ab261a5a34c1cc8a3"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "c7e36b016b21100c3d571f01b5f1a89c"
  },
  {
    "url": "tag/手机预装软件/index.html",
    "revision": "38095f1bfcb03a0dc1b940cb586588ee"
  },
  {
    "url": "tag/智能手环/index.html",
    "revision": "dc86b4d778e35f9962a7e8908c187e34"
  },
  {
    "url": "tag/浏览器/index.html",
    "revision": "175b0a212fbb26c7dd3e15d5666557d0"
  },
  {
    "url": "tag/调试工具/index.html",
    "revision": "2c3cc2f0d489a88764dc8a57e11e6a34"
  },
  {
    "url": "timeline/index.html",
    "revision": "0cb3623795c437c1dcad79838e6e81a7"
  },
  {
    "url": "views/dailyLife/2020/090401.html",
    "revision": "a2d7df66a7ddcb59f6a6e275ec602119"
  },
  {
    "url": "views/dailyLife/2020/090402.html",
    "revision": "7d8d39f78295247909f1003cdfeec9b2"
  },
  {
    "url": "views/dailyLife/2020/110201.html",
    "revision": "7257d6ac4a031e06c19bcd4764830765"
  },
  {
    "url": "views/frontEnd/2020/101301.html",
    "revision": "13d34503c4130ef5403f23d98999061b"
  },
  {
    "url": "views/frontEnd/2020/102301.html",
    "revision": "3c5caf040ca8dbc793907d9b59c07ae9"
  },
  {
    "url": "views/frontEnd/2020/121601.html",
    "revision": "434bb8869c1ee75c73c21c5086b40d95"
  },
  {
    "url": "views/git/2020/091601.html",
    "revision": "ccaeb12435326cffbef8371ca2c13b9a"
  },
  {
    "url": "views/git/2020/091701.html",
    "revision": "41a85415274960cc51fdd12d697b0d12"
  },
  {
    "url": "views/index.html",
    "revision": "7a019b2dc5461a3e40080313659e9a53"
  },
  {
    "url": "views/magic/2020/091101.html",
    "revision": "85e5d42eb8ed31937c90713c1812f499"
  },
  {
    "url": "views/personalInfo/index.html",
    "revision": "36baa4510fd94bbbced2cb9d3ccf6088"
  },
  {
    "url": "views/webpack/2020/090101.html",
    "revision": "c27af2e6b4321f88d0c6f824e37f2d05"
  },
  {
    "url": "views/webpack/2020/090201.html",
    "revision": "d261f96ee0ebb622be33c1f647dcb691"
  },
  {
    "url": "views/webpack/2020/090301.html",
    "revision": "c5bdc4ed3562c675cc91a576021b95b4"
  },
  {
    "url": "views/webpack/2020/090701.html",
    "revision": "0beab072e6f0682780f08ca5fbd653fe"
  },
  {
    "url": "views/webpack/2020/090702.html",
    "revision": "900c39d5e863e67b18761d4b26edff9b"
  },
  {
    "url": "views/webpack/2020/090703.html",
    "revision": "c317803e6934c76927f661de46e84ee3"
  },
  {
    "url": "views/webpack/2020/091201.html",
    "revision": "8aee5d0094fa68031db23fda4ffd0c1e"
  },
  {
    "url": "views/webpack/2020/091202.html",
    "revision": "b3cc3d4659ca6af7f92596895dbfb3e6"
  },
  {
    "url": "views/webpack/2020/091501.html",
    "revision": "b2630cd21bb3aadbd0c1c25887bd9ecd"
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
