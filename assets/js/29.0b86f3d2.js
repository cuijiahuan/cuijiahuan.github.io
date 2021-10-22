(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{588:function(s,a,t){"use strict";t.r(a);var n=t(8),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"项目结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目结构"}},[s._v("#")]),s._v(" 项目结构")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("03打包样式资源\n    -build\n    -src\n        --index.js\n        --index.css\n    -webpack.config.js\n    -package.json\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"webpack-config-js配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-config-js配置"}},[s._v("#")]),s._v(" webpack.config.js配置")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("const "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" resolve "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" require"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'path'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nmodule.exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    entry: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/index.js'")]),s._v(",\n    output: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        filename: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'build.js'")]),s._v(",\n        path: resolve"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname, "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'build'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n    module: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        rules: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                test: /"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(".css$/,\n                use: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'style-loader'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'css-loader'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n    plugins: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n    mode: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'development'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("p",[s._v("在module中配置loader，"),t("code",[s._v("test")]),s._v("表示需要匹配的文件，本次需要打包样式资源，所以我们需要匹配文件后缀是css的文件；"),t("code",[s._v("use")]),s._v("表示采用哪些loader来进行处理，对于css文件，我们使用的是"),t("code",[s._v("style-loader")]),s._v("和"),t("code",[s._v("css-loader")]),s._v("， style-loader 创建style标签，将js中的样式资源插入进行，添加到head中生效；而 css-loader 是将css文件变成 commonJs模块加载到js中，里面的内容是字符串类型样式。此外，在use数组中，执行loader的顺序是 “从右到左，从下到上，依次执行”，我们对css文件先使用css-loader处理，再用style-loader处理，所以就需要把css-loader放到最右边。")]),s._v(" "),t("h2",{attrs:{id:"打包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打包"}},[s._v("#")]),s._v(" 打包")]),s._v(" "),t("p",[s._v("代码编写完成之后，使用"),t("code",[s._v("npm i css-loader style-loader -D")]),s._v("命令安装css-loader和style-loader，安装完成后，命令行输入"),t("code",[s._v("webpack")]),s._v("进行打包，打包完成后，我们可以在build目录下的build.js中找到打包好的css文件")])])}),[],!1,null,null,null);a.default=e.exports}}]);