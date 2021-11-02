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
    "revision": "d44d9d589929b859d57d44d78bf6891f"
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
    "url": "assets/js/14.9e6c18c4.js",
    "revision": "0edaa3309190ff8a3b1417c32b3f7ee2"
  },
  {
    "url": "assets/js/15.37d097ff.js",
    "revision": "4534693cf128f92479975443f15d4422"
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
    "url": "assets/js/18.63e751c7.js",
    "revision": "e2d8ef2370f0c0db960c1acdffff5db1"
  },
  {
    "url": "assets/js/19.967e4670.js",
    "revision": "3a202c2bf2c7b5525c11525a6e6a9dea"
  },
  {
    "url": "assets/js/20.f384be29.js",
    "revision": "54eb6beeb934e85379a862d0f50f54da"
  },
  {
    "url": "assets/js/21.e46c6931.js",
    "revision": "6044cae0f8bda385dfc97aa948043e2b"
  },
  {
    "url": "assets/js/22.a1ef9da1.js",
    "revision": "6aa6a82d93f0bf86154bf0dc3cfbd2d3"
  },
  {
    "url": "assets/js/23.ef92df17.js",
    "revision": "8d384d67137d4aee9ba4cdc6f04946f7"
  },
  {
    "url": "assets/js/24.9f78e4b2.js",
    "revision": "fa52e1ec740ef23143b5325287380bc1"
  },
  {
    "url": "assets/js/25.f1d3b423.js",
    "revision": "9bf1743ef26a9a1515f370a87eb9b758"
  },
  {
    "url": "assets/js/26.5c40beef.js",
    "revision": "dd0e0d91c8ca82b9e790af8117e39a8b"
  },
  {
    "url": "assets/js/27.ba82640d.js",
    "revision": "0ed3e70ebc9454608c172430b78cebdf"
  },
  {
    "url": "assets/js/28.f4c4416e.js",
    "revision": "bad2bcd5f329738e25af26e3c605fdb7"
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
    "url": "assets/js/30.abdb685c.js",
    "revision": "2b414540f1f8b9492c67bccc7eacb0ae"
  },
  {
    "url": "assets/js/31.112f6121.js",
    "revision": "54bcf05b9aff3387586a5e5dfa78e4d7"
  },
  {
    "url": "assets/js/32.28d87e06.js",
    "revision": "d60b9397d5c5afb1790447eb8504af81"
  },
  {
    "url": "assets/js/33.bc77912a.js",
    "revision": "f6111c12a2e5addacdab831565cb9ade"
  },
  {
    "url": "assets/js/34.12d0b838.js",
    "revision": "8a8abd1371b411e10a962fb01e902999"
  },
  {
    "url": "assets/js/35.66f4e004.js",
    "revision": "ab572ed1b982c6a305e1df11a71461dd"
  },
  {
    "url": "assets/js/36.e34d30aa.js",
    "revision": "2c0c11723a6b37146d7c6dcd26632d98"
  },
  {
    "url": "assets/js/37.701e536e.js",
    "revision": "930ea5d037b903bdbb7ec9733ce81ba4"
  },
  {
    "url": "assets/js/4.2b09257a.js",
    "revision": "fb56156c55a64de582dc789330ab9ca6"
  },
  {
    "url": "assets/js/5.dde7ce9d.js",
    "revision": "3d6e4813f96048dc4e9e1227ae990532"
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
    "url": "assets/js/app.8ea1c6d3.js",
    "revision": "61161227c559cdd791fedc53700329a0"
  },
  {
    "url": "banner.jpg",
    "revision": "135d68dee0086c66d01466c795e0ff3b"
  },
  {
    "url": "categories/Git命令/index.html",
    "revision": "cb6f18f81afabfdeaacaf859f70a7459"
  },
  {
    "url": "categories/index.html",
    "revision": "e5b84066f5017d1b075e69e4b15cd4fd"
  },
  {
    "url": "categories/test测试/index.html",
    "revision": "c62b991fac6b501168a932f00cc30130"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "95afca3fbbb03643346d0636d98a4a16"
  },
  {
    "url": "categories/微信小程序/index.html",
    "revision": "6c7b9470d23ac325659d65e06e877820"
  },
  {
    "url": "categories/打包工具/index.html",
    "revision": "3d4cad27ca40431e3b243767c720697c"
  },
  {
    "url": "categories/日常生活/index.html",
    "revision": "b591538aa254aa672a59324498af50c8"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "edaf168dd3ff21b53b0f7fe508c57378"
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
    "revision": "fd5f2a1bb67518ed15b81034fa2a33dd"
  },
  {
    "url": "tag/GDP定位/index.html",
    "revision": "20237ef78f75696a00fb04d1c5578e20"
  },
  {
    "url": "tag/git stash/index.html",
    "revision": "2c9392a3ef79a06314ecb483d259a453"
  },
  {
    "url": "tag/git介绍/index.html",
    "revision": "90146b485281c56411d1b69eeb11571e"
  },
  {
    "url": "tag/HTML Tip/index.html",
    "revision": "53f7ea5c9969364c8f06cf0079f3606e"
  },
  {
    "url": "tag/HTML编译/index.html",
    "revision": "72bffbe4215eeb3c21e275a4c6962ace"
  },
  {
    "url": "tag/index.html",
    "revision": "cc8a16a846fc8304225a0637430ec576"
  },
  {
    "url": "tag/test/index.html",
    "revision": "7baf37d2cac6e10e0881cc976dcfb423"
  },
  {
    "url": "tag/webpack学习/index.html",
    "revision": "d9e730aae8551977ae4e6ab8457f990a"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "bf843f549a843a7e08061568c221599e"
  },
  {
    "url": "tag/代码调试/index.html",
    "revision": "ac91620814d86b879baec952d82bac39"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "427bad00214def410e0f6f97ed3eae30"
  },
  {
    "url": "tag/微信小程序学习/index.html",
    "revision": "123797b1399593fa13426ee473cd1d7e"
  },
  {
    "url": "tag/手机预装软件/index.html",
    "revision": "2b8fb13cded05bdb3b56a902f51a1d34"
  },
  {
    "url": "tag/智能手环/index.html",
    "revision": "17423fa09524b53960d81dbf67d9e360"
  },
  {
    "url": "tag/求最大数/index.html",
    "revision": "fc9a13dbab6092507ccc8c230732a751"
  },
  {
    "url": "tag/浏览器/index.html",
    "revision": "6f4610e9f3f6ecd4bcdcaab51c517571"
  },
  {
    "url": "tag/调试工具/index.html",
    "revision": "9c663ab26c327e4d62613e2de404942e"
  },
  {
    "url": "tag/重定向/index.html",
    "revision": "47940ef24906a47499db773674ea8c5a"
  },
  {
    "url": "timeline/index.html",
    "revision": "78dd700ccb036765caeb4437e42b0555"
  },
  {
    "url": "views/coding/2021/030101.html",
    "revision": "154b30dd44e0200302c3cd36a7ee7d07"
  },
  {
    "url": "views/dailylife/2020/090401.html",
    "revision": "1536679884922f46ef597b22c80fffa4"
  },
  {
    "url": "views/dailylife/2020/090402.html",
    "revision": "88b01f7e8fd28f3bcdb67e111cee30b2"
  },
  {
    "url": "views/dailylife/2020/091101.html",
    "revision": "c54f75a68739430cc1adebaf73c7b60b"
  },
  {
    "url": "views/dailylife/2020/110201.html",
    "revision": "4ae4b94884b0dc7d40cec445f0af42f4"
  },
  {
    "url": "views/frontend/2020/101301.html",
    "revision": "db0e6d8daa6501a00466ea56671ca7ed"
  },
  {
    "url": "views/frontend/2020/102301.html",
    "revision": "6312ce83b037ac4244601dd4410259ad"
  },
  {
    "url": "views/frontend/2020/121601.html",
    "revision": "5d2d921b37c05adaad7b60b47d5513ee"
  },
  {
    "url": "views/frontend/2021/011801.html",
    "revision": "d108c0fabca659f7cd921e72ea8d4725"
  },
  {
    "url": "views/frontend/2021/061801.html",
    "revision": "8aa9c5e7fffd03065032e4827eb6a3bf"
  },
  {
    "url": "views/frontend/2021/110201.html",
    "revision": "2b0ce689a958ce0ad669a955c09d1762"
  },
  {
    "url": "views/git/2020/091601.html",
    "revision": "3a49782e763c788e2ac343c63093f89f"
  },
  {
    "url": "views/git/2020/091701.html",
    "revision": "69552bf175caff341464c90c8a52f845"
  },
  {
    "url": "views/index.html",
    "revision": "bdcd8b3e49f8dab6343895e3db415c11"
  },
  {
    "url": "views/miniprogram/2020/122101.html",
    "revision": "0e5b3d340b30cb5e50c6a91b1fbbbe83"
  },
  {
    "url": "views/personalinfo/index.html",
    "revision": "1f8f9f0256ba2e2da5c4077b12c6ce6a"
  },
  {
    "url": "views/test/test.html",
    "revision": "23526f55cdbccc8e088bc78f6c4c8ad7"
  },
  {
    "url": "views/webpack/2020/090101.html",
    "revision": "b34e0774567ed88038e7a167c13fa810"
  },
  {
    "url": "views/webpack/2020/090201.html",
    "revision": "bd3ff1b3c9bf8c04a46a91b06c7f17cc"
  },
  {
    "url": "views/webpack/2020/090301.html",
    "revision": "8132d1f7d7db126840f764e8d2c57547"
  },
  {
    "url": "views/webpack/2020/090701.html",
    "revision": "05718ea9b4967e9837a9246eeedd25d6"
  },
  {
    "url": "views/webpack/2020/090702.html",
    "revision": "5da654fb599440b93668d1d73b22105c"
  },
  {
    "url": "views/webpack/2020/090703.html",
    "revision": "7112cd5b241f383533bc351216137f0d"
  },
  {
    "url": "views/webpack/2020/091201.html",
    "revision": "51e75aced7ef98947ddb4c4d9fdcd8c3"
  },
  {
    "url": "views/webpack/2020/091202.html",
    "revision": "52f6449a6efafcf528a163ee2f691e47"
  },
  {
    "url": "views/webpack/2020/091501.html",
    "revision": "a1b4227999983e5b7dc2f3a18cc89c11"
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
