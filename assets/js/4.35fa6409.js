(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{572:function(t,s,e){t.exports=e.p+"assets/img/map_local_1.2dd19c45.jpg"},573:function(t,s,e){t.exports=e.p+"assets/img/map_local_2.6bfd8dc6.jpg"},574:function(t,s,e){t.exports=e.p+"assets/img/map_local_3.b315380b.jpg"},575:function(t,s,e){t.exports=e.p+"assets/img/map_local_4.8459030b.jpg"},576:function(t,s,e){t.exports=e.p+"assets/img/map_local_5.a166c5b8.jpg"},577:function(t,s,e){t.exports=e.p+"assets/img/map_local_6.266c4f19.jpg"},578:function(t,s,e){t.exports=e.p+"assets/img/map_local_7.e2c92a38.jpg"},579:function(t,s,e){t.exports=e.p+"assets/img/map_local_8.72ba408e.jpg"},580:function(t,s,e){t.exports=e.p+"assets/img/rewrite_1.d0989e0a.jpg"},581:function(t,s,e){t.exports=e.p+"assets/img/rewrite_2.b3946d2a.jpg"},582:function(t,s,e){t.exports=e.p+"assets/img/rewrite_3.65967d42.jpg"},583:function(t,s,e){t.exports=e.p+"assets/img/rewrite_4.229640c9.jpg"},584:function(t,s,e){t.exports=e.p+"assets/img/rewrite_5.01dfc091.jpg"},585:function(t,s,e){t.exports=e.p+"assets/img/options.4926a7d2.jpg"},586:function(t,s,e){t.exports=e.p+"assets/img/http_method.24d683ae.jpg"},616:function(t,s,e){"use strict";e.r(s);var a=e(6),_=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("charles我平日里用的颇为顺手，用来对手机抓包是再好不过了，不过今天心血来潮,对公司PC端项目的接口进行抓包时发现了一点有趣的东西，在介绍之前我们先来看一下charles中的 "),a("code",[t._v("Map Local")]),t._v(" 和 "),a("code",[t._v("Rewrite")]),t._v(" 操作。")]),t._v(" "),a("h2",{attrs:{id:"map-local-操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#map-local-操作"}},[t._v("#")]),t._v(" Map Local 操作")]),t._v(" "),a("p",[t._v("凡是用过charles中 "),a("code",[t._v("Map Local")]),t._v(" 操作的朋友，肯定对这个操作非常喜爱，因为它可以在不影响当前接口的前提下拦截数据，并在本地更改接口中的数据进行相关测试，相当快捷方便，简直就是前端调试利器，现在我来说明一下具体的操作步骤")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("第一步：打开charles，然后在浏览器中获取页面，这时我们就可以看到charles会抓取到当前页面的所有接口。")]),t._v(" "),a("img",{attrs:{src:e(572)}})]),t._v(" "),a("li",[a("p",[t._v("第二步：找到需要进行测试的接口，然后我们可以点击对应的接口，右键选择 "),a("code",[t._v("Save Response")]),t._v(" 将接口数据存储在本地，文件格式我们可以保存为"),a("code",[t._v("json")]),t._v("格式。\n"),a("img",{attrs:{src:e(573)}}),t._v(" "),a("img",{attrs:{src:e(574)}})]),t._v(" "),a("p",[t._v("本地保存之后，我们打开文件，对数据进行修改，查看浏览器页面可以发现页面新闻第一条的标题是 "),a("code",[t._v("测试2")]),t._v("，我们在本地文件中将其修改成 "),a("code",[t._v("白银二辅助测试")]),t._v("。")]),t._v(" "),a("img",{attrs:{src:e(575)}}),t._v(" "),a("img",{attrs:{src:e(576)}})]),t._v(" "),a("li",[a("p",[t._v("第三步：找到需要进行测试的接口，然后我们可以点击对应的接口，右键选择 "),a("code",[t._v("Map Local")]),t._v(" (如图标识②)；或者直接在菜单栏选择 "),a("code",[t._v("tools")]),t._v(" ,在这里面找到 "),a("code",[t._v("Map Local")]),t._v(" 进入也可以(如图标识①)。")]),t._v(" "),a("img",{attrs:{src:e(577)}}),t._v(" "),a("p",[t._v("进入之后，我们在弹框中点击 "),a("code",[t._v("choose")]),t._v(" 按钮，选择本地修改的文件，点击OK")]),t._v(" "),a("img",{attrs:{src:e(578)}}),t._v(" "),a("p",[t._v("之后我们在浏览器中重新刷新页面，就会发现修改后的新闻标题内容出现")]),t._v(" "),a("img",{attrs:{src:e(579)}})])]),t._v(" "),a("p",[t._v("以上就是 "),a("code",[t._v("Map Local")]),t._v(" 的 demo 演示")]),t._v(" "),a("h2",{attrs:{id:"rewrite-操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rewrite-操作"}},[t._v("#")]),t._v(" Rewrite 操作")]),t._v(" "),a("p",[t._v("在我们进行 "),a("code",[t._v("Map Local")]),t._v(" 操作时，有时候会出现接口跨域报错问题，这个时候我们就可以用到charles的 "),a("code",[t._v("Rewrite")]),t._v(" 操作")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("点击菜单栏 "),a("code",[t._v("tools")]),t._v(" 下的 "),a("code",[t._v("Rewrite")]),t._v("，进入配置页面")]),t._v(" "),a("img",{attrs:{src:e(580)}}),t._v(" "),a("p",[t._v("进入之后，首先选中 “ 标识① ”，然后我们点击 “标识②” 的"),a("code",[t._v("add")]),t._v("按钮添加规则，之后会出现一条“untitled set”，我们选中后，点击 “标识③” 的"),a("code",[t._v("add")]),t._v("添加 location ,这里面填写的是接口url")]),t._v(" "),a("img",{attrs:{src:e(581)}}),t._v(" "),a("p",[t._v("然后我们点击 “标识④” 的"),a("code",[t._v("add")]),t._v("按钮，分别添加解决跨域所需的内容")]),t._v(" "),a("img",{attrs:{src:e(582)}}),t._v(" "),a("img",{attrs:{src:e(583)}}),t._v(" "),a("p",[t._v("最后我们选择OK，再次刷新页面查看接口的请求")]),t._v(" "),a("img",{attrs:{src:e(584)}})])]),t._v(" "),a("p",[t._v('另外，在 "标识④" 步骤中，我们在第一行添加 type 时，会发现可选的项很多，这些表示可以重写接口所有元素的内容。')]),t._v(" "),a("h2",{attrs:{id:"有趣的东西"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#有趣的东西"}},[t._v("#")]),t._v(" 有趣的东西")]),t._v(" "),a("p",[t._v("了解完charles的操作后，现在我来说明一下发现的有趣的东西：在我使用chalres对公司的接口进行测试时，发现在使用 "),a("code",[t._v("Map Local")]),t._v(" 和 "),a("code",[t._v("Rewrite")]),t._v(" 操作后，接口依然报跨域问题，在进行了诸多尝试和搜索之后，我发现问题的解决可能得从接口下手，于是我重新请求了一下接口，这次我发现了之前忽略的一个东西。")]),t._v(" "),a("img",{attrs:{src:e(585)}}),t._v(" "),a("p",[t._v("在正式请求的前面有一个状态码为204的OPTIONS请求，难不成这就是引起跨域的原因？因此我查阅了一下资料：")]),t._v(" "),a("h3",{attrs:{id:"http-204-状态码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-204-状态码"}},[t._v("#")]),t._v(" HTTP 204 状态码")]),t._v(" "),a("ol",[a("li",[t._v("服务器成功处理了请求，但不需要返回任何实体内容，并且希望返回更新了的元信息。响应可能通过实体头部的形式，返回新的或更新后的元信息。如果存在这些头部信息，则应当与所请求的变量相呼应。")]),t._v(" "),a("li",[t._v("如果客户端是浏览器的话，那么用户浏览器应保留发送了该请求的页面，而不产生任何文档视图上的变化，即使按照规范新的或更新后的元信息应当被应用到用户浏览器活动视图中的文档。")]),t._v(" "),a("li",[t._v("由于204响应被禁止包含任何消息体，因此它始终以消息头后的第一个空行结尾。")])]),t._v(" "),a("h3",{attrs:{id:"为什么会发生两次请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么会发生两次请求"}},[t._v("#")]),t._v(" 为什么会发生两次请求？")]),t._v(" "),a("p",[t._v("首先我们了解http的请求方式包括OPTIONS、GET、HEAD、POST、PUT、DELETE、TRACE和CONNECT等八种请求方式")]),t._v(" "),a("img",{attrs:{src:e(586)}}),t._v(" "),a("p",[t._v("之后我查阅了一些资料，对于为什么会发生两次请求这个问题有的博客有一些解释：由于后端使用Rest架构来设计接口，因此一次请求发两次的情况开始普遍。")]),t._v(" "),a("p",[t._v("这个解释我还是有点摸不着头脑，我对这个问题的理解是，由于使用cors来解决跨域问题，需要确认正式请求是否会成功传到服务端，因此在正式请求之前会先发一个预请求，如果请求成功，那就说明一切OK，然后才会发送正式请求。")]),t._v(" "),a("p",[t._v("至于为什么使用OPTIONS，我想应该是OPTIONS可以判断客户端和服务端是否成功连接并且不会产生其他脏数据的原因。")]),t._v(" "),a("p",[t._v("https://blog.csdn.net/weixin_43549408/article/details/84251680 "),a("a",{attrs:{href:"https://blog.csdn.net/weixin_43549408/article/details/84251680"}},[t._v("这位大佬的博客")]),t._v("解释更完善")]),t._v(" "),a("h3",{attrs:{id:"options请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options请求"}},[t._v("#")]),t._v(" OPTIONS请求")]),t._v(" "),a("p",[t._v("options请求的官方定义：OPTIONS方法是用于请求获得由Request-URI标识的资源在请求/响应的通信过程中可以使用的功能选项。通过这个方法，客户端可以在采取具体资源请求之前，决定对该资源采取何种必要措施，或者了解服务器的性能。")]),t._v(" "),a("p",[t._v("用白话说就是：在发生正式的请求之前，先进行一次预检请求。看服务端返回一些信息，浏览器拿到之后，看后台是否允许进行访问。")]),t._v(" "),a("h3",{attrs:{id:"产生options请求的原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#产生options请求的原因"}},[t._v("#")]),t._v(" 产生options请求的原因")]),t._v(" "),a("p",[t._v("产生options请求的原因包括以下几条：")]),t._v(" "),a("p",[t._v("1、产生了复杂请求。复杂请求对应的就是简单请求。简单请求的定义是：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("请求方法是GET、HEAD或者POST，并且当请求方法是POST时，Content-Type必须是application/x-www-form-urlencoded, multipart/form-data或着text/plain中的一个值。\n    \n请求中没有自定义HTTP头部。\n    \n所谓的自定义头部，在实际的项目里，我们经常会遇到需要在header头部加上一些token或者其他的用户信息，用来做用户信息的校验。\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("2、发生了跨域。")]),t._v(" "),a("h3",{attrs:{id:"options请求有什么作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options请求有什么作用"}},[t._v("#")]),t._v(" options请求有什么作用")]),t._v(" "),a("p",[t._v("官方将头部带自定义信息的请求方式称为带预检（preflighted）的跨域请求。在实际调用接口之前，会首先发出一个options请求，检测服务端是否支持真实的请求进行跨域的请求。真实请求在options请求中，通过request-header将 Access-Control-Request-Headers与Access-Control-Request-Method发送给后台，另外浏览器会自行加上一个Origin请求地址。服务端在接收到预检请求后，根据资源权限配置，在response-header头部加入access-control-allow-headers（允许跨域请求的请求头）、access-control-allow-methods（允许跨域请求的请求方式）、access-control-allow-origin（允许跨域请求的域）。另外，服务端还可以通过Access-Control-Max-Age来设置一定时间内无须再进行预检请求，直接用之前的预检请求的协商结果即可。浏览器再根据服务端返回的信息，进行决定是否再进行真实的跨域请求。这个过程对于用户来说，也是透明的。")]),t._v(" "),a("p",[t._v("另外在HTTP响应头，凡是浏览器请求中携带了身份信息，而响应头中没有返回Access-Control-Allow-Credentials: true的，浏览器都会忽略此次响应。")]),t._v(" "),a("p",[t._v("总结：只要是带自定义header的跨域请求，在发送真实请求前都会先发送OPTIONS请求，浏览器根据OPTIONS请求返回的结果来决定是否继续发送真实的请求进行跨域资源访问。所以复杂请求肯定会两次请求服务端。")]),t._v(" "),a("h3",{attrs:{id:"options请求如何避免"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options请求如何避免"}},[t._v("#")]),t._v(" options请求如何避免")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("使用代理，避开跨域。")])]),t._v(" "),a("li",[a("p",[t._v("将复杂跨域请求更改为简单跨域请求。")])]),t._v(" "),a("li",[a("p",[t._v("不使用带自定义配置的header头部。")])])])])}),[],!1,null,null,null);s.default=_.exports}}]);