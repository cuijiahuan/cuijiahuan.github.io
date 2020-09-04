(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{530:function(t,s,e){"use strict";e.r(s);var a=e(20),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("webpack是一个js的 "),e("strong",[t._v("静态模块打包工具")]),t._v("，同时也可以通过"),e("code",[t._v("loader")]),t._v("和插件来打包其他文件资源，如"),e("code",[t._v("css")]),t._v(","),e("code",[t._v("img")]),t._v("等。")]),t._v(" "),e("h2",{attrs:{id:"webpack的五个核心概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack的五个核心概念"}},[t._v("#")]),t._v(" webpack的五个核心概念")]),t._v(" "),e("h3",{attrs:{id:"entry"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#entry"}},[t._v("#")]),t._v(" entry")]),t._v(" "),e("p",[t._v("入口，指示webpack以哪个文件为入口起点开始打包")]),t._v(" "),e("h3",{attrs:{id:"ouptut"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ouptut"}},[t._v("#")]),t._v(" ouptut")]),t._v(" "),e("p",[t._v("输出，指示webpack打包后的资源(bundles)输出到哪里，以及文件命名")]),t._v(" "),e("h3",{attrs:{id:"loader"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#loader"}},[t._v("#")]),t._v(" loader")]),t._v(" "),e("p",[t._v("Loader(加载器)，让webpack能够去处理非js文件，如css，img等。")]),t._v(" "),e("h3",{attrs:{id:"plugins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#plugins"}},[t._v("#")]),t._v(" plugins")]),t._v(" "),e("p",[t._v("plugins(插件)，可以用于执行范围更广的任务，包括打包优化、代码压缩、定义环境变量等。")]),t._v(" "),e("h3",{attrs:{id:"mode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mode"}},[t._v("#")]),t._v(" mode")]),t._v(" "),e("p",[t._v("mode(模式)，指示webpack使用对应模式的配置\n"),e("table",{staticStyle:{"text-align":"center"}},[e("thead",[e("tr",[e("td",[t._v("选项")]),t._v(" "),e("td",[t._v("描述")]),t._v(" "),e("td",{attrs:{width:"150"}},[t._v("特点")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("development")]),t._v(" "),e("td",[t._v("会将process.env.NODE_ENV的值设置为development，启用NamedChunksPlugin和NamedModulesPlugin")]),t._v(" "),e("td",[t._v("能让代码本地调试运行的环境")])]),t._v(" "),e("tr",[e("td",[t._v("production")]),t._v(" "),e("td",[t._v("会将process.env.NODE_ENV的值设为production，启用FlagDependencyUsagePlugin，FlagIncludeChunksPlugin，ModuleConcatenationPlugin，NoEmitOnErrorsPlugin，OccurrenceOrderPligun，sideEffectsFlagPlugin和uglifyJsPlugiin")]),t._v(" "),e("td",[t._v("能让代码优化上线运行的环境")])])])])]),t._v(" "),e("p",[t._v("对于"),e("code",[t._v("process")]),t._v("不太了解的同学，"),e("code",[t._v("process")]),t._v("(进程)是node的一个全局变量，提供了有关当前node.js进程的信息并对其进行控制。作为全局变量，无需使用"),e("code",[t._v("reqiure()")]),t._v("引入。")]),t._v(" "),e("p",[t._v("为了确认"),e("code",[t._v("process.env中的值")]),t._v("，我们可以新建一个文件index.js，输入"),e("code",[t._v("console.log(process.env)")]),t._v("，然后在该文件夹目录下打开命令行，输入"),e("code",[t._v("node index.js")]),t._v("，就可以打印出"),e("code",[t._v("process.env")]),t._v("下的所有内容")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ALLUSERSPROFILE: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C:"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("ProgramData'")]),t._v(",\n  APPDATA: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C:"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Users"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("cuijiahuan"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("AppData"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Roaming'")]),t._v(",\n  CommonProgramFiles: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C:"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Program Files"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Common Files'")]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'CommonProgramFiles(x86)'")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C:"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Program Files (x86)"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Common Files'")]),t._v(",\n  CommonProgramW6432: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C:"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Program Files"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Common Files'")]),t._v(",\n  COMPUTERNAME: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'LAPTOP-BN9P3F4O'")]),t._v(",\n  ComSpec: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C:"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Windows"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("system32"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("cmd.exe'")]),t._v(",\n  DriverData: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C:"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Windows"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("System32"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Drivers"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("DriverData'")]),t._v(",\n  FPS_BROWSER_APP_PROFILE_STRING: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Internet Explorer'")]),t._v(",\n  FPS_BROWSER_USER_PROFILE_STRING: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Default'")]),t._v(",\n  HOMEDRIVE: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C:'")]),t._v(",\n  HOMEPATH: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Users"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("cuijiahuan'")]),t._v(",\n  LOCALAPPDATA: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C:"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Users"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("cuijiahuan"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("AppData"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Local'")]),t._v(",\n  LOGONSERVER: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("LAPTOP-BN9P3F4O'")]),t._v(",\n  MYSQL_HOME: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C:"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Program Files"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("MySQL"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("MySQL Server 8.0'")]),t._v(",\n  NUMBER_OF_PROCESSORS: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'8'")]),t._v(",\n  OneDrive: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C:"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Users"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("cuijiahuan"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("OneDrive'")]),t._v(",\n  ORIGINAL_XDG_CURRENT_DESKTOP: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'undefined'")]),t._v(",\n  OS: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Windows_NT'")]),t._v(",\n  Path: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C:"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Windows"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("system32;C:"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Windows;C:"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Windows"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("System32"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Wbem;C:"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Windows"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("System32"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("WindowsPowerShell"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("v1.0"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v(";C:"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Windows"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("System32"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("OpenSSH"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v(";C:"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Program Files"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("nodejs"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v(";C:"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Program Files"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Git"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("cmd;C:"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Program Files"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Intel"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("WiFi"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("bin"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v(";C:"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Program Files"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Common Files"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Intel"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("WirelessCommon"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v(";C:"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Program Files"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("MySQL"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("MySQL Server 8.0"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("bin;C:"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Users"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("cuijiahuan"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("AppData"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Local"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Microsoft"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("WindowsApps;C:"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Users"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("cuijiahuan"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("AppData"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Roaming"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("npm;C:"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Users"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("cuijiahuan"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("AppData"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Local"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Programs"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Microsoft VS Code"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("bin;C:"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Users"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("cuijiahuan"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("AppData"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Local"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("GitHubDesktop"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("bin;C:"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Program Files"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Bandizip"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("'")]),t._v(",    \n  PATHEXT: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL'")]),t._v(",\n  PROCESSOR_ARCHITECTURE: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'AMD64'")]),t._v(",\n  PROCESSOR_IDENTIFIER: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Intel64 Family 6 Model 142 Stepping 12, GenuineIntel'")]),t._v(",\n  PROCESSOR_LEVEL: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'6'")]),t._v(",\n  PROCESSOR_REVISION: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'8e0c'")]),t._v(",\n  ProgramData: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C:"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("ProgramData'")]),t._v(",\n  ProgramFiles: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C:"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Program Files'")]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ProgramFiles(x86)'")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C:"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Program Files (x86)'")]),t._v(",\n  ProgramW6432: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C:"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Program Files'")]),t._v(",\n  PSModulePath: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C:"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Users"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("cuijiahuan"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Documents"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("WindowsPowerShell"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Modules;C:"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Program Files"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("WindowsPowerShell"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Modules;C:"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Windows"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("system32"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("WindowsPowerShell"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("v1.0"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Modules'")]),t._v(",\n  PUBLIC: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C:"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Users"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Public'")]),t._v(",\n  SESSIONNAME: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Console'")]),t._v(",\n  SystemDrive: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C:'")]),t._v(",\n  SystemRoot: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C:"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Windows'")]),t._v(",\n  TEMP: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C:"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Users"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("CUIJIA~1"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("AppData"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Local"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Temp'")]),t._v(",\n  TMP: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C:"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Users"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("CUIJIA~1"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("AppData"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Local"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Temp'")]),t._v(",\n  USERDOMAIN: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'LAPTOP-BN9P3F4O'")]),t._v(",\n  USERDOMAIN_ROAMINGPROFILE: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'LAPTOP-BN9P3F4O'")]),t._v(",\n  USERNAME: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cuijiahuan'")]),t._v(",\n  USERPROFILE: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C:"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Users"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("cuijiahuan'")]),t._v(",\n  windir: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C:"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Windows'")]),t._v(",\n  TERM_PROGRAM: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vscode'")]),t._v(",\n  TERM_PROGRAM_VERSION: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1.48.2'")]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("LANG")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zh_CN.UTF-8'")]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("COLORTERM")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'truecolor'")]),t._v(",\n  VSCODE_GIT_IPC_HANDLE: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("."),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("pipe"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("vscode-git-578b53cf8a-sock'")]),t._v(",\n  GIT_ASKPASS: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'c:"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Users"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("cuijiahuan"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("AppData"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Local"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Programs"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Microsoft VS Code"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("resources"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("app"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("extensions"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("git"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("dist"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("askpass.sh'")]),t._v(",\n  VSCODE_GIT_ASKPASS_NODE: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C:"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Users"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("cuijiahuan"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("AppData"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Local"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Programs"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Microsoft VS Code"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Code.exe'")]),t._v(",\n  VSCODE_GIT_ASKPASS_MAIN: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'c:"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Users"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("cuijiahuan"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("AppData"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Local"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Programs"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Microsoft VS Code"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("resources"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("app"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("extensions"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("git"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("dist"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("askpass-main.js'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br"),e("span",{staticClass:"line-number"},[t._v("24")]),e("br"),e("span",{staticClass:"line-number"},[t._v("25")]),e("br"),e("span",{staticClass:"line-number"},[t._v("26")]),e("br"),e("span",{staticClass:"line-number"},[t._v("27")]),e("br"),e("span",{staticClass:"line-number"},[t._v("28")]),e("br"),e("span",{staticClass:"line-number"},[t._v("29")]),e("br"),e("span",{staticClass:"line-number"},[t._v("30")]),e("br"),e("span",{staticClass:"line-number"},[t._v("31")]),e("br"),e("span",{staticClass:"line-number"},[t._v("32")]),e("br"),e("span",{staticClass:"line-number"},[t._v("33")]),e("br"),e("span",{staticClass:"line-number"},[t._v("34")]),e("br"),e("span",{staticClass:"line-number"},[t._v("35")]),e("br"),e("span",{staticClass:"line-number"},[t._v("36")]),e("br"),e("span",{staticClass:"line-number"},[t._v("37")]),e("br"),e("span",{staticClass:"line-number"},[t._v("38")]),e("br"),e("span",{staticClass:"line-number"},[t._v("39")]),e("br"),e("span",{staticClass:"line-number"},[t._v("40")]),e("br"),e("span",{staticClass:"line-number"},[t._v("41")]),e("br"),e("span",{staticClass:"line-number"},[t._v("42")]),e("br"),e("span",{staticClass:"line-number"},[t._v("43")]),e("br"),e("span",{staticClass:"line-number"},[t._v("44")]),e("br"),e("span",{staticClass:"line-number"},[t._v("45")]),e("br"),e("span",{staticClass:"line-number"},[t._v("46")]),e("br"),e("span",{staticClass:"line-number"},[t._v("47")]),e("br"),e("span",{staticClass:"line-number"},[t._v("48")]),e("br"),e("span",{staticClass:"line-number"},[t._v("49")]),e("br"),e("span",{staticClass:"line-number"},[t._v("50")]),e("br"),e("span",{staticClass:"line-number"},[t._v("51")]),e("br")])]),e("p",[t._v("可以发现NODE_ENV在process.env中是不存在的，它其实是我们自定义的变量，在webpack中用来判断是生产环境还是开发环境。")]),t._v(" "),e("h2",{attrs:{id:"安装webpack"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装webpack"}},[t._v("#")]),t._v(" 安装webpack")]),t._v(" "),e("p",[t._v("【默认已经安装了node.js】安装时先全局安装，然后在对应的项目目录下本地安装")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" webpack webpack-cli     // 全局安装\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" webpack webpack-cli -D      // 本地安装\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("安装完成之后，可以使用"),e("code",[t._v("webpack -v")]),t._v("来查询版本号，如果可以查到，就证明webpack安装成功。")]),t._v(" "),e("h2",{attrs:{id:"运行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[t._v("#")]),t._v(" 运行")]),t._v(" "),e("p",[t._v("安装完成之后，我们可以在项目中创建"),e("code",[t._v("webpack.config.js")]),t._v("文件来定义配置信息，框架如下")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 项目目录")]),t._v("\n01webpack安装\n    -build\n    -src\n        --index.js\n        --index.html\n    --webpack.config.js\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## webpack.config.js代码")]),t._v("\nconst "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" resolve "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" require"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmodule.exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    //入口文件\n    entry: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/index.js'")]),t._v(",\n    //输出\n    output: "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        filename: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'build.js'")]),t._v(",\n        path: resolve"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname, "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'build'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n    //loader加载器\n    module: "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        rules: "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n    //插件\n    plugins: "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n    //打包模式，开发/生产\n    mode: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'development'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br"),e("span",{staticClass:"line-number"},[t._v("24")]),e("br"),e("span",{staticClass:"line-number"},[t._v("25")]),e("br"),e("span",{staticClass:"line-number"},[t._v("26")]),e("br"),e("span",{staticClass:"line-number"},[t._v("27")]),e("br")])]),e("p",[t._v("以上是webpack配置信息的一个框架，后续对文件资源进行处理时会相应增加打包流程代码")])])}),[],!1,null,null,null);s.default=n.exports}}]);