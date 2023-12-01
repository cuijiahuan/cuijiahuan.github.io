(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{549:function(s,a,t){"use strict";t.r(a);var e=t(9),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"git-stash介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-stash介绍"}},[s._v("#")]),s._v(" git stash介绍")]),s._v(" "),t("p",[s._v("使用git stash时要录制工作目录和索引的当前状态，但想回到干净的工作目录。该命令保存您的本地修改，并恢复工作目录以匹配HEAD提交。")]),s._v(" "),t("p",[s._v("简单说就是如果你想把错误分支开发的新代码提交到正确的分支，就可以使用 "),t("code",[s._v("git stash")]),s._v(" 命令来实现。")]),s._v(" "),t("p",[s._v("git stash命令会把我们工作区和暂存区的修改保存下来，然后将这些修改的内容从当前的文件中移出并保存在存档库里面。所以我们就回到了之前没有修改过内容的干净的工作区。")]),s._v(" "),t("h2",{attrs:{id:"使用背景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用背景"}},[s._v("#")]),s._v(" 使用背景")]),s._v(" "),t("p",[t("strong",[s._v("在错误的分支开发了新代码")])]),s._v(" "),t("p",[s._v("当前的分支是错误的、已经废弃的分支，但是开发者不知道，并且在此分支开发新的代码，此时有以下三种情况")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("新代码还未在本地提交 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("commit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n新代码本地已提交，但还未push到远程\n新代码本地已经提交，且push到远程\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"_1、新代码还未在本地提交-commit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、新代码还未在本地提交-commit"}},[s._v("#")]),s._v(" 1、新代码还未在本地提交 (commit)")]),s._v(" "),t("p",[s._v("举个栗子，有如下三个分支：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("master\none   // 错误分支\ntwo   // 正确分支\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("我们在 "),t("strong",[s._v("one")]),s._v(" 分支下分别创建 "),t("strong",[t("code",[s._v("src/index.html")])]),s._v("、**"),t("code",[s._v("src/js/index.js")]),s._v("**文件，并写入一些内容，之后我们使用 "),t("code",[s._v("git add .")]),s._v(" 提交到暂存区，这时我们发现 "),t("strong",[s._v("two")]),s._v(" 分支才是正确分支，幸好此时代码还没有本地进行提交，只需要在当前的 "),t("strong",[s._v("one")]),s._v(" 分支下命令行输入")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这个命令表示把我们当前修改的内容暂存起来，并且工作区会恢复到没有开发新功能之前的代码。")]),s._v(" "),t("p",[s._v("输入完成运行，我们会发现命令行会输出")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Saved working directory and index state WIP on master: 2d34170 第一次提交\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这里需要注意， "),t("code",[s._v("git stash")]),s._v(" 默认相当于 "),t("code",[s._v("git stash push")]),s._v(" 命令，并且输出内容以统一格式输出")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Saved working directory and index state WIP on <branchname>: <hash> <commit message>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("其中 "),t("code",[s._v("branchname")]),s._v(" 是当前所在分支的名字，"),t("code",[s._v("hash")]),s._v(" 是当前分支最近一次提交的hash值，"),t("code",[s._v("commit message")]),s._v(" 是最近的一次提交的时候添加的提交信息。")]),s._v(" "),t("p",[s._v("之后我们切换到正确分支，然后再使用")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash apply\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这个命令表示把我们之前暂存的内容，应用到当前分支。这样就相当于把修改的内容从一个分支移动到了另一个分支。")]),s._v(" "),t("p",[s._v("另外，当只执行一次修改暂存时，我们可以使用 "),t("code",[s._v("git stash")]),s._v(" 直接进行，当需要多次修改暂存时，我们可以使用 "),t("code",[s._v("git stash push -m message")]),s._v(" 来进行说明，这样可以便于识别。")]),s._v(" "),t("p",[s._v("此外，当我们有较多的修改暂存时，可以使用 "),t("code",[s._v("git stash list")]),s._v(" 来查看当前修改列表，这个命令默认展示的是文件的差别统计。如果想展示具体改动的内容的话，可以使用 "),t("code",[s._v("git stash show -p")]),s._v("。")]),s._v(" "),t("h3",{attrs:{id:"_2、新代码本地已提交-但还未push到远程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、新代码本地已提交-但还未push到远程"}},[s._v("#")]),s._v(" 2、新代码本地已提交，但还未push到远程")]),s._v(" "),t("p",[s._v("根据情况这个问题可以有两种处理的方式。")]),s._v(" "),t("h4",{attrs:{id:"将新代码移到新分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将新代码移到新分支"}},[s._v("#")]),s._v(" "),t("strong",[s._v("将新代码移到新分支")])]),s._v(" "),t("p",[s._v("首先使用 "),t("code",[s._v("git log")]),s._v(" 查看当前分支的提交(假设是2d34170)，找到后我们使用 "),t("code",[s._v("git reset 2d34170")]),s._v(" 把当前分支已提交的内容重置到我们开发新功能之前的样子，现在fd01444处于这次提交之后的所有提交都会被重置为没有提交的状态。")]),s._v(" "),t("p",[s._v("接下来我们需要把这些新开发的功能迁移到一个新的分支。这时候我们可以使用 "),t("code",[s._v("git checkout -b <new branch>")]),s._v(" 来进行操作。操作完成后即将新代码移到新的分支。")]),s._v(" "),t("h4",{attrs:{id:"将新代码移到另一个分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将新代码移到另一个分支"}},[s._v("#")]),s._v(" "),t("strong",[s._v("将新代码移到另一个分支")])]),s._v(" "),t("p",[s._v("如果我们需要把当前添加的新功能迁移到另一个已经存在的分支，那么我们需要做的前几个步骤跟上面的操作是一样的：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查找新功能开发之前的提交")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("commit hash"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将当前分支重置到新功能开发之前的提交")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("接下来我们现在的状态就回到了新功能还没有提交的状态，那么就可以继续使用 "),t("code",[s._v("git stash")]),s._v(" 相关的命令去操作了。")]),s._v(" "),t("p",[s._v("我们还有另外一个方法也能够将已提交到当前分支的功能添加到另一个分支上，那就是使用 "),t("code",[s._v("git cherry-pick")]),s._v(" 命令。首先我们还是先用 "),t("code",[s._v("git log")]),s._v(" 查找当前已提交的功能的hash值，然后切换到目标分支，运行命令：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" cherry-pick "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("commit hash"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这样就把我们在另一个分支开发的功能，添加到我们想要的分支了。如果有冲突的话，需要手动处理一下冲突。然后我们回到最初的分支，再次运行 "),t("code",[s._v("git reset <commit hash>")]),s._v(" 命令，把已提交的内容进行重置，然后运行命令：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -- "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("把当前分支没有添加到暂存区的内容都清除掉，这样也可以达到我们上面所说的，把新功能添加到另一个分支的目的。")]),s._v(" "),t("h3",{attrs:{id:"_3、新代码本地已经提交-且push到远程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、新代码本地已经提交-且push到远程"}},[s._v("#")]),s._v(" 3、新代码本地已经提交，且push到远程")]),s._v(" "),t("p",[s._v("如果已经提交到远程了，第一步要做的就是进行代码回滚，保证远程不被污染，其次对自己的提交进行撤销。")])])}),[],!1,null,null,null);a.default=n.exports}}]);