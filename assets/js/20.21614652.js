(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{619:function(a,s,t){"use strict";t.r(s);var e=t(6),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("blockquote",[t("p",[a._v("什么是Git？")])]),a._v(" "),t("p",[a._v("Git是一个开源的分布式版本控制系统，可以有效、高速的处理从很小到非常大的项目版本管理，而对于大家熟知的Github来说，它是一个用Git做版本控制的项目托管平台\n如图：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/226662-6e184a8462131352.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/583",alt:""}})]),a._v(" "),t("p",[a._v("在这里我把我学习Git过程中的知识总结出来，供大家参考")]),a._v(" "),t("blockquote",[t("p",[a._v("要想使用Git，首先我们需要来安装Git，这里我把链接放在这，有兴趣的兄dei可以来下载安装\n"),t("a",{attrs:{href:"https://pan.baidu.com/s/1c1J0Lbi",target:"_blank",rel:"noopener noreferrer"}},[a._v("链接"),t("OutboundLink")],1),a._v(" 密码：ue9y")])]),a._v(" "),t("p",[a._v("下载好之后，我们就开始正式了解Git")]),a._v(" "),t("hr"),a._v(" "),t("h3",{attrs:{id:"因为在建博客时也用到了git-因此我主要说明一下git如何进行远程连接和下载提交工程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#因为在建博客时也用到了git-因此我主要说明一下git如何进行远程连接和下载提交工程"}},[a._v("#")]),a._v(" 因为在建博客时也用到了Git，因此我主要说明一下Git如何进行远程连接和下载提交工程")]),a._v(" "),t("h4",{attrs:{id:"要使用git-我们首先要告诉git我们是谁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#要使用git-我们首先要告诉git我们是谁"}},[a._v("#")]),a._v(" 要使用Git，我们首先要告诉Git我们是谁")]),a._v(" "),t("p",[a._v("一般填写的都是Github的用户名和注册邮箱")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git config --global user.name '你的名称'\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git config --global user.email '你的邮箱'\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"初始化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[a._v("#")]),a._v(" 初始化")]),a._v(" "),t("p",[a._v("在任意一个地方新建一个文件，然后在文件中打开git，输入初始化命令")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git init\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("即初始化完成")]),a._v(" "),t("hr"),a._v(" "),t("h4",{attrs:{id:"提交过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提交过程"}},[a._v("#")]),a._v(" 提交过程")]),a._v(" "),t("p",[a._v("首先我们需要先查看当前文件的状态")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git status\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("它会显示出当前我们所在的分支，比如“on branch master”表示我们现在处在master这个分支上，即主分支")]),a._v(" "),t("p",[a._v("当我们在文件中新建文件之后，再次运行“git status”时，结果会以红色字体出现新建文件名，即git未跟踪文件，现在我们需要将未跟踪文件添加进来，输入")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git add .  #表示添加所有修改文件\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("或")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git add 文件名  #表示添加某一文件\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("再次运行“git status”，会显示绿色字体，表示该文件将要被提交，这时需要确认提交")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git commit -m '提交信息'  #提交信息主要写你提交了什么文件\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("提交完成")]),a._v(" "),t("p",[a._v("注：一旦修改了跟踪文件的内容，就要重新进行提交")]),a._v(" "),t("hr"),a._v(" "),t("h4",{attrs:{id:"创建分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建分支"}},[a._v("#")]),a._v(" 创建分支")]),a._v(" "),t("p",[a._v("先查看所有分支")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git branch\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("分支名称左边有“*”的默认为当前分支")]),a._v(" "),t("p",[a._v("创建分支")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git branch 分支名\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("既然分支创建好了，如何切换分支呢？我们需要输入命令")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git checkout 分支名\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("hr"),a._v(" "),t("h4",{attrs:{id:"下载版本库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载版本库"}},[a._v("#")]),a._v(" 下载版本库")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git clone 远程版本库地址  #默认名称为版本库名称，可以在后面加上自定义的名称\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("下载完成后，就可以在本地对版本库进行修改")]),a._v(" "),t("hr"),a._v(" "),t("h4",{attrs:{id:"提交版本库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提交版本库"}},[a._v("#")]),a._v(" 提交版本库")]),a._v(" "),t("p",[a._v("当修改完成之后，在git里面输入")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git push origin master\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("完成提交")]),a._v(" "),t("p",[a._v("但是远程版本库并不知道你已经更新了状态，这个时候我们需要输入")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git fetch\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("提示已经提取到更新，然后查看状态")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git status\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("查看显示远程上已经有了更新，然后我们需要进行")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git merge origin/master\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("这个时候当前分支就与“master”分支保持一致了")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("以上 2017-06-12\n")])])]),t("hr"),a._v(" "),t("center",[a._v("分割线")]),a._v(" "),t("hr"),a._v(" "),t("p",[a._v("在主分支master上创建子分支（如t1和t2）时，需要注意，创建t1成功后，需要切换回master分支再创建t2分支，这样t1和t2才会是平级的分支。")]),a._v(" "),t("p",[a._v("在工作中使用git进行代码管理时，需要注意公司采用图形化管理还是命令行管理，使用图形化管理时需要注意当前代码需改完成之后，需要进入gitlab下的项目中找到要提交的分支进行merge；命令行合并代码的时候，子分支进行到")]),a._v(" "),t("blockquote",[t("p",[a._v('git commit -m "xxx"')])]),a._v(" "),t("p",[a._v("时就可以切换分支进行合并，然后在主分支进行远程提交即可。")]),a._v(" "),t("p",[a._v("==另注：使用git一定要小心==")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("更新于 2019-07-11\n")])])])],1)}),[],!1,null,null,null);s.default=r.exports}}]);