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
    "revision": "00ba585e3d8c34a252a0c2a261be3f45"
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
    "url": "assets/js/16.af256c67.js",
    "revision": "1c654e4585a6a52f7257fadc1b950e1a"
  },
  {
    "url": "assets/js/17.f20c921f.js",
    "revision": "b9ea5324c4989c98c0129b7d51d80934"
  },
  {
    "url": "assets/js/18.645d59a5.js",
    "revision": "9f85426f609cc69eb6cd8d3180e4e98d"
  },
  {
    "url": "assets/js/19.2aeacac7.js",
    "revision": "ef75a0a490edb32a95a9ba5052f84430"
  },
  {
    "url": "assets/js/20.badd3459.js",
    "revision": "6a1e8029bcd550fbe6f35258964d0cd8"
  },
  {
    "url": "assets/js/21.df774d7a.js",
    "revision": "02af63b5df2f58d680fd6e4ecd89c3c2"
  },
  {
    "url": "assets/js/22.afaca75d.js",
    "revision": "6ca880fe54dd9e50332adc45ae1fa9cb"
  },
  {
    "url": "assets/js/23.6d3be5f2.js",
    "revision": "05dfb1f1d7aa4ca795df99d6719a482b"
  },
  {
    "url": "assets/js/24.072be27c.js",
    "revision": "c79379d90f47923bdef6353f1e1adf37"
  },
  {
    "url": "assets/js/25.e5a25fca.js",
    "revision": "ac26dce0243cbbee6893e50001ce9ea7"
  },
  {
    "url": "assets/js/26.45b7f78d.js",
    "revision": "98506872b59c4a3990fdd6aeda1cf258"
  },
  {
    "url": "assets/js/27.5f1a1d20.js",
    "revision": "a9050d75b381568a0eb60bbf18cc3bd6"
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
    "url": "assets/js/7.ab3b0bde.js",
    "revision": "4f312e2e417ad51a872bfe3ff4211b1f"
  },
  {
    "url": "assets/js/8.881d4737.js",
    "revision": "e598cb77171abf7fa078715c0a6e9ccc"
  },
  {
    "url": "assets/js/9.4bfca71a.js",
    "revision": "df0292f3eada3ccbe450c2c8084fd152"
  },
  {
    "url": "assets/js/app.798cd86a.js",
    "revision": "e6fbb34ed5d08030d5a7aa7eefc396a8"
  },
  {
    "url": "banner.jpg",
    "revision": "efb10cca6ee76d6884857d80c8ab2020"
  },
  {
    "url": "categories/Git命令/index.html",
    "revision": "44ea3793c7abbe5234ad0402b2fb4da0"
  },
  {
    "url": "categories/index.html",
    "revision": "993c09c80d906ae384a1803faebc1a5f"
  },
  {
    "url": "categories/webpack/index.html",
    "revision": "cd69887450a3ffa5852a8dfbe0132297"
  },
  {
    "url": "categories/前端问题/index.html",
    "revision": "cb4756b45252bb92ef0702fb332b6719"
  },
  {
    "url": "categories/日常生活/index.html",
    "revision": "d8df08b9a8be34c28a42278474e168a2"
  },
  {
    "url": "categories/神奇海螺/index.html",
    "revision": "79d906b671e051e30193abd7a4aaf8f9"
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
    "revision": "27ebaeb84078c4addf7e020d9f7bb620"
  },
  {
    "url": "tag/GDP定位/index.html",
    "revision": "de8ed7e74871dc4213ffd90996c99f55"
  },
  {
    "url": "tag/git stash/index.html",
    "revision": "7d9217fab3ad86dfa27e72e74d4b7b82"
  },
  {
    "url": "tag/git介绍/index.html",
    "revision": "4ec2c2a6c727d439bf3e20ff80e09d4e"
  },
  {
    "url": "tag/index.html",
    "revision": "8a61546d525b3d6b480125d2f6eff5bc"
  },
  {
    "url": "tag/webpack学习/index.html",
    "revision": "adb4231fc7f3b78a3dd603c263b43c21"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "11124baa85ae95ee964c70ce61af3c4f"
  },
  {
    "url": "tag/代码调试/index.html",
    "revision": "69998e3c529163b1a95d6211b526233f"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "b33cc3a40eb55c9c96e47de8b8f8d8df"
  },
  {
    "url": "tag/手机预装软件/index.html",
    "revision": "feb557318e9a7c90442455c08355f608"
  },
  {
    "url": "tag/智能手环/index.html",
    "revision": "3483e99357055aff3dbd5614270fd397"
  },
  {
    "url": "tag/浏览器/index.html",
    "revision": "317504bdb5c143a7b20b82a7284f4b04"
  },
  {
    "url": "tag/调试工具/index.html",
    "revision": "9dbb1350de18993b383e17424ea96015"
  },
  {
    "url": "timeline/index.html",
    "revision": "185a07881efd62204eff9df2c0933f4b"
  },
  {
    "url": "views/dailyLife/2020/090401.html",
    "revision": "73f2bccbcb3f927325aae700981a79d9"
  },
  {
    "url": "views/dailyLife/2020/090402.html",
    "revision": "9a4c647a94af01ae70ada25b00d9adcf"
  },
  {
    "url": "views/dailyLife/2020/110201.html",
    "revision": "50db35696be94b07e0594fe99bf1ea96"
  },
  {
    "url": "views/frontEnd/2020/101301.html",
    "revision": "02e855c4925fcf9554583285b50245b6"
  },
  {
    "url": "views/frontEnd/2020/102301.html",
    "revision": "6c810f02f3d5c084405f74b79a24421f"
  },
  {
    "url": "views/frontEnd/2020/121601.html",
    "revision": "26838e8d254700a87db53e46c31d0e53"
  },
  {
    "url": "views/git/2020/091601.html",
    "revision": "13c4a269b51d39cea87aa6b20a1b1014"
  },
  {
    "url": "views/git/2020/091701.html",
    "revision": "e481dcb5f5d5056a194a17cb6a2b3069"
  },
  {
    "url": "views/index.html",
    "revision": "127cdb04e44e1781145f043b3267cd88"
  },
  {
    "url": "views/magic/2020/091101.html",
    "revision": "b7be412cd6ff0c56013604ca07d31c16"
  },
  {
    "url": "views/personalInfo/index.html",
    "revision": "3b4502abfeb025880b39142001dc1c7b"
  },
  {
    "url": "views/webpack/2020/090101.html",
    "revision": "b589188c4cadc38b7021c27062e8db78"
  },
  {
    "url": "views/webpack/2020/090201.html",
    "revision": "91b5ab3d2a96d511afbed180dd18def1"
  },
  {
    "url": "views/webpack/2020/090301.html",
    "revision": "0a0e5045eb2ae4bba9bd237ea0257871"
  },
  {
    "url": "views/webpack/2020/090701.html",
    "revision": "26a9cf5a59040fc15869149cdffe9893"
  },
  {
    "url": "views/webpack/2020/090702.html",
    "revision": "c4df8203bd63128365570c25eb3e6ed1"
  },
  {
    "url": "views/webpack/2020/090703.html",
    "revision": "ad70c18472e50d2425e4374bb537c657"
  },
  {
    "url": "views/webpack/2020/091201.html",
    "revision": "86b782ecda37b6347e65944ad1ce9701"
  },
  {
    "url": "views/webpack/2020/091202.html",
    "revision": "019cdd6f8252734716f6364ca8fafe86"
  },
  {
    "url": "views/webpack/2020/091501.html",
    "revision": "99332ac7427a3153fa10837aaf9ba013"
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
