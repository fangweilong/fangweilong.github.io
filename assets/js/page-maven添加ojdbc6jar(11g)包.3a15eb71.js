(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{814:function(e,s,a){"use strict";a.r(s);var n=a(1),t=Object(n.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[a("em",[e._v("不要通过oracle官网下，折腾了我一下午都没安装成功。\n建议通过maven repo网站的下载：https://mvnrepository.com/artifact/oracle/ojdbc6/11.2.0.3")])]),e._v(" "),a("p",[e._v("PS:以下步骤默认你maven已经装好了，配置都做好了。如果配置还没搞好请参阅我另一篇博客：https://blog.csdn.net/tutian2000/article/details/79132758\n1.点击红框下，下载jar包到本地"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20181126162921798.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3R1dGlhbjIwMDA=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),e._v("\n2.执行cmd命令")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mvn install:install-file -Dfile=C:/Users/Teler/Downloads/ojdbc6-11.2.0.3.jar -DgroupId=com.oracle -DartifactId=ojdbc6 -Dversion=11.2.0.3 -Dpackaging=jar\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v('如果你是通过我上面提供的链接下载的，那么除了"-Dfile="后面的本地路径改成你自己的以外什么都不要动。\n3.显示build success即安装成功\n没图，安装的时候忘了截图了\n4.项目引用')]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<dependency>\n   <groupId>com.oracle</groupId>\n   <artifactId>ojdbc6</artifactId>\n   <version>11.2.0.3</version>\n</dependency>\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);