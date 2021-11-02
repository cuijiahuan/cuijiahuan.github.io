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
    "revision": "b70f62abd5d54bd50b141a8413caff44"
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
    "url": "assets/js/12.a8a8f519.js",
    "revision": "b4cef415e2de32fefa28027b113528c1"
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
    "url": "assets/js/15.8ae5102e.js",
    "revision": "a754742df4e766744fc8b0611a14e2c0"
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
    "url": "assets/js/18.e7622adc.js",
    "revision": "1ea504098d36c09651f861c933adb565"
  },
  {
    "url": "assets/js/19.967e4670.js",
    "revision": "3a202c2bf2c7b5525c11525a6e6a9dea"
  },
  {
    "url": "assets/js/20.f0a3082c.js",
    "revision": "dae59e270fb954bdb72b388a22cb9795"
  },
  {
    "url": "assets/js/21.2ac8ddb2.js",
    "revision": "d63538e42f44693f7b1dc250412ca686"
  },
  {
    "url": "assets/js/22.9aa0156d.js",
    "revision": "cb21f2f1b8a5e63f68387cbe2638d129"
  },
  {
    "url": "assets/js/23.90dabd98.js",
    "revision": "69ed3e925fd1651cb734ebcaa7d69f26"
  },
  {
    "url": "assets/js/24.560376d5.js",
    "revision": "1abffba3d3ad4f6fc3c77f59ec3c1aa8"
  },
  {
    "url": "assets/js/25.bf9c6087.js",
    "revision": "1d4ad7c4d932958095469a9b0130804a"
  },
  {
    "url": "assets/js/26.5c40beef.js",
    "revision": "dd0e0d91c8ca82b9e790af8117e39a8b"
  },
  {
    "url": "assets/js/27.3573ca28.js",
    "revision": "4dd594fe4e8b47e5c9705d342ffcab71"
  },
  {
    "url": "assets/js/28.f7cdea6b.js",
    "revision": "25b69b453dbb03e6fdcda8e3660a57e1"
  },
  {
    "url": "assets/js/29.c2417a2c.js",
    "revision": "ad6da5bbae32209fe11949ded1514205"
  },
  {
    "url": "assets/js/3.7ff304d2.js",
    "revision": "d20ad67e01ab03726126bcd4085e40bc"
  },
  {
    "url": "assets/js/30.7c683465.js",
    "revision": "0c5c89309486bd1e6db03a1e4abed94a"
  },
  {
    "url": "assets/js/31.cc93ed04.js",
    "revision": "0e7e80aa356bd2cbc1f0e3489b6e4c2e"
  },
  {
    "url": "assets/js/32.bb7e1736.js",
    "revision": "8c083c8ca7242ab20c21efbae4f27a83"
  },
  {
    "url": "assets/js/33.f3794194.js",
    "revision": "8e3f956f802baf50249c91a4dd77740c"
  },
  {
    "url": "assets/js/34.45445b53.js",
    "revision": "8a126c79cfe85b1c88c5fafcafe6e175"
  },
  {
    "url": "assets/js/35.e343a6d0.js",
    "revision": "493ada4636db91eee19b39dbeaacc4cb"
  },
  {
    "url": "assets/js/36.5e5ebf3f.js",
    "revision": "37389ed1e6114ccb91de0447fa1e312c"
  },
  {
    "url": "assets/js/37.701e536e.js",
    "revision": "930ea5d037b903bdbb7ec9733ce81ba4"
  },
  {
    "url": "assets/js/4.33fa8890.js",
    "revision": "83b0bcb4a0ecf1edc207088a15a87bd6"
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
    "url": "assets/js/9.5e3417d5.js",
    "revision": "95bec0e72a85cc3c53ca0d4a46dac0cf"
  },
  {
    "url": "assets/js/app.d6cea066.js",
    "revision": "2e2039e4ac37441b451df2c490a88835"
  },
  {
    "url": "banner.jpg",
    "revision": "135d68dee0086c66d01466c795e0ff3b"
  },
  {
    "url": "categories/Git命令/index.html",
    "revision": "1e41bce3ce2a0add56ac12a678ab4362"
  },
  {
    "url": "categories/index.html",
    "revision": "ae564a49bca469aea95fcb56bfeeb0ab"
  },
  {
    "url": "categories/test测试/index.html",
    "revision": "8e0e16f3b90cecb6ee5b1a38924f6c2e"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "aa93f2e87315a4347d64549e396af339"
  },
  {
    "url": "categories/微信小程序/index.html",
    "revision": "ae86dc4c5042dd21d81a69902a1a803e"
  },
  {
    "url": "categories/打包工具/index.html",
    "revision": "fa3abeb86a5d218c51db3269003ad301"
  },
  {
    "url": "categories/日常生活/index.html",
    "revision": "59da38fde13be19f7c40e4ade6d77c06"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "326c788d4c1f1fd469f856964e9ea469"
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
    "revision": "7d4f3309e625706fa8218a637ddba986"
  },
  {
    "url": "tag/GDP定位/index.html",
    "revision": "b6a5ee7896416a03314c6a07fd6345cb"
  },
  {
    "url": "tag/git stash/index.html",
    "revision": "8a55524c5c21d489b3bf5f9b43f7a056"
  },
  {
    "url": "tag/git介绍/index.html",
    "revision": "8fb2f3a7280fb19ad0f9537705265a19"
  },
  {
    "url": "tag/HTML Tip/index.html",
    "revision": "a51a5bb58d0e907920402489b3f6973a"
  },
  {
    "url": "tag/HTML编译/index.html",
    "revision": "2b841e2310df4dcebae0bb124a9d65ce"
  },
  {
    "url": "tag/index.html",
    "revision": "3c7a92e3c64a01abbd10b5af276678fe"
  },
  {
    "url": "tag/test/index.html",
    "revision": "bc95ff2a10a24024bd3e95cbc3f05033"
  },
  {
    "url": "tag/webpack学习/index.html",
    "revision": "86b80dafbfdc42bbf5699a22355cb8bb"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "3a848c4ecca33e9df0395bdeecc786f2"
  },
  {
    "url": "tag/代码调试/index.html",
    "revision": "6e6da03eb8126ba13019636711411b56"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "0b2d263c719aa39b77f3dfa703f95a20"
  },
  {
    "url": "tag/微信小程序学习/index.html",
    "revision": "2a853ad172c664104a0d77a41d4bda84"
  },
  {
    "url": "tag/手机预装软件/index.html",
    "revision": "4b7be0f5a1ab650bf96a300c6f02d0d0"
  },
  {
    "url": "tag/智能手环/index.html",
    "revision": "d8823c10b8c5bf7bf8b0ff9fc2925ccc"
  },
  {
    "url": "tag/求最大数/index.html",
    "revision": "01edf9c7eb42b14276fe18847676495e"
  },
  {
    "url": "tag/浏览器/index.html",
    "revision": "beeba044c7411e187a04a08a4bb702db"
  },
  {
    "url": "tag/调试工具/index.html",
    "revision": "8c76e1078e2ebc39ee20eba72e4b0a80"
  },
  {
    "url": "tag/重定向/index.html",
    "revision": "7fbf3520c2f97321e9206eb8ef57fd99"
  },
  {
    "url": "timeline/index.html",
    "revision": "10eb3dc644b298f3c3ded03bd07ec8d4"
  },
  {
    "url": "views/coding/2021/030101.html",
    "revision": "4171af6b91a16ec402505099cfc2385d"
  },
  {
    "url": "views/dailylife/2020/090401.html",
    "revision": "950b81f9df0526274e2f46343260738f"
  },
  {
    "url": "views/dailylife/2020/090402.html",
    "revision": "3b8e084dfe3b0fe27a9caabeebf1d729"
  },
  {
    "url": "views/dailylife/2020/091101.html",
    "revision": "9ad732adaada52dc6188ab6b8d63dbb3"
  },
  {
    "url": "views/dailylife/2020/110201.html",
    "revision": "7b93aa9b1f35ed4a1de33cccad1dec17"
  },
  {
    "url": "views/frontend/2020/101301.html",
    "revision": "5824dd5845fb9b548f6c022a2dc5dadf"
  },
  {
    "url": "views/frontend/2020/102301.html",
    "revision": "b27b8d928cd3419ba5c46715df47fabe"
  },
  {
    "url": "views/frontend/2020/121601.html",
    "revision": "dc47f76aebfbce78d51ccecce72f6631"
  },
  {
    "url": "views/frontend/2021/011801.html",
    "revision": "7d097823d6aaae8e32609f00e804eda6"
  },
  {
    "url": "views/frontend/2021/061801.html",
    "revision": "3a08f97242e9dc58cda5433e32e99947"
  },
  {
    "url": "views/frontend/2021/110201.html",
    "revision": "b50669918708be4088378bb51df57cfa"
  },
  {
    "url": "views/git/2020/091601.html",
    "revision": "cce49cda04ebada508ce489e3d619ed3"
  },
  {
    "url": "views/git/2020/091701.html",
    "revision": "604bad2725d66a0a48e10ef523efef62"
  },
  {
    "url": "views/index.html",
    "revision": "195eaf298454bbea3e9d98b0211bcf21"
  },
  {
    "url": "views/miniprogram/2020/122101.html",
    "revision": "03bb0927339bbd3a4833464e6c347ec3"
  },
  {
    "url": "views/personalinfo/index.html",
    "revision": "1efc571f8a32c4bbaa2764881cb21a99"
  },
  {
    "url": "views/test/test.html",
    "revision": "0725f89304766d67ff1b9f05be597484"
  },
  {
    "url": "views/webpack/2020/090101.html",
    "revision": "a89ad422ce5a54f9b918bcab7aa75de8"
  },
  {
    "url": "views/webpack/2020/090201.html",
    "revision": "2e13b2da2502fb30efc6001a17ce532d"
  },
  {
    "url": "views/webpack/2020/090301.html",
    "revision": "3ad8d857b4642be52b6e8b9d3dad94c6"
  },
  {
    "url": "views/webpack/2020/090701.html",
    "revision": "00cbbb738a87ed4909a58a819b5d381c"
  },
  {
    "url": "views/webpack/2020/090702.html",
    "revision": "bac1644f9e88b7ead1c1d934da4930ee"
  },
  {
    "url": "views/webpack/2020/090703.html",
    "revision": "1c2004d00c7211c977e9d88e78b7ccf0"
  },
  {
    "url": "views/webpack/2020/091201.html",
    "revision": "cb8645c07655d4137a6c84bbd81d59c6"
  },
  {
    "url": "views/webpack/2020/091202.html",
    "revision": "c57e8a7b740160d5ddbb9349a98c4800"
  },
  {
    "url": "views/webpack/2020/091501.html",
    "revision": "6e8e3e78097c8e006ba1040e5ac1a302"
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
