(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{833:function(t,a,n){"use strict";n.r(a);var e=n(1),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h4",{attrs:{id:"_2020-06-21-16-01-00"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2020-06-21-16-01-00"}},[t._v("#")]),t._v(" 2020-06-21 16:01:00")]),t._v(" "),n("p",[t._v("食言了 不更新了 自己写框架真快乐")]),t._v(" "),n("p",[t._v("=================================")]),t._v(" "),n("p",[t._v("仅作为个人学习纪录，其他人只作为参考，图较少，会不断更新。\n项目地址 "),n("a",{attrs:{href:"http://www.bootdo.com/blog%20bootdo%E5%AE%98%E7%BD%91",target:"_blank",rel:"noopener noreferrer"}},[t._v("bootdo官网"),n("OutboundLink")],1)]),t._v(" "),n("ol",[n("li",[t._v("因为从git上下载的文件结构并不是习惯，所以将里面一层的复制到最完成根目录")]),t._v(" "),n("li",[t._v("idea导入，选择到项目以后，选择maven，一路默认选择到打开项目")]),t._v(" "),n("li",[t._v("将sql文件复制并在mysql中运行创建好数据库表")]),t._v(" "),n("li",[t._v("打开application-dev.yml文件，修改其中的数据库连接+用户名+密码。另外一个application-pro.yml文件是生产环境使用，具体使用哪一个是在application.yml中指定\n"),n("img",{attrs:{src:"https://img-blog.csdn.net/20180419174130503?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3R1dGlhbjIwMDA=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70",alt:"这里写图片描述"}})]),t._v(" "),n("li",[t._v("启动成功后应该是这样的\n"),n("img",{attrs:{src:"https://img-blog.csdn.net/20180419174227281?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3R1dGlhbjIwMDA=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70",alt:"这里写图片描述"}})]),t._v(" "),n("li",[t._v("访问  localhost  就能直接进项目主页了")])]),t._v(" "),n("p",[n("em",[n("strong",[t._v("2018-05-02更新")])]),t._v(" "),n("em",[n("strong",[t._v("更新内容:将mysql数据库更改为oracle数据库")])]),t._v("\n详细:\n1.修改端口   在application.yml的port从80改为8080\n如图："),n("img",{attrs:{src:"https://img-blog.csdn.net/20180502141839524?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3R1dGlhbjIwMDA=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70",alt:"这里写图片描述"}}),t._v("\n访问路径也从localhost改为http://localhost:8080/login")]),t._v(" "),n("p",[t._v("2.oracle不在maven仓库中必须要手动安装到本地maven仓库中。访问地址:http://www.oracle.com/technetwork/indexes/downloads/index.html   找到对应的版本下载好ojdbc的驱动。(我这边用的oracel版本为11.2.0.1.0，使用ojdbc6.jar就行)\n然后将ojdbc6.jar放到C:/用户   目录下，这样不用再改代码路径\n打开cmd运行")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("mvn install:install-file -DgroupId=com.oracle -DartifactId=ojdbc14 -Dversion=11.2.0.1.0 -Dpackaging=jar -Dfile=ojdbc6.jar  \n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v('运行成功后会提示"BULLD SUCCESS"说明安装成功了，我们可以去本地的maven仓库查看一下\n'),n("img",{attrs:{src:"https://img-blog.csdn.net/2018050214283716?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3R1dGlhbjIwMDA=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70",alt:"这里写图片描述"}}),t._v("\n如果你也是跟我一样的说明你安装成功了。")]),t._v(" "),n("p",[t._v("接下来再pom.xml中添加ojdbc的引用即可")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("<dependency>\n    <groupId>com.oracle</groupId>\n    <artifactId>ojdbc6</artifactId>\n    <version>11.2.0.1.0</version>\n</dependency>\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("p",[t._v("相应的在application-dev.yml中更改驱动包并且更换查询连接sql"),n("img",{attrs:{src:"https://img-blog.csdn.net/20180503090542805?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3R1dGlhbjIwMDA=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70",alt:"这里写图片描述"}})]),t._v(" "),n("p",[t._v("同时我们也需要更改activate流创建的数据库表，即在ActivitiConfig.java中将我红线框起来的部分改为oracle"),n("img",{attrs:{src:"https://img-blog.csdn.net/20180502143358163?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3R1dGlhbjIwMDA=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70",alt:"这里写图片描述"}})]),t._v(" "),n("p",[t._v("最后就是改mapper里面的sql语句了，这里不做记录。")])])}),[],!1,null,null,null);a.default=s.exports}}]);