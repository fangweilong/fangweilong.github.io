(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{567:function(t,s,n){"use strict";n.r(s);var a=n(14),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"_1-vue-cli3-x"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-vue-cli3-x"}},[t._v("#")]),t._v(" 1.vue-cli3.x")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/2019071613392824.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3R1dGlhbjIwMDA=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),t._v('\n在根目录下找到"vue.config.js"\n'),n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190716134038552.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3R1dGlhbjIwMDA=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),t._v("\n更改"),n("code",[t._v("publicPath: '/portal/'")]),t._v(' 的 portal 为你自己的项目名，记得前后的"/"')]),t._v(" "),n("h2",{attrs:{id:"_2-vue-cli2-x"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-vue-cli2-x"}},[t._v("#")]),t._v(" 2.vue-cli2.x")]),t._v(" "),n("p",[t._v("找到config/index.js文件\n"),n("img",{attrs:{src:"https://img-blog.csdnimg.cn/2019071616150043.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3R1dGlhbjIwMDA=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),t._v('\n找到"build"部分\n'),n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190716161557630.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3R1dGlhbjIwMDA=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),t._v("\n同样的更改"),n("code",[t._v("assetsPublicPath: '/gardan/',")]),t._v('为你自己的项目名， 别忘了前后的"/"')]),t._v(" "),n("p",[t._v("3.nginx的配置\n在nginx的html下新建两个文件夹，一个gardan，一个portal")]),t._v(" "),n("p",[t._v("打开config/nginx.conf文件夹，按照下面的配置项更改，我做了部分删减，只留下了实际更改的部分")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("server {\n        listen       8080;\n        server_name  localhost;\n\n        location /gardan {#项目1\n\t\t\ttry_files $uri $uri/ /gardan/index.html;#指定到目录下的index.jtml\n\t\t}\n\t\t\n\t\tlocation /portal {//项目2\n\t\t\ttry_files $uri $uri/ /portal/index.html;#指定到目录下的index.jtml\n\t\t}\n    }\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);