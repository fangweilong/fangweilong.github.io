(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{816:function(s,a,t){"use strict";t.r(a);var e=t(1),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1-maven安装前先确定你本地的jdk是否安装-环境变量是否配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-maven安装前先确定你本地的jdk是否安装-环境变量是否配置"}},[s._v("#")]),s._v(" 1.maven安装前先确定你本地的jdk是否安装，环境变量是否配置")]),s._v(" "),t("hr"),s._v(" "),t("h2",{attrs:{id:"_2-maven的官网-点击打开官网"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-maven的官网-点击打开官网"}},[s._v("#")]),s._v(" 2.maven的官网:"),t("a",{attrs:{href:"http://maven.apache.org/download.cgi",target:"_blank",rel:"noopener noreferrer"}},[s._v("点击打开官网"),t("OutboundLink")],1)]),s._v(" "),t("hr"),s._v(" "),t("h2",{attrs:{id:"_3-下载后解压-我用的是解压版-建议自定义目录-将所有开发中需要用到的例如jdk-idea等都放入同一个文件夹中-这样好找并且好管理。一定要记住你的目录-并且不要出现各种奇怪的字符或者中文-不然出现各种问题哭都来不及"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-下载后解压-我用的是解压版-建议自定义目录-将所有开发中需要用到的例如jdk-idea等都放入同一个文件夹中-这样好找并且好管理。一定要记住你的目录-并且不要出现各种奇怪的字符或者中文-不然出现各种问题哭都来不及"}},[s._v("#")]),s._v(" 3.下载后解压（我用的是解压版），建议自定义目录，将所有开发中需要用到的例如jdk,idea等都放入同一个文件夹中，这样好找并且好管理。一定要记住你的目录！！！并且不要出现各种奇怪的字符或者中文，不然出现各种问题哭都来不及")]),s._v(" "),t("hr"),s._v(" "),t("h2",{attrs:{id:"_4-配置maven的环境变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-配置maven的环境变量"}},[s._v("#")]),s._v(" 4.配置maven的环境变量")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("系统变量：\nMAVEN_HOME = 你的maven路径\n\n用户变量：\npath = %MAVEN_HOME%\\bin\n")])])]),t("hr"),s._v(" "),t("h3",{attrs:{id:"_5-打开cmd-输入命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-打开cmd-输入命令"}},[s._v("#")]),s._v(" 5. 打开cmd,输入命令")]),s._v(" "),t("div",{staticClass:"language-cmd line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\tmvn -version\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{staticStyle:{"font-size":"14px","white-space":"pre-wrap",color:"rgb(51,51,51)","font-family":"Verdana","text-indent":"28px"},attrs:{src:"https://img-blog.csdn.net/20180122194742713?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdHV0aWFuMjAwMA==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast",alt:""}})]),t("p",[s._v("在这里我们可以看到maven的一些参数，如果有出现这个就不用管，说明我们初始的maven配置成功了")]),s._v(" "),t("hr"),s._v(" "),t("h2",{attrs:{id:"_6-修改maven的仓库位置-这一步没有需求的可以跳过直接看第7步-不是必需步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-修改maven的仓库位置-这一步没有需求的可以跳过直接看第7步-不是必需步骤"}},[s._v("#")]),s._v(" 6.修改maven的仓库位置（这一步没有需求的可以跳过直接看第7步，不是必需步骤）")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("  找到maven/conf/settings.xml(不是.m2文件夹下的,两个有何不同请看文章结尾)，我的是在D:\\Server\\maven\\conf\\settings.xml\n")])])]),t("img",{attrs:{src:"https://img-blog.csdn.net/20180122195555425?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdHV0aWFuMjAwMA==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast",alt:""}}),s._v(" "),t("p",[s._v("找到这一行，按照你自己设置的文件夹的填入地址，以后maven下载的包都会在这个路径下，而不是在C:\\Users\\admcnm.m2\\repository的默认文件夹下面")]),s._v(" "),t("hr"),s._v(" "),t("h2",{attrs:{id:"_7-修改镜像地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-修改镜像地址"}},[s._v("#")]),s._v(" 7.修改镜像地址")]),s._v(" "),t("img",{attrs:{src:"https://img-blog.csdn.net/20180122200049294?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdHV0aWFuMjAwMA==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast",alt:""}}),s._v(" "),t("p",[s._v("还是在settings.xml文件中，找到如图所在的位置，添加或修改红框框起来的内容")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("<mirror>\n\t<id>nexus-aliyun<id>\n\t<mirrorOf>*<mirrorOf>\n\t<name>Nexus aliyun<name>\n\t<url>http://maven.aliyun.com/nexus/content/groups/public<url>\n<mirror>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("修改完以后我们下载jar包都是在阿里云的镜像中下载，而不是国外的地址，速度会快很多")]),s._v(" "),t("hr"),s._v(" "),t("h2",{attrs:{id:"_8-下载基础包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-下载基础包"}},[s._v("#")]),s._v(" 8.下载基础包")]),s._v(" "),t("p",[s._v("在cmd中输入命令并执行：")]),s._v(" "),t("div",{staticClass:"language-cmd line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mvn help:system\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果此时出现下载各种包，那么maven的基础配置就完成。但是如果你和我一样出现了这种问题")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[ERROR] Error executing Maven.\n[ERROR] 3 problems were encountered while building the effective settings\n[WARNING] Unrecognised tag: 'activeProfiles' (position: START_TAG seen ...\\u4e0d\\u5230\\u8fd9\\u6837\\u4e00\\u4e2aprofile\\uff0cMaven\\u5219\\u4f1a\\u50cf\\u5f80\\u5e38\\u4e00\\u6837\\u8fd0\\u884c\\u3002  --;  \\r\\n            ;activeProfiles;... @288:29)  @ C:\\Users\\Administrator\\.m2\\settings.xml, line 288, column 29\n[ERROR] 'profiles.profile[test].pluginRepositories.pluginRepository.id' for  is missing @ C:\\Users\\Administrator\\.m2\\settings.xml\n[ERROR] 'profiles.profile[test].pluginRepositories.pluginRepository.url' for  is missing @ C:\\Users\\Administrator\\.m2\\settings.xml\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("那么删除你\nC:\\Users\\用户名.m2\\settings.xml文件后再试。")]),s._v(" "),t("hr"),s._v(" "),t("h2",{attrs:{id:"_9-idea2017-3-1配置maven"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-idea2017-3-1配置maven"}},[s._v("#")]),s._v(" 9.idea2017.3.1配置maven")]),s._v(" "),t("img",{attrs:{src:"https://img-blog.csdn.net/20180122201319636?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdHV0aWFuMjAwMA==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast"}}),s._v(" "),t("hr"),s._v(" "),t("ul",[t("li",[s._v(".m2文件下的settings.xml文件是我们这台电脑当前登录用户使用的自定义配置文件，其他maven文件中的setting.xml是全局配置文件，当用户配置文件和全局配置文件都存在时系统会默认先使用用户的配置文件，我个人习惯使用全局配置文件，同一路径下好管理，与其他人共同使用时也好统一。*")])])])}),[],!1,null,null,null);a.default=r.exports}}]);