(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{363:function(n,t,s){"use strict";s.r(t);var v=s(42),o=Object(v.a)({},(function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("blockquote",[s("p",[n._v("之前在项目中有一个需求是鼠标移入元素上时该元素改变样式的同时另外元素样式也要改变，刚开始想利用js来实现，不过有点麻烦，之后发现可以通过css直接来实现这个功能，本着人无我有，人有我优的原则，在这里记录一下具体过程。")])]),n._v(" "),s("p",[s("strong",[n._v("首先我经过尝试以及网上查找之后，发现利用hover来实现这个功能是有一定局限性的，如果你要改变其他元素的样式，那么它们必须是相邻同级元素或者是同一父元素的子元素，不然效果是出不来的（呜~）")])]),n._v(" "),s("h4",{attrs:{id:"相邻同级元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相邻同级元素"}},[n._v("#")]),n._v(" 相邻同级元素")]),n._v(" "),s("p",[n._v("HTML")]),n._v(" "),s("pre",[n._v('<div class="div1">\n\t<div class="son1">son1 </div>\n\t<div class="son2">son2 </div>\n</div>\n')]),n._v(" "),s("p",[n._v("CSS")]),n._v(" "),s("pre",[n._v(".son1 , .son2{\n\twidth:100px;\n\theight:100px;\n\tborder:1px solid #000;\n}\n.son1:hover + .son2{\n\tbackground:#000;\n}\n")]),n._v(" "),s("p",[n._v("鼠标移入son1元素，son2元素背景色变黑")]),n._v(" "),s("h4",{attrs:{id:"父级元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#父级元素"}},[n._v("#")]),n._v(" 父级元素")]),n._v(" "),s("p",[n._v("HTML")]),n._v(" "),s("pre",[n._v('<div class="div1">\n\t<div class="son">son1 </div>\n</div>\n')]),n._v(" "),s("p",[n._v("CSS")]),n._v(" "),s("pre",[n._v(".div1{\n\twidth:200px;\n\theight:200px;\n\tborder:1px solid #000;\n}\n.son{\n\tmargin:0 auto;\n\twidth:100px;\n\theight:100px;\n\tborder:1px solid #000;\n}\n.div1:hover .son{\n\tbackground:#000;\n}\n")]),n._v(" "),s("p",[n._v("鼠标移入父级.div1元素，子元素son背景变黑")])])}),[],!1,null,null,null);t.default=o.exports}}]);