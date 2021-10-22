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
    "revision": "4ccff00374c6ce99283973ee216beb5f"
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
    "url": "assets/js/14.9e6c18c4.js",
    "revision": "0edaa3309190ff8a3b1417c32b3f7ee2"
  },
  {
    "url": "assets/js/15.c3c986e8.js",
    "revision": "fb9813c8f389ddee36aeb01da2443f2e"
  },
  {
    "url": "assets/js/16.333cd2c5.js",
    "revision": "747182795dd33acb4e2f4c7858371cd0"
  },
  {
    "url": "assets/js/17.9caeadf8.js",
    "revision": "3c80a6b78992c332ff839c0d61170f65"
  },
  {
    "url": "assets/js/18.0ac68d3e.js",
    "revision": "d8f5dc49bb9b09287340faf53af6b567"
  },
  {
    "url": "assets/js/19.ec543b2d.js",
    "revision": "f4f347af65cefa35211d7ece302ad229"
  },
  {
    "url": "assets/js/20.236406c1.js",
    "revision": "cc654ab4039f80fcd6b65b77520faa36"
  },
  {
    "url": "assets/js/21.2ac8ddb2.js",
    "revision": "d63538e42f44693f7b1dc250412ca686"
  },
  {
    "url": "assets/js/22.a1335d5a.js",
    "revision": "b5258311eaec7ec87eaf48f1e6be3cbc"
  },
  {
    "url": "assets/js/23.4eb8b7b1.js",
    "revision": "808e51c34b7ddd9b353c5d2391da3c7f"
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
    "url": "assets/js/28.b9809bfb.js",
    "revision": "254f413cfe2d831447ad590a964cd5d8"
  },
  {
    "url": "assets/js/29.0b86f3d2.js",
    "revision": "0ff98cafe1b5d9174a04d478a56668ea"
  },
  {
    "url": "assets/js/3.7ff304d2.js",
    "revision": "d20ad67e01ab03726126bcd4085e40bc"
  },
  {
    "url": "assets/js/30.72b8447b.js",
    "revision": "b0aafaf626d5f2f9c7936b576ef3d0d9"
  },
  {
    "url": "assets/js/31.93ad57bd.js",
    "revision": "6d126b8f902c9a26c204e002f84777ac"
  },
  {
    "url": "assets/js/32.715c6ad7.js",
    "revision": "85abc94f241d42786badb0f832c19112"
  },
  {
    "url": "assets/js/33.d7e72e26.js",
    "revision": "4f39d340b4ca0aea940a1a999ba72a14"
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
    "url": "assets/js/5.02e69fd7.js",
    "revision": "6ed262ba72e9784b49a7f655cc0fed69"
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
    "url": "assets/js/9.2c2e0034.js",
    "revision": "e44898ad134571e9122cf3437f3961ec"
  },
  {
    "url": "assets/js/app.aea65eb9.js",
    "revision": "1c173adc5612a8e1b638523f4c3076d4"
  },
  {
    "url": "banner.jpg",
    "revision": "135d68dee0086c66d01466c795e0ff3b"
  },
  {
    "url": "categories/Git命令/index.html",
    "revision": "4fe90384eb1a886e0051a2785ee7f29b"
  },
  {
    "url": "categories/index.html",
    "revision": "f9cc0b00b7abcf69af213e803d632e95"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "7e2d50d5f5a0716cad4a8b9c32a0a9a1"
  },
  {
    "url": "categories/微信小程序/index.html",
    "revision": "ac14e3de8829df0d6c62dfa2ab7b6015"
  },
  {
    "url": "categories/打包工具/index.html",
    "revision": "0a4e78b021f8ae33afa308d341923882"
  },
  {
    "url": "categories/日常生活/index.html",
    "revision": "70e77d9e0c77431cf9c035b9985ef5bb"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "e83469fed2e96884e61ab78e8fae38ca"
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
    "revision": "8877369048e5a19e23e88484a62ab50d"
  },
  {
    "url": "tag/GDP定位/index.html",
    "revision": "b7f565427e395776e37144952b1e9dc3"
  },
  {
    "url": "tag/git stash/index.html",
    "revision": "6c158cab8cefdfeb8b56522c2cfd9b48"
  },
  {
    "url": "tag/git介绍/index.html",
    "revision": "d637988cd7c07d131778ea0efd05d83a"
  },
  {
    "url": "tag/HTML Tip/index.html",
    "revision": "61da759fdf803177b33327e9dfce2687"
  },
  {
    "url": "tag/HTML编译/index.html",
    "revision": "d5b7130e40a81bdae4b523a25bd03849"
  },
  {
    "url": "tag/index.html",
    "revision": "6b21a1c20ffd9e087cabb87a79b63fa2"
  },
  {
    "url": "tag/webpack学习/index.html",
    "revision": "1a7a3ac886a3bba461262cd6bad1d070"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "7ee6dd3f313b762301b81792efb5c701"
  },
  {
    "url": "tag/代码调试/index.html",
    "revision": "3a9f8d22cd62133df8012eae891eadcb"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "0c3081c6c1ac5a541056391588f7fbf9"
  },
  {
    "url": "tag/微信小程序学习/index.html",
    "revision": "85e3b432532112c131c66bcbf3ea31e0"
  },
  {
    "url": "tag/手机预装软件/index.html",
    "revision": "b393cea656b7195a90fac19dceb8eeb5"
  },
  {
    "url": "tag/智能手环/index.html",
    "revision": "1932cf9c9c18fd8436b98650ed8d5a93"
  },
  {
    "url": "tag/求最大数/index.html",
    "revision": "0a7c29149ca8b965a2a85f10c4f8239d"
  },
  {
    "url": "tag/浏览器/index.html",
    "revision": "f2db2abde1b8822f183dfb733fdf3365"
  },
  {
    "url": "tag/调试工具/index.html",
    "revision": "6077d9131f840b23080872d3340e576a"
  },
  {
    "url": "timeline/index.html",
    "revision": "a1a8273f9f464cf61bc7e73230ac8a0e"
  },
  {
    "url": "views/coding/2021/030101.html",
    "revision": "64ddc476e6a65673675c29dd51c19ca2"
  },
  {
    "url": "views/dailylife/2020/090401.html",
    "revision": "a1f554c42fd81d0b771499fa3ca0ea48"
  },
  {
    "url": "views/dailylife/2020/090402.html",
    "revision": "801bb48e543460153b75734eac87c965"
  },
  {
    "url": "views/dailylife/2020/091101.html",
    "revision": "589e274784ba536f8467cdc6f13dffc8"
  },
  {
    "url": "views/dailylife/2020/110201.html",
    "revision": "c4891f5eadf6e7898f4624564a0d8b4a"
  },
  {
    "url": "views/frontend/2020/101301.html",
    "revision": "e3c78d1c3859c52b2febff0efcd1982d"
  },
  {
    "url": "views/frontend/2020/102301.html",
    "revision": "babfa1977e8ab3d1895ae482e41efbef"
  },
  {
    "url": "views/frontend/2020/121601.html",
    "revision": "10c321b13f905aae84f7661093e04bb7"
  },
  {
    "url": "views/frontend/2021/011801.html",
    "revision": "d46973142029a57aee71746b6d126c66"
  },
  {
    "url": "views/frontend/2021/061801.html",
    "revision": "b81faaa92492300ecc4468984c52f8ad"
  },
  {
    "url": "views/git/2020/091601.html",
    "revision": "5b5565480af65b6473da0123332624f0"
  },
  {
    "url": "views/git/2020/091701.html",
    "revision": "71f1f05d13e574906bce34b64b951d98"
  },
  {
    "url": "views/index.html",
    "revision": "f896477f8b13b660d4c8c321d2e2d212"
  },
  {
    "url": "views/miniprogram/2020/122101.html",
    "revision": "f8a1ab31aa93c61f7bbf9db5de8ec97f"
  },
  {
    "url": "views/personalinfo/index.html",
    "revision": "22500b195a10163a22d33ba19a9ee4c6"
  },
  {
    "url": "views/webpack/2020/090101.html",
    "revision": "c982d586a1ba21741b0e23d13b77244f"
  },
  {
    "url": "views/webpack/2020/090201.html",
    "revision": "de5829b8eff8ee23cfc02411cc5d1528"
  },
  {
    "url": "views/webpack/2020/090301.html",
    "revision": "1e12e6c328b1049d3796dd2af53251b7"
  },
  {
    "url": "views/webpack/2020/090701.html",
    "revision": "4bf43406a60abedb7203857c6360d84d"
  },
  {
    "url": "views/webpack/2020/090702.html",
    "revision": "5d176070e30d1d38b78247886e5ed88b"
  },
  {
    "url": "views/webpack/2020/090703.html",
    "revision": "f93e88686fb65c2bfed38a9fb090442f"
  },
  {
    "url": "views/webpack/2020/091201.html",
    "revision": "dc8c4dea21291270d7b6be381c37baf9"
  },
  {
    "url": "views/webpack/2020/091202.html",
    "revision": "a41b96004b7c1c46df3e12cd2ea17a04"
  },
  {
    "url": "views/webpack/2020/091501.html",
    "revision": "a7cd9c12cbcee1dbb8af132aa129fd1b"
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
