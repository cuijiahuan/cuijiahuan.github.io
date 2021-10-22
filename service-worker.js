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
    "revision": "e2671daf9d41166af1a3dd4f116d71f1"
  },
  {
    "url": "assets/css/0.styles.a700039a.css",
    "revision": "8c87fad0d092a3446e25f7073efb1484"
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
    "url": "assets/js/1.c138208f.js",
    "revision": "604ffc957c0f81b7dcaaaab18a513426"
  },
  {
    "url": "assets/js/10.8cfe542e.js",
    "revision": "8270530270a3fa20219be4753ec169fc"
  },
  {
    "url": "assets/js/11.e7bb0776.js",
    "revision": "b8abb0bbadc73571e3e2edd13c5f86af"
  },
  {
    "url": "assets/js/12.d88cb6fb.js",
    "revision": "714e4153a17464bd0d90db512fce01e9"
  },
  {
    "url": "assets/js/13.3b6d2be0.js",
    "revision": "007ae940b26fb846e1bb3291df36158e"
  },
  {
    "url": "assets/js/14.41c00997.js",
    "revision": "7f6ee569baf2dcc89f6c9b71a815a3bb"
  },
  {
    "url": "assets/js/15.3497db29.js",
    "revision": "cb71e941f03626b921ca87bc240a90b1"
  },
  {
    "url": "assets/js/16.ea2f4f82.js",
    "revision": "f61c30732aef89aba92ae5eb5e2ba768"
  },
  {
    "url": "assets/js/17.278c72e0.js",
    "revision": "52d7316c55fad694c9c08add354c2778"
  },
  {
    "url": "assets/js/18.7fd4ea5c.js",
    "revision": "beb1a31ab950fb671420ee9899d1d24b"
  },
  {
    "url": "assets/js/19.4cf06438.js",
    "revision": "0c9e17caf0b3fe0d3d7b20cb67c6ca28"
  },
  {
    "url": "assets/js/20.72eba3e1.js",
    "revision": "bc50496dc41c03682ab727ec5c903774"
  },
  {
    "url": "assets/js/21.2ac8ddb2.js",
    "revision": "d63538e42f44693f7b1dc250412ca686"
  },
  {
    "url": "assets/js/22.a1ef9da1.js",
    "revision": "6aa6a82d93f0bf86154bf0dc3cfbd2d3"
  },
  {
    "url": "assets/js/23.75c26c73.js",
    "revision": "625e68e57d998fea0d0a5bcebca75aef"
  },
  {
    "url": "assets/js/24.df0db3e9.js",
    "revision": "22a932da6c16ab808f8e649e166008cb"
  },
  {
    "url": "assets/js/25.78f522c2.js",
    "revision": "c5e07523736e4cbbf7c7e59204953205"
  },
  {
    "url": "assets/js/26.04ca29eb.js",
    "revision": "efe0a3362e13771414281a02fc92e863"
  },
  {
    "url": "assets/js/27.6936ba24.js",
    "revision": "a5e73842ebbb10837b2ab75061e17fed"
  },
  {
    "url": "assets/js/28.c2806b18.js",
    "revision": "ba94d81046e16e0159f2af9260111592"
  },
  {
    "url": "assets/js/29.c1c82585.js",
    "revision": "165575a59669a191239e7d2955b8bbe6"
  },
  {
    "url": "assets/js/3.7ff304d2.js",
    "revision": "d20ad67e01ab03726126bcd4085e40bc"
  },
  {
    "url": "assets/js/30.707591ed.js",
    "revision": "f573c0021aea6836f8ec6c774708b772"
  },
  {
    "url": "assets/js/31.a40f3edf.js",
    "revision": "9e37c9053336a64607da47945c4a001c"
  },
  {
    "url": "assets/js/32.f1a33f14.js",
    "revision": "8bd7332af42e7d8cc08e0d48b43056c3"
  },
  {
    "url": "assets/js/33.f07c7a3c.js",
    "revision": "1ffdd2492bd105a82451df51d4b763ee"
  },
  {
    "url": "assets/js/34.61736b70.js",
    "revision": "26e6f85ee6bc7e4ab23750aa02f1d6b3"
  },
  {
    "url": "assets/js/35.3e9544ee.js",
    "revision": "827cf2a08b47b425279db82e6e29a81b"
  },
  {
    "url": "assets/js/4.2b09257a.js",
    "revision": "fb56156c55a64de582dc789330ab9ca6"
  },
  {
    "url": "assets/js/5.6a825523.js",
    "revision": "56576463fd42b6d533dc2eb2a0122ba9"
  },
  {
    "url": "assets/js/6.52965400.js",
    "revision": "eaac4cb541c9406ff64851b688036a25"
  },
  {
    "url": "assets/js/7.0183effd.js",
    "revision": "ff4db95cda809c968bb2e7a75016ea73"
  },
  {
    "url": "assets/js/8.bd9382c3.js",
    "revision": "7ed48d12583b84ce6f0388d481b2ac11"
  },
  {
    "url": "assets/js/9.7d961323.js",
    "revision": "edeb5431669bcc8a3ae750fbf856d337"
  },
  {
    "url": "assets/js/app.d66faa9b.js",
    "revision": "65e432605fc71b38af6468fbe0702384"
  },
  {
    "url": "banner.jpg",
    "revision": "135d68dee0086c66d01466c795e0ff3b"
  },
  {
    "url": "categories/Git命令/index.html",
    "revision": "361281af9d8dab14412c7d967d8e878d"
  },
  {
    "url": "categories/index.html",
    "revision": "fefd67028be140b5224ebafd4363a183"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "037f260cff8bf22c94135a306b02f060"
  },
  {
    "url": "categories/微信小程序/index.html",
    "revision": "22c84e50cbceb998d4db73511bc8f6f7"
  },
  {
    "url": "categories/打包工具/index.html",
    "revision": "8403f9cbacaee6081de170f3aef9843f"
  },
  {
    "url": "categories/日常生活/index.html",
    "revision": "973e1948c0fbc7438d3319560f4c3c9a"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "fdb693024bde572e1ce4908367a6be91"
  },
  {
    "url": "head.jpg",
    "revision": "a8876d2cfd547a58b3f0b1e1f0ae1b87"
  },
  {
    "url": "head.png",
    "revision": "a8876d2cfd547a58b3f0b1e1f0ae1b87"
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
    "revision": "bd78054e51fa462f059c5093854cb426"
  },
  {
    "url": "tag/GDP定位/index.html",
    "revision": "a81b9fd17d8877385f752d548025f1e1"
  },
  {
    "url": "tag/git stash/index.html",
    "revision": "29d740aef6b3c6ff81504d76a78a8c10"
  },
  {
    "url": "tag/git介绍/index.html",
    "revision": "31ff90603c18456019722caee6f8f9a5"
  },
  {
    "url": "tag/HTML Tip/index.html",
    "revision": "2a64e650a06c6266767c20910d4bf234"
  },
  {
    "url": "tag/HTML编译/index.html",
    "revision": "602b0651a68357809e869793fcbe119b"
  },
  {
    "url": "tag/index.html",
    "revision": "211053c4baa4fb0a2557e408d5cb0b63"
  },
  {
    "url": "tag/webpack学习/index.html",
    "revision": "8259dc6b81f5f85b2dcca3a116e6c24f"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "7d127abb53e3ac3d2a2c65ed7c6266f4"
  },
  {
    "url": "tag/代码调试/index.html",
    "revision": "eef0e7fb224af16feebe83790fa5af7d"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "b5a0e5f8a82d418a91dcb0ccf1f5dc51"
  },
  {
    "url": "tag/微信小程序学习/index.html",
    "revision": "67cdbb5d66301532e202e705a6daf714"
  },
  {
    "url": "tag/手机预装软件/index.html",
    "revision": "4491650d6c0e24f1487cbb2025259d8f"
  },
  {
    "url": "tag/智能手环/index.html",
    "revision": "c7c3beb3a0f8be79e32051a0abbfd973"
  },
  {
    "url": "tag/求最大数/index.html",
    "revision": "d0683cecc71c12934d51500f920260dd"
  },
  {
    "url": "tag/浏览器/index.html",
    "revision": "68ec77d0f8f5a889badf1f212b25fadd"
  },
  {
    "url": "tag/调试工具/index.html",
    "revision": "2c9bb55f41f6b5ccf80b8a902b7375a9"
  },
  {
    "url": "timeline/index.html",
    "revision": "9b348579a717ff4fc750a997b7bc0900"
  },
  {
    "url": "views/coding/2021/030101.html",
    "revision": "e069e9b85e5fe48a5f401459a4b614c0"
  },
  {
    "url": "views/dailylife/2020/090401.html",
    "revision": "924be4ff37d949b184f1678beb39fd8e"
  },
  {
    "url": "views/dailylife/2020/090402.html",
    "revision": "7abd9ea899d58717f418fc9c3e2d917c"
  },
  {
    "url": "views/dailylife/2020/091101.html",
    "revision": "2a19591713717cf2fcccfd3f6277971c"
  },
  {
    "url": "views/dailylife/2020/110201.html",
    "revision": "fa10d5d3e913b62b4ec1deab379dd18b"
  },
  {
    "url": "views/frontend/2020/101301.html",
    "revision": "0ed31035a74143d3385f051acb6ddb3d"
  },
  {
    "url": "views/frontend/2020/102301.html",
    "revision": "240d46908a2c23b27c1c8cbcf8376909"
  },
  {
    "url": "views/frontend/2020/121601.html",
    "revision": "ba91260b78f90f8471a5e0495ffa867f"
  },
  {
    "url": "views/frontend/2021/011801.html",
    "revision": "916c4459da30d23b14075f9a1ed1c708"
  },
  {
    "url": "views/frontend/2021/061801.html",
    "revision": "bc85d4a59c1f82886bda71830ce98d1d"
  },
  {
    "url": "views/git/2020/091601.html",
    "revision": "bd3796f0e7617f77a6da4608e588b225"
  },
  {
    "url": "views/git/2020/091701.html",
    "revision": "9f89fb2ce20170cf12f9610e4e5b5ddd"
  },
  {
    "url": "views/index.html",
    "revision": "7ce82f93f0aae161c99dabd11e3a5966"
  },
  {
    "url": "views/miniprogram/2020/122101.html",
    "revision": "5c9ecc3915c77bf063323a11efdebb9f"
  },
  {
    "url": "views/personalinfo/index.html",
    "revision": "319ba19063567822290a56e6d498fd8e"
  },
  {
    "url": "views/webpack/2020/090101.html",
    "revision": "609bc93207d917fcba76f781ef246d8f"
  },
  {
    "url": "views/webpack/2020/090201.html",
    "revision": "fcd0f30f3ba053225de7c81740756f4d"
  },
  {
    "url": "views/webpack/2020/090301.html",
    "revision": "89cefcc9cbe3e8e160b5b7b260bf0a0e"
  },
  {
    "url": "views/webpack/2020/090701.html",
    "revision": "2fb340c37ad2f4e09170ff8bb566afd1"
  },
  {
    "url": "views/webpack/2020/090702.html",
    "revision": "48d6b7c60d518dfbabe52027edacacd4"
  },
  {
    "url": "views/webpack/2020/090703.html",
    "revision": "5067feeaeffc317202294aef20e338bd"
  },
  {
    "url": "views/webpack/2020/091201.html",
    "revision": "937446cd343176f43b7e579e304713de"
  },
  {
    "url": "views/webpack/2020/091202.html",
    "revision": "c9e6463eb462f2df1c06cf82e7efa07a"
  },
  {
    "url": "views/webpack/2020/091501.html",
    "revision": "ca0240d51f902322292f9b878a478f10"
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
