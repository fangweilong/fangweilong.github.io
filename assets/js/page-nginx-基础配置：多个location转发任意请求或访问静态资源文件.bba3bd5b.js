(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{872:function(s,t,n){"use strict";n.r(t);var a=n(1),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("2018-08-10更新")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("server {\n\t\t#监听的端口\n        listen       80;\n\t\t#监听的域名\n        server_name  localhost;\n\n\t\t#监听带后缀的url\n\t\tlocation ^~\\.txt {\n\t\t\t#文件放到/html文件夹下\n            root /;\n        }\n\t\t#监听所有url，没有特殊需求就用这一个location就够了\n\t\t#使用通配符只有在没有匹配上其他location的情况下会进入\n        location / {\n\t\t\t#去掉了只有url才转发的限制，因为直接访问域名会通不过if从而转发不了请求。\n\t\t\t\n\t\t\tproxy_pass http://localhost:8080;\n        }\n    }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("p",[s._v("附带上匹配规则："),n("img",{attrs:{src:"https://img-blog.csdn.net/20180810164225142?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3R1dGlhbjIwMDA=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70",alt:"这里写图片描述"}}),s._v("\n里面的规则自己尝试一下就明白了")]),s._v(" "),n("p",[s._v("以下 为原文↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("server {\n\t\t#监听的端口\n        listen       80;\n\t\t#监听的域名\n        server_name  localhost;\n\n\t\t#监听带后缀的url\n\t\tlocation ^~\\.txt {\n\t\t\t#文件放到/html文件夹下\n            root /;\n        }\n\t\t#监听所有url，没有特殊需求就用这一个location就够了\n        location / {\n\t\t\t#没有后缀的请求才会转发 是为了配合上一个location能访问到资源文件而不是转发所有请求。没有特殊需求就不要判断直接proxy_pass到请求\n\t\t\tif (!-e $request_filename){\n\t\t\t\tproxy_pass http://localhost:8080;\n\t\t\t\tbreak;\n\t\t\t}\n        }\n    }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("p",[s._v("location可以添加多个，但是要注意相互之间不要冲突，否则转发多种会请求超时")])])}),[],!1,null,null,null);t.default=e.exports}}]);