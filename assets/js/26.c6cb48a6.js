(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{550:function(t,s,n){"use strict";n.r(s);var a=n(17),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("首先我们新建项目"),n("code",[t._v("02webpack初体验")]),t._v("，在项目目录下使用命令行输入"),n("code",[t._v("npm init")]),t._v("创建项目描述文件"),n("code",[t._v("package.json")]),t._v("，然后本地安装"),n("code",[t._v("webpack")]),t._v("和"),n("code",[t._v("webpack-cli")]),t._v("这两个包，安装完成之后，再分别创建"),n("code",[t._v("build")]),t._v("和"),n("code",[t._v("src")]),t._v("文件夹，最后生成的项目结构如下：")]),t._v(" "),n("h2",{attrs:{id:"项目目录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#项目目录"}},[t._v("#")]),t._v(" 项目目录")]),t._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("02webpack初体验\n    -build\n    -node_modules\n    -src\n        --index.js\n    --package.json\n\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br")])]),n("h2",{attrs:{id:"src-index-js代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#src-index-js代码"}},[t._v("#")]),t._v(" src/index.js代码")]),t._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" add"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x, y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" x + y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole.log"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("add"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(", "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br")])]),n("h2",{attrs:{id:"打包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#打包"}},[t._v("#")]),t._v(" 打包")]),t._v(" "),n("p",[t._v("命令行输入如下代码：")]),t._v(" "),n("blockquote",[n("p",[t._v("webpack ./src/index.js -o ./build/build.js --mode=development")])]),t._v(" "),n("p",[t._v("执行命令，我们会发现build文件夹下多了一个build.js文件，打开后我们会发现多了很多代码，我们拉到最后，可以看到index.js中的代码已经打包")]),t._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("/***/ "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./src/index.js"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v("\n/*"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("**********************"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("*** ./src/index.js ***"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("**********************/\n/*"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" no static exports found */\n/***/ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("function"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("module, exports"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\neval"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/*'),n("span",{pre:!0,attrs:{class:"token entity",title:"\\r"}},[t._v("\\r")]),n("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v("    index.js: webpack入口起点文件"),n("span",{pre:!0,attrs:{class:"token entity",title:"\\r"}},[t._v("\\r")]),n("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),n("span",{pre:!0,attrs:{class:"token entity",title:"\\r"}},[t._v("\\r")]),n("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v("    1、运行指令："),n("span",{pre:!0,attrs:{class:"token entity",title:"\\r"}},[t._v("\\r")]),n("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v("        开发环境：webpack ./src/index.js -o ./build/build.js --mode=development"),n("span",{pre:!0,attrs:{class:"token entity",title:"\\r"}},[t._v("\\r")]),n("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v("            webpack会以 ./src/index.js 为入口文件开始打包，打包后输出到 ./build/build.js，整体打包环境是开发环境"),n("span",{pre:!0,attrs:{class:"token entity",title:"\\r"}},[t._v("\\r")]),n("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v("        生产环境：webpack ./src/index.js -o ./build/build.js --mode=production"),n("span",{pre:!0,attrs:{class:"token entity",title:"\\r"}},[t._v("\\r")]),n("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v("*/"),n("span",{pre:!0,attrs:{class:"token entity",title:"\\r"}},[t._v("\\r")]),n("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v("// import './index.css'"),n("span",{pre:!0,attrs:{class:"token entity",title:"\\r"}},[t._v("\\r")]),n("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),n("span",{pre:!0,attrs:{class:"token entity",title:"\\r"}},[t._v("\\r")]),n("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v("// import data from './data.json'"),n("span",{pre:!0,attrs:{class:"token entity",title:"\\r"}},[t._v("\\r")]),n("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v("// console.log(data);"),n("span",{pre:!0,attrs:{class:"token entity",title:"\\r"}},[t._v("\\r")]),n("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v("function add(x, y) {"),n("span",{pre:!0,attrs:{class:"token entity",title:"\\r"}},[t._v("\\r")]),n("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v("    return x + y;"),n("span",{pre:!0,attrs:{class:"token entity",title:"\\r"}},[t._v("\\r")]),n("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v("}"),n("span",{pre:!0,attrs:{class:"token entity",title:"\\r"}},[t._v("\\r")]),n("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v("console.log(add(1, 2));"),n("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),n("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v('//# sourceURL=webpack:///./src/index.js?"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n/***/ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n/******/ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br")])]),n("h2",{attrs:{id:"测试样式资源打包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#测试样式资源打包"}},[t._v("#")]),t._v(" 测试样式资源打包")]),t._v(" "),n("p",[t._v("我们在src文件夹下再新建文件"),n("code",[t._v("index.css")]),t._v("，写入一些样式，在index.js中通过import引入，再执行打包命令")]),t._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./index.css'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" add"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x, y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" x + y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole.log"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("add"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(", "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])]),n("p",[t._v("这个时候我们会发现命令报错，显示没有办法对css文件进行处理，这证明了webpack本身只能打包js资源，对于非js资源就需要借助loader来进行处理，后续我们会说明如何打包非js文件资源，")])])}),[],!1,null,null,null);s.default=e.exports}}]);