(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{876:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"需求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#需求"}},[s._v("#")]),s._v(" 需求")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("由一台统一的外网服务器作中转，左右的外网接口请求都走这台服务器。\n考虑下来使用nginx的反代。\n")])])]),t("h2",{attrs:{id:"配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server_name  "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$hostname")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 代理的外网端口 这块可加可不加，不是重点，重点在location中")]),s._v("\n    proxy_set_header Host "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$host")]),s._v(":15200"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    proxy_set_header X-Real-IP "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$remote_addr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    proxy_set_header REMOTE-HOST "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$remote_addr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    proxy_set_header X-NginX-Proxy "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    proxy_set_header X-Forwarded-For "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$proxy_add_x_forwarded_for")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#转发到百度地址服务")]),s._v("\n    location /baidumap/ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意这行。如果需要代理其他地址也只需要改api.map.baidu.com就行了。")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果不加这行，默认会使用上面proxy_set_header Host $host:15200;的设置。所以我在下面再加一个proxy_set_header覆盖掉全聚德")]),s._v("\n        proxy_set_header Host api.map.baidu.com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 末尾加了 / 切掉 /baidumap/ ，在编写中要注意你自己的业务需不需要加 /")]),s._v("\n        proxy_pass http://api.map.baidu.com/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);