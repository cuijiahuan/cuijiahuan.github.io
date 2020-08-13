(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{361:function(s,t,e){"use strict";e.r(t);var a=e(42),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"git-分享（一）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-分享（一）"}},[s._v("#")]),s._v(" "),e("center",[s._v("git 分享（一）")])],1),s._v(" "),e("p",[e("img",{attrs:{src:"http://www.leyar.me/images/bg2015120901.png",alt:""}})]),s._v(" "),e("p",[s._v("本地仓库由git维护的三颗“树”组成，第一个是“工作目录”，它持有实际文件；第二个是“暂存区”，它类似于缓存区域，临时保存你的改动；最后是“HEAD”，它指向你最后一次提交的结果")]),s._v(" "),e("p",[s._v("使用git的每次提交，Git都会自动把它们串成一条时间线，这条时间线就是一个分支。如果没有新建分支，那么只有一条时间线，即只有一个分支，在Git里，这个分支叫主分支，即master分支。有一个HEAD指针指向当前分支（只有一个分支的情况下会指向master，而master是指向最新提交）。每个版本都会有自己的版本信息，如特有的版本号、版本名等。\n"),e("img",{attrs:{src:"https://i.ibb.co/km6c4GY/HEAD.png",alt:""}})]),s._v(" "),e("ul",[e("li",[s._v("git clone 将远程仓库下载到本地，创建一个远程仓库的克隆版本")]),s._v(" "),e("li",[e("u",[e("code",[s._v("git fetch / pull 将远程分支代码拉取到本地")])])]),s._v(" "),e("li",[s._v("git checkout 切换分支")]),s._v(" "),e("li",[s._v("git add 将修改的文件放入暂存区域")]),s._v(" "),e("li",[s._v("git commit 给暂存区域生成快照并提交到当前分支")]),s._v(" "),e("li",[s._v("git push 提交当前分支修改")]),s._v(" "),e("li",[e("u",[e("code",[s._v("git reset / revert 回滚操作")])])]),s._v(" "),e("li",[e("u",[e("code",[s._v("git rebase / merge 分支合并")])])])]),s._v(" "),e("hr"),s._v(" "),e("h3",{attrs:{id:"git-fetch-pull"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-fetch-pull"}},[s._v("#")]),s._v(" "),e("em",[e("strong",[s._v("git fetch / pull")])])]),s._v(" "),e("p",[e("code",[s._v("git fetch 将远程分支的代码拉到本地，开发者需要自己检查决定是否合并到工作分支")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git fetch <远程仓库> <分支>\n\n🌰 git fetch origin master\n\n在拉取更新之后，使用\ngit log -p FETCH_HEAD\n来查看更新信息，通过更新信息来判断远程和本地是否会产生冲突，以及是否将更新的信息合并到本地分支\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("br"),s._v(" "),e("p",[e("code",[s._v("git pull 将远程仓库的最新代码拉取下来后直接合并")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git pull <远程仓库> <远程分支>:<本地分支>\n\n🌰 git pull origin master:develop\n\ngit pull的过程其实也可以理解为是git fetch + git merge \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("hr"),s._v(" "),e("h3",{attrs:{id:"git-reset-revert"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-reset-revert"}},[s._v("#")]),s._v(" "),e("em",[e("strong",[s._v("git reset / revert")])])]),s._v(" "),e("p",[e("code",[s._v("git reset 将HEAD指向的位置改变为之前存在的某个版本")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://i.ibb.co/KDVkwZm/reset.png",alt:""}})]),s._v(" "),e("p",[s._v("适用场景：如果想恢复到之前某个提交的版本并且之后的提交的版本都可以不要，就可以使用reset")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git reset --soft\n只移动当前HEAD指针，不会改变工作区和暂存区的内容\n\ngit reset --mixed\n移动HEAD指针，改变暂存区内容，但不会改变工作区(默认参数)\n \ngit reset --hard\nHEAD指针、工作区和暂存区全部改变\n\n🌰  使用git add提交到暂存区，但还没有commit\n    - 可以直接使用 git reset --hard 覆盖当前暂存区和工作区\n    - 可以使用 git reset --mixed 覆盖暂存区内容，在使用 git checkout . 用暂存区内容覆盖工作区内容\n\n🌰  已经git commit，但还没有push\n    - 使用 git reset --hard origin/master 从远程仓库把代码取回来，然后覆盖本地仓库、暂存区和工作区\n    - 使用 git reset --hard <上一次commit id> 进行覆盖本地仓库、暂存区、工作区\n\n🌰  已经push\n    - 使用 git reset --hard <commit id> 将内容完全覆盖掉\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br")])]),e("p",[s._v("git reset 通过取消缓存或者取消一系列提交的操作会摒弃一些你当前工作目录上的更改")]),s._v(" "),e("br"),s._v(" "),e("p",[e("code",[s._v("git revert 通过进行覆盖版本的操作来达到撤销该版本的修改")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://i.ibb.co/TWSSXRj/revert.png",alt:""}})]),s._v(" "),e("p",[s._v("适用场景：如果我们想撤销之前的某一版本，但是又想保留该目标版本后面的版本，记录下这整个版本变动流程，就可以用这种方法")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git revert HEAD\n撤销前一次的commit \n\ngit revert HEAD^n\n撤销前n次的commit\n\ngit revert <commit id>\n撤销指定版本\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("hr"),s._v(" "),e("h3",{attrs:{id:"git-rebase-merge"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-rebase-merge"}},[s._v("#")]),s._v(" "),e("em",[e("strong",[s._v("git rebase / merge")])])]),s._v(" "),e("p",[e("code",[s._v("git rebase 会取消分支中的每个提交并把它们临时存放，然后把当前分支更新到最新的master分支，最后再把所有提交应用到分支上")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("使用rebase合并多个commit\ngit rebase -i <commit startId> <commit endId>\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("br"),s._v(" "),e("p",[e("code",[s._v("git merge 将两个分支，合并提交为一个分支")])]),s._v(" "),e("hr"),s._v(" "),e("h4",{attrs:{id:"git同时连接gitlab和github"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git同时连接gitlab和github"}},[s._v("#")]),s._v(" "),e("em",[e("strong",[s._v("git同时连接gitlab和github")])])]),s._v(" "),e("p",[s._v('生成gitlab和github的ssh key\n$ ssh-keygen -t rsa -C "your.email@example.com"')]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("- id_rsa_ggithub\n- id_rsa_ggithub.pub \n- id_rsa_tujia\n- id_rsa_tujia.pub\n")])])]),e("p",[s._v("gitlab和github中添加ssh key")]),s._v(" "),e("p",[s._v("添加config文件")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ touch config\n$ vim config\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("添加内容为")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# gitlab\nHost gitlab\n    User git\n    HostName gitlab.cheanjiait.com\n    PreferredAuthentications publickey\n    IdentityFile ~/.ssh/id_rsa\n\n# github\nHost github\n    User git\n    HostName github.com\n    PreferredAuthentications publickey\n    IdentityFile ~/.ssh/id_rsa_github\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("p",[s._v("测试连接")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ ssh -T github\n\n$ ssh -T gitlab\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("使用github时，在项目下初始化git的时候记得定义好user.name和user.email")]),s._v(" "),e("p",[s._v("$ git config --local user.name xxx")]),s._v(" "),e("p",[s._v("$ git config --local user.email xxx@xxx.com")])])}),[],!1,null,null,null);t.default=n.exports}}]);