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
    "revision": "b63d3f5b0a3715286548c4cb5b1387c9"
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
    "url": "assets/js/1.83da3cda.js",
    "revision": "604ffc957c0f81b7dcaaaab18a513426"
  },
  {
    "url": "assets/js/10.4384caeb.js",
    "revision": "3621c92435d350061608850265e4eada"
  },
  {
    "url": "assets/js/11.da7ee95b.js",
    "revision": "802581d9518e520d539f4ac7a64c5917"
  },
  {
    "url": "assets/js/12.85378df8.js",
    "revision": "a4a25352451a07d8249d00705725e090"
  },
  {
    "url": "assets/js/13.6ff98df3.js",
    "revision": "833b00b8d5372e30d572b2a5e2a18718"
  },
  {
    "url": "assets/js/14.902b698f.js",
    "revision": "689ea3d0179b7817e2bc8744064dcac6"
  },
  {
    "url": "assets/js/15.89c9f819.js",
    "revision": "f16c2ffcf52112e459c5b565633a8f18"
  },
  {
    "url": "assets/js/16.bdcbb1fd.js",
    "revision": "3ac435ca4f8b783fa47464de0512907f"
  },
  {
    "url": "assets/js/17.80505dee.js",
    "revision": "e00ea6f1c01284434ba07daafe557df0"
  },
  {
    "url": "assets/js/18.5763f775.js",
    "revision": "c90544e510768b9671918ba65c49cb0d"
  },
  {
    "url": "assets/js/19.cfd7d383.js",
    "revision": "5d9886d8790eff100a56de8158de0033"
  },
  {
    "url": "assets/js/20.6fdfcd0e.js",
    "revision": "158c8896f1c5a875da9da531f404da75"
  },
  {
    "url": "assets/js/21.6b8ea6bf.js",
    "revision": "0a95d689dbb0536911fc5f7270d17629"
  },
  {
    "url": "assets/js/22.8385d784.js",
    "revision": "28046ea84987b7d68c174e4f3fee338c"
  },
  {
    "url": "assets/js/23.53b550f3.js",
    "revision": "17202a279ee4f7084e1c943f8f961fe0"
  },
  {
    "url": "assets/js/24.5360786b.js",
    "revision": "f68d47c732548206ec3bf002c15b6bae"
  },
  {
    "url": "assets/js/25.5088558e.js",
    "revision": "52fcef2378b7db9bb176253bb4b4e7dc"
  },
  {
    "url": "assets/js/26.73990495.js",
    "revision": "3d89b020909b3d30126c463ee2f93d7e"
  },
  {
    "url": "assets/js/27.19d18cef.js",
    "revision": "cc0424d68fb616f6421f9c44fc1628ee"
  },
  {
    "url": "assets/js/28.cc6c2fed.js",
    "revision": "1da8e6c2865f6951ebcfc0279c02a380"
  },
  {
    "url": "assets/js/29.4018cd22.js",
    "revision": "041338a468af355710126660dffda619"
  },
  {
    "url": "assets/js/3.fb352bef.js",
    "revision": "1aa5f7a6cc460c7c34b02afb19cb8a87"
  },
  {
    "url": "assets/js/30.1abc50ec.js",
    "revision": "f267ba317102cdf2bad0d3bca5c5b912"
  },
  {
    "url": "assets/js/31.589669a4.js",
    "revision": "d918b2f1bfb5291f5857efbee3d19ccf"
  },
  {
    "url": "assets/js/32.5174c692.js",
    "revision": "2918b9f791be122f60cfc7b4d074e23d"
  },
  {
    "url": "assets/js/33.1c83e99f.js",
    "revision": "9d34ab6e15224ab18b46f82049d85d3a"
  },
  {
    "url": "assets/js/34.7b99f821.js",
    "revision": "92ff9af39d2f713809b908284e6c3f8f"
  },
  {
    "url": "assets/js/35.e6d533cf.js",
    "revision": "07eb8dd94e5558d4cc49bbe35df09cda"
  },
  {
    "url": "assets/js/36.71795b34.js",
    "revision": "4ffb1c601e7f80715537f3bb96fd5de5"
  },
  {
    "url": "assets/js/37.4414babf.js",
    "revision": "71caa57eb99679e23952116533fdbeab"
  },
  {
    "url": "assets/js/4.fe95d523.js",
    "revision": "98b0c051799bfe152689d7b3f121520a"
  },
  {
    "url": "assets/js/5.a950aa41.js",
    "revision": "cd38ab3355d49dbc1090893a1442f1d1"
  },
  {
    "url": "assets/js/6.3713cc2b.js",
    "revision": "da76eef9b86107bf08ab52a95a8e62aa"
  },
  {
    "url": "assets/js/7.e007e53c.js",
    "revision": "0d16fd58b4b3704bb078614c3b7fa647"
  },
  {
    "url": "assets/js/8.1b3358f0.js",
    "revision": "2b9ace530c970e30b74612a54c042be3"
  },
  {
    "url": "assets/js/9.7141cdad.js",
    "revision": "f73d279b6eb85be26670e3e7d15e49aa"
  },
  {
    "url": "assets/js/app.582d941f.js",
    "revision": "85923fb4f460813ce69f2531999de3fc"
  },
  {
    "url": "banner.jpg",
    "revision": "8b554bea76252e44c1799968352edb1a"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "6c31ca4916b043d7f10af3d3381b791f"
  },
  {
    "url": "categories/index.html",
    "revision": "3d80cf7b0e91be20f7ea9b5ae4e07d40"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "0491713bb66280598fcf4d16ef8d8d40"
  },
  {
    "url": "categories/工作分享/index.html",
    "revision": "cb6f1f28f7f92b8eb544997b22a03ae6"
  },
  {
    "url": "categories/微信小程序/index.html",
    "revision": "71cad3bab34db8cb6a57f2412a4dd59a"
  },
  {
    "url": "categories/打包工具/index.html",
    "revision": "0db9077c2e2de1f683ab6d9c2fc190c0"
  },
  {
    "url": "categories/日常生活/index.html",
    "revision": "555a9c4afaf6b90f68571f5af6debfa6"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "923cd8732591913374678b321324e20e"
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
    "revision": "7e3f401dbf4f9ce0333951cd751cf01d"
  },
  {
    "url": "tag/bug总结/index.html",
    "revision": "ef90bee42566f01c92c707b3f3fd61c1"
  },
  {
    "url": "tag/Charles调试工具/index.html",
    "revision": "eb95931b326394800047ffa3fce7446f"
  },
  {
    "url": "tag/Debugger方法/index.html",
    "revision": "de4ca987a8d18fc5adeb293492c83bea"
  },
  {
    "url": "tag/git stash/index.html",
    "revision": "83ebefe7ad7fcb662f07bc8326311273"
  },
  {
    "url": "tag/git介绍/index.html",
    "revision": "f315cc140b6b09361b01f8227557f65a"
  },
  {
    "url": "tag/HTML编译/index.html",
    "revision": "fd3d854408f812a0454359901c66b420"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "c2469774c5cd06efde3dab2d155daabe"
  },
  {
    "url": "tag/index.html",
    "revision": "66368f173ecb77cdfaa24e7ccf2b1288"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "0cdf0cd8d1c16572fc8d88f0fc7329f3"
  },
  {
    "url": "tag/个人信息/index.html",
    "revision": "d0e3d8a94097057793ae8d7325bdefc2"
  },
  {
    "url": "tag/力扣/index.html",
    "revision": "4cb2231ab263ab0f50087b30b461ebdd"
  },
  {
    "url": "tag/华为机试/index.html",
    "revision": "b5dcda497c744f2dcc3c68c48e20476e"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "83bc154fab4db32b2c4ecde29791f84f"
  },
  {
    "url": "tag/微信小程序学习/index.html",
    "revision": "b0bcf3ea1f0655066aa4a615fb0faebe"
  },
  {
    "url": "tag/手机预装软件/index.html",
    "revision": "2e1f4437e92fead726fd0ba878aeda15"
  },
  {
    "url": "tag/智能手环/index.html",
    "revision": "d97027d922cd3f6a16981c81eb92917c"
  },
  {
    "url": "tag/浏览器/index.html",
    "revision": "edf4e541d0d6065dba640aca42da39ad"
  },
  {
    "url": "timeline/index.html",
    "revision": "b94a814e2b117590e9aeda4ba0bb042e"
  },
  {
    "url": "views/buglist/2023/060201.html",
    "revision": "5db45b00208c5567e741d04b84d7ced2"
  },
  {
    "url": "views/coding/2021/030101.html",
    "revision": "1bb3b9aabf1043b3dbef42aeb26a2bf8"
  },
  {
    "url": "views/coding/2023/020901.html",
    "revision": "18cd0ce92aadaaf9e95b488a54c9ae4e"
  },
  {
    "url": "views/dailylife/2020/090401.html",
    "revision": "ed4d3871e9f22a2cdc10da88938c5f44"
  },
  {
    "url": "views/dailylife/2020/091101.html",
    "revision": "fc3010661088f0c40ea107d511e37725"
  },
  {
    "url": "views/dailylife/2020/110201.html",
    "revision": "54cc994fe8bb8e17d70f8461888bcddc"
  },
  {
    "url": "views/frontend/2020/101301.html",
    "revision": "69bb3ac59062b5a30fd672065f7a2c47"
  },
  {
    "url": "views/frontend/2020/102301.html",
    "revision": "edd48461994184c00c770fbcffe6b11e"
  },
  {
    "url": "views/frontend/2020/121601.html",
    "revision": "7c3ce14998467d713a8e00c06d5e336e"
  },
  {
    "url": "views/frontend/2021/011801.html",
    "revision": "70add5fe51f8a116303bca006d8976f0"
  },
  {
    "url": "views/frontend/2021/110201.html",
    "revision": "535b3e4bd19ea5219f5f11f3c0afad32"
  },
  {
    "url": "views/git/2020/091601.html",
    "revision": "5286bbe6567dbd3974a25bfab6eca39e"
  },
  {
    "url": "views/git/2020/091701.html",
    "revision": "3474f276c06d43d58be78225e4e6b09f"
  },
  {
    "url": "views/git/2023/060201.html",
    "revision": "7b9d5235f4a93c7f6143f7ee96188767"
  },
  {
    "url": "views/index.html",
    "revision": "e3ce8c18ee00e783ecd4e9fd8494f501"
  },
  {
    "url": "views/miniprogram/2020/122101.html",
    "revision": "8ca910a7a471ccab46d811b21f85291d"
  },
  {
    "url": "views/personalinfo/index.html",
    "revision": "586614a847bfd6a2daf62d3d1cb282cf"
  },
  {
    "url": "views/webpack/2020/090101.html",
    "revision": "8657fb2908acd8ccb2e6313f38da423c"
  },
  {
    "url": "views/webpack/2020/090201.html",
    "revision": "de7650e51441d4e1e1ae8ba17ac21843"
  },
  {
    "url": "views/webpack/2020/090301.html",
    "revision": "ce4aa1c50e22daa13467df036343b53c"
  },
  {
    "url": "views/webpack/2020/090701.html",
    "revision": "f782cdc4ee8e3ddb8e3089c8590df28f"
  },
  {
    "url": "views/webpack/2020/090702.html",
    "revision": "ae7e24fc5896535e5b8d50d3e084b9a0"
  },
  {
    "url": "views/webpack/2020/090703.html",
    "revision": "1e4c71fb95271d9a0369e7bddcbebcf6"
  },
  {
    "url": "views/webpack/2020/091201.html",
    "revision": "814a12ce243cf5a084d35b37b415bb32"
  },
  {
    "url": "views/webpack/2020/091202.html",
    "revision": "3cb03f3ea3dbf5f219a0cc5fd1eb5e8e"
  },
  {
    "url": "views/webpack/2020/091501.html",
    "revision": "567680c05646dbc9f8913ba76c571124"
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
