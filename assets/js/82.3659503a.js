(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{408:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"openssl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#openssl"}},[s._v("#")]),s._v(" openssl")]),s._v(" "),t("h3",{attrs:{id:"官网"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#官网"}},[s._v("#")]),s._v(" 官网")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("https://www.openssl.org/\n")])])]),t("h3",{attrs:{id:"git自带"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git自带"}},[s._v("#")]),s._v(" git自带")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("我这里采用的是git bash中自带的openssl\n")])])]),t("h2",{attrs:{id:"开始制作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开始制作"}},[s._v("#")]),s._v(" 开始制作")]),s._v(" "),t("h3",{attrs:{id:"生成-key-私钥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成-key-私钥"}},[s._v("#")]),s._v(" 生成 .key 私钥")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("openssl genrsa -out ssl.key 4096\n")])])]),t("h3",{attrs:{id:"生成csr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成csr"}},[s._v("#")]),s._v(" 生成csr")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("openssl req -new -key ssl.key -out ssl.csr\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("需要输出 国家 省份 城市 项目名或个人用户名\n如果没有非常严格的硬性要求，自己输入就好")])]),s._v(" "),t("h3",{attrs:{id:"生成crt"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成crt"}},[s._v("#")]),s._v(" 生成crt")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("openssl x509 -req -days 365 -in ssl.csr -signkey ssl.key -out ssl.crt\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("-days:设置过期天数，我这里是设置为了365天")])]),s._v(" "),t("h2",{attrs:{id:"生成总览"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成总览"}},[s._v("#")]),s._v(" 生成总览")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("文件名")]),s._v(" "),t("th",{staticStyle:{"text-align":"center"}},[s._v("类型")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("ssl.key")]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}},[s._v("KEY文件")])]),s._v(" "),t("tr",[t("td",[s._v("ssl.crt")]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}},[s._v("安全证书")])]),s._v(" "),t("tr",[t("td",[s._v("ssl.csr")]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}},[s._v("CSR文件")])])])]),s._v(" "),t("p",[s._v("我们其实只需要里面的ssl.crt和ssl.key")]),s._v(" "),t("h2",{attrs:{id:"上传文件并设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#上传文件并设置"}},[s._v("#")]),s._v(" 上传文件并设置")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" ssl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server_name  "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$hostname")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    ssl_certificate /etc/nginx/ssl/ssl.crt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    ssl_certificate_key /etc/nginx/ssl/ca.key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    location / "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        root   /usr/share/nginx/html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        index  index.html index.htm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h2",{attrs:{id:"访问"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#访问"}},[s._v("#")]),s._v(" 访问")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://imgtu.com/i/WrOb8S",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://z3.ax1x.com/2021/07/23/WrOb8S.md.png",alt:"WrOb8S.md.png"}}),t("OutboundLink")],1),s._v("\n虽然浏览器报了不安全，但是起码实现了https加密访问。")])])}),[],!1,null,null,null);t.default=n.exports}}]);