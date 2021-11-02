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
    "revision": "0068ed5db793df0a778bd7eba1346536"
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
    "url": "assets/js/15.6bb19fe1.js",
    "revision": "9bb968e01e980ad38e565b13412f6687"
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
    "url": "assets/js/18.7fd4ea5c.js",
    "revision": "beb1a31ab950fb671420ee9899d1d24b"
  },
  {
    "url": "assets/js/19.4cf06438.js",
    "revision": "0c9e17caf0b3fe0d3d7b20cb67c6ca28"
  },
  {
    "url": "assets/js/20.2b1fec27.js",
    "revision": "919769427f23bebca2879129e243c552"
  },
  {
    "url": "assets/js/21.83a3ef2f.js",
    "revision": "c0e0ca44375c551d494b87501dc242f3"
  },
  {
    "url": "assets/js/22.a1335d5a.js",
    "revision": "b5258311eaec7ec87eaf48f1e6be3cbc"
  },
  {
    "url": "assets/js/23.6ce19fbe.js",
    "revision": "b90c98e861f73537c57c1a86a62b97cd"
  },
  {
    "url": "assets/js/24.4cd35edd.js",
    "revision": "99e3b21c121e9083006ab25df5149029"
  },
  {
    "url": "assets/js/25.f1d3b423.js",
    "revision": "9bf1743ef26a9a1515f370a87eb9b758"
  },
  {
    "url": "assets/js/26.067e1270.js",
    "revision": "a1c12ea82a7a37d0fd67c04c4d25f841"
  },
  {
    "url": "assets/js/27.3573ca28.js",
    "revision": "4dd594fe4e8b47e5c9705d342ffcab71"
  },
  {
    "url": "assets/js/28.f4c4416e.js",
    "revision": "bad2bcd5f329738e25af26e3c605fdb7"
  },
  {
    "url": "assets/js/29.f8f76e70.js",
    "revision": "7e8712a4db7ae1795f4afc6738380059"
  },
  {
    "url": "assets/js/3.7ff304d2.js",
    "revision": "d20ad67e01ab03726126bcd4085e40bc"
  },
  {
    "url": "assets/js/30.318fbbed.js",
    "revision": "211a0ce4def347b4a20c702f802fe4da"
  },
  {
    "url": "assets/js/31.112f6121.js",
    "revision": "54bcf05b9aff3387586a5e5dfa78e4d7"
  },
  {
    "url": "assets/js/32.584d78fc.js",
    "revision": "859f4735354c4cffb75e4c2c82654e63"
  },
  {
    "url": "assets/js/33.7a2675d9.js",
    "revision": "885057c2a7ad5db0280f0d628a3af1c3"
  },
  {
    "url": "assets/js/34.5fb68b6e.js",
    "revision": "c909e67a2093073d4139a70925db49ef"
  },
  {
    "url": "assets/js/35.66f4e004.js",
    "revision": "ab572ed1b982c6a305e1df11a71461dd"
  },
  {
    "url": "assets/js/36.b48b430a.js",
    "revision": "89b6acd5fa2d7427c52a73f5ee3c3168"
  },
  {
    "url": "assets/js/37.5faf3947.js",
    "revision": "24266c14ad84ec037447a33e03d79dcf"
  },
  {
    "url": "assets/js/4.bc8aa8c6.js",
    "revision": "3be515af0069b7d61c91ac020826990c"
  },
  {
    "url": "assets/js/5.92d9241b.js",
    "revision": "abc46271842597e8d492a5a2cea63c55"
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
    "url": "assets/js/9.575b6d83.js",
    "revision": "e0b63b608f399f5f2bec839e72e7f446"
  },
  {
    "url": "assets/js/app.27b048a7.js",
    "revision": "ab5c2c82833fa9583d2f5b8e728d61ed"
  },
  {
    "url": "banner.jpg",
    "revision": "135d68dee0086c66d01466c795e0ff3b"
  },
  {
    "url": "categories/Git命令/index.html",
    "revision": "502f94a5c193e77639375486bd493007"
  },
  {
    "url": "categories/index.html",
    "revision": "27d8ff7818b7cbcbc2e977e24fddc104"
  },
  {
    "url": "categories/test测试/index.html",
    "revision": "e2c8b94e32d83df45e9974d25d973253"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "0014cc5b2fa52bb2a3f00c060fdf938a"
  },
  {
    "url": "categories/微信小程序/index.html",
    "revision": "a53ffc34619003fe196a2477ba1a8cbb"
  },
  {
    "url": "categories/打包工具/index.html",
    "revision": "960bd390ca445e073d1c18d8aa834509"
  },
  {
    "url": "categories/日常生活/index.html",
    "revision": "c37c801fb9242d4080b3c99300a8ef48"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "0fb0c560a24970bac2b2561e7d1c833b"
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
    "revision": "4af5f9da6b24116cfe82a7b4246192ff"
  },
  {
    "url": "tag/GDP定位/index.html",
    "revision": "c37d198ff1c9ffd2bc446ec38b8828ab"
  },
  {
    "url": "tag/git stash/index.html",
    "revision": "c974653f0f43706e1c4542665694f1e2"
  },
  {
    "url": "tag/git介绍/index.html",
    "revision": "c0491de7b385abcebea4cc8fc7cf327e"
  },
  {
    "url": "tag/HTML Tip/index.html",
    "revision": "4e4e51c07e21b7956a29291dbf327817"
  },
  {
    "url": "tag/HTML编译/index.html",
    "revision": "4d582fd32050b2449dce03f13490c272"
  },
  {
    "url": "tag/index.html",
    "revision": "9ed3121a8067c2ae3837fb3634970847"
  },
  {
    "url": "tag/test/index.html",
    "revision": "cca6e12f4dcbd03ee5fcdfc4d47a6177"
  },
  {
    "url": "tag/webpack学习/index.html",
    "revision": "5430d57c74374d990ba1ba7478558bd4"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "157cb60d8b640b77a9e827069c1d2866"
  },
  {
    "url": "tag/代码调试/index.html",
    "revision": "b50049b4e1fa8a4b55df01a81cd0f47c"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "29ec7e623577e0d01f3e549ae17cc5c8"
  },
  {
    "url": "tag/微信小程序学习/index.html",
    "revision": "b30eb020d09e36f3e5bead8dfc8dcc21"
  },
  {
    "url": "tag/手机预装软件/index.html",
    "revision": "8eba31f063fb9ee0f312c45718c4b4b3"
  },
  {
    "url": "tag/智能手环/index.html",
    "revision": "55cffebab71609e427e57bc83a5ea0a3"
  },
  {
    "url": "tag/求最大数/index.html",
    "revision": "d55259ffb9e8afecda712c2dcf94af10"
  },
  {
    "url": "tag/浏览器/index.html",
    "revision": "942f08f1e0ad4d28de6b91dbe7a3f1d4"
  },
  {
    "url": "tag/调试工具/index.html",
    "revision": "0ee2d0713ed2d7076de18b3b1fe07c77"
  },
  {
    "url": "tag/重定向/index.html",
    "revision": "9f1e11c63fbb5d1a35d94e42ec7ee734"
  },
  {
    "url": "timeline/index.html",
    "revision": "c9283ef02e1e474c17217966e6ca451c"
  },
  {
    "url": "views/coding/2021/030101.html",
    "revision": "5f8e0169db89f080c52f90cdd3545ddb"
  },
  {
    "url": "views/dailylife/2020/090401.html",
    "revision": "5dc5b7ebfe2733ab551886219c2dcc06"
  },
  {
    "url": "views/dailylife/2020/090402.html",
    "revision": "9db8031204776dd399fe968a57da9070"
  },
  {
    "url": "views/dailylife/2020/091101.html",
    "revision": "bc9ce45aa4fc56e393222f865e25450f"
  },
  {
    "url": "views/dailylife/2020/110201.html",
    "revision": "b0c89b54a03f913eff59d71ff0bed934"
  },
  {
    "url": "views/frontend/2020/101301.html",
    "revision": "3ee49759ccbce3814495289d008610e3"
  },
  {
    "url": "views/frontend/2020/102301.html",
    "revision": "ee685804bb2c31851a4b4bbb666dc3cd"
  },
  {
    "url": "views/frontend/2020/121601.html",
    "revision": "b6dd98894107ac8a523a817e04453172"
  },
  {
    "url": "views/frontend/2021/011801.html",
    "revision": "4375632a03118330592c5b255818ecaf"
  },
  {
    "url": "views/frontend/2021/061801.html",
    "revision": "e4f7f394d759e7dc9a9d526c8242efc1"
  },
  {
    "url": "views/frontend/2021/110201.html",
    "revision": "18671541fa63e0ee563bb71e49e23aac"
  },
  {
    "url": "views/git/2020/091601.html",
    "revision": "45aa8b63cbb0e3e6bcd851d25d5f95c6"
  },
  {
    "url": "views/git/2020/091701.html",
    "revision": "ee2a60a3209faeeeb68b4ddb6c7b8171"
  },
  {
    "url": "views/index.html",
    "revision": "7d3e3efabd9317e343fe1bd970f7bfee"
  },
  {
    "url": "views/miniprogram/2020/122101.html",
    "revision": "d7ca0f81a91ec64ed8167a7e3160170e"
  },
  {
    "url": "views/personalinfo/index.html",
    "revision": "a09ed2a3be7d93c798e954691189737e"
  },
  {
    "url": "views/test/test.html",
    "revision": "cc849acef9b079e04443e8efa1d80b6e"
  },
  {
    "url": "views/webpack/2020/090101.html",
    "revision": "2168b95c4a10089bda3c4bc5f48b270f"
  },
  {
    "url": "views/webpack/2020/090201.html",
    "revision": "8417de2a8e65c2cf891041556804f605"
  },
  {
    "url": "views/webpack/2020/090301.html",
    "revision": "27c5e0314487dbad6205b159a90d0014"
  },
  {
    "url": "views/webpack/2020/090701.html",
    "revision": "448eaba6d887be4119aa5ec2ae1c9018"
  },
  {
    "url": "views/webpack/2020/090702.html",
    "revision": "34858b056788e4f20fbfffb5d69ca57f"
  },
  {
    "url": "views/webpack/2020/090703.html",
    "revision": "69fd915388574afd24cb2c47ba9b2944"
  },
  {
    "url": "views/webpack/2020/091201.html",
    "revision": "35fb02714a87f16fdab59743b40c9239"
  },
  {
    "url": "views/webpack/2020/091202.html",
    "revision": "e67cd45c61c5987898305d7517f06e8a"
  },
  {
    "url": "views/webpack/2020/091501.html",
    "revision": "6a3f30b51622f3bb4af1f53a15b25291"
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
