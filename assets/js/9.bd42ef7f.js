(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{567:function(t,e,s){t.exports=s.p+"assets/img/step1.9da31456.png"},568:function(t,e,s){t.exports=s.p+"assets/img/step2.d038750d.jpg"},569:function(t,e,s){t.exports=s.p+"assets/img/step_3_1.b9fbc8b7.jpg"},570:function(t,e,s){t.exports=s.p+"assets/img/step_3_2.16c488d5.jpg"},571:function(t,e,s){t.exports=s.p+"assets/img/step_3_3.501c0f52.jpg"},615:function(t,e,s){"use strict";s.r(e);var r=s(6),_=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("手机预装软件一般指手机出厂自带、或第三方刷机渠道预装到消费者手机当中应用或软件。"),r("sup",[r("a",{attrs:{href:"https://baike.baidu.com/item/%E6%89%8B%E6%9C%BA%E9%A2%84%E8%A3%85%E8%BD%AF%E4%BB%B6"}},[t._v("[1]"),r("a",[r("sup")])])])]),t._v(" "),r("p",[t._v("就像我用的华为手机，它在出厂时厂商会安装华为的一些软件，如“华为视频”、“华为音乐”、“华为浏览器”等，这应该是厂商为了推广，无可厚非，不过在我使用的过程中，有一些不舒服的感觉，所以就想着怎么卸载这些预装软件，试了一下，直接卸载是不行的，厂商一贯的尿性，所以我就试了一下其他方法。")]),t._v(" "),r("h3",{attrs:{id:"root"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#root"}},[t._v("#")]),t._v(" ROOT")]),t._v(" "),r("p",[t._v("首先想到的自然是root，不过华为手机貌似不能，我就没有太深入，改日再说")]),t._v(" "),r("h3",{attrs:{id:"android-调试桥"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#android-调试桥"}},[t._v("#")]),t._v(" Android 调试桥")]),t._v(" "),r("blockquote",[r("p",[t._v("Android 调试桥 (adb) 是一种功能多样的命令行工具，可让您与设备进行通信。adb 命令可用于执行各种设备操作（例如安装和调试应用）")])]),t._v(" "),r("p",[t._v("我们这里只会使用到它的几个简单的命令，想要深挖的大佬们可以阅读"),r("a",{attrs:{href:"https://developer.android.google.cn/?hl=zh-cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("安卓开发文档"),r("OutboundLink")],1)]),t._v(" "),r("ol",[r("li",[t._v("首先我们下载"),r("a",{attrs:{href:"https://adbshell.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("ADB Kits"),r("OutboundLink")],1),t._v(",下载后解压，注意ADB Kits不能直接双击打开，需要我们在命令行中操作\n"),r("img",{attrs:{src:s(567)}})]),t._v(" "),r("li",[t._v("打开"),r("code",[t._v("cmd")]),t._v("，进入adb文件夹下，输入 "),r("code",[t._v("adb sevices")]),t._v("，当出现“List of devices attached”时，表明ADB已经启动\n"),r("img",{attrs:{src:s(568)}})]),t._v(" "),r("li",[t._v("手机连接到电脑上，并且手机启动开发者模式，启动开发者模式是连续点击“关于手机”页面的版本号信息，成功启动后会提示“您已处于开发者模式”，然后我们打开以下选项\n"),r("img",{attrs:{src:s(569)}}),t._v("\n然后在"),r("code",[t._v("cmd")]),t._v("中输入"),r("code",[t._v("adb devices")]),t._v(" 启动ADB，这时手机上会有如下提示\n"),r("img",{attrs:{src:s(570)}}),t._v("\n选择确定，输入"),r("code",[t._v("adb devices")]),t._v(" 启动ADB，这时会发现会输出你的设备信息，这表示连接成功\n"),r("img",{attrs:{src:s(571)}})]),t._v(" "),r("li",[t._v("删除系统预装软件命令为 "),r("code",[t._v("adb shell pm uninstall --user 0 +软件包名")]),t._v("，以下软件包以华为手机为例：")])]),t._v(" "),r("table",{attrs:{align:"center"}},[r("tr",[r("td",[t._v("软件")]),t._v(" "),r("td",[t._v("软件包名")])]),t._v(" "),r("tr",[r("td",[t._v("华为音乐")]),t._v(" "),r("td",[t._v("com.android.mediacenter")])]),t._v(" "),r("tr",[r("td",[t._v("华为视频")]),t._v(" "),r("td",[t._v("com.huawei.himovie")])]),t._v(" "),r("tr",[r("td",[t._v("华为浏览器")]),t._v(" "),r("td",[t._v("com.android.browser")])]),t._v(" "),r("tr",[r("td",[t._v("天际通")]),t._v(" "),r("td",[t._v("com.huawei.skytone")])])]),t._v(" "),r("p",[t._v("比如我们需要卸载华为音乐，可以输入 "),r("code",[t._v("adb shell pm uninstall --user 0 com.android.mediacenter")]),t._v("，成功后命令行会输出“success”，这时手机上的音乐就会被卸载。")]),t._v(" "),r("p",[t._v("注："),r("code",[t._v("华为部门预装软件卸载可能会发生不确定异常，所以还是要慎用，除非这个软件太恶心")])])])}),[],!1,null,null,null);e.default=_.exports}}]);