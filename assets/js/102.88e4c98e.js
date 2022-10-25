(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{435:function(s,e,a){"use strict";a.r(e);var t=a(0),r=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"编辑elasticsearch-yml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编辑elasticsearch-yml"}},[s._v("#")]),s._v(" 编辑elasticsearch.yml")]),s._v(" "),e("p",[s._v("elasticsearch.yml中追加内容")]),s._v(" "),e("div",{staticClass:"language-ymal line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 设置必须要登录\nxpack.security.enabled: true\n# 设置加密方式\nxpack.license.self_generated.type: basic\nxpack.security.transport.ssl.enabled: true\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h2",{attrs:{id:"重启es"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重启es"}},[s._v("#")]),s._v(" 重启es")]),s._v(" "),e("h2",{attrs:{id:"生成帐号密码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生成帐号密码"}},[s._v("#")]),s._v(" 生成帐号密码")]),s._v(" "),e("p",[s._v("如果你的服务器是Centos7，可以直接执行")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("/usr/share/elasticsearch/bin/elasticsearch-setup-passwords interactive\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("否则可以通过命令寻找")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" / "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-name")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'elasticsearch-setup-passwords'")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"输入密码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#输入密码"}},[s._v("#")]),s._v(" 输入密码")]),s._v(" "),e("p",[s._v("此时你的终端中会出现提示输入对应帐号的密码即可。")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),e("p",[s._v("Your cluster health is currently RED.\nThis means that some cluster data is unavailable and your cluster is not fully functional.")]),s._v(" "),e("p",[s._v("It is recommended that you resolve the issues with your cluster before running elasticsearch-setup-passwords.\nIt is very likely that the password changes will fail when run against an unhealthy cluster.")]),s._v(" "),e("p",[s._v("Do you want to continue with the password setup process [y/N]Y")]),s._v(" "),e("p",[s._v("Initiating the setup of passwords for reserved users elastic,apm_system,kibana,kibana_system,logstash_system,beats_system,remote_monitoring_user.\nYou will be prompted to enter passwords as the process progresses.\nPlease confirm that you would like to continue [y/N]Y")]),s._v(" "),e("p",[s._v("Enter password for [elastic]:\nReenter password for [elastic]:\nEnter password for [apm_system]:\nReenter password for [apm_system]:\nEnter password for [kibana_system]:\nReenter password for [kibana_system]:\nEnter password for [logstash_system]:\nReenter password for [logstash_system]:\nEnter password for [beats_system]:\nReenter password for [beats_system]:\nEnter password for [remote_monitoring_user]:")])]),s._v(" "),e("h2",{attrs:{id:"简单加密"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简单加密"}},[s._v("#")]),s._v(" 简单加密")]),s._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[s._v("警告")]),s._v(" "),e("p",[s._v("ajax连接极度不安全，所以我做了一个简单加密。但是仍不推荐这么做")])]),s._v(" "),e("p",[s._v("1."),e("a",{attrs:{href:"https://www.base64encode.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("点击我打开网页进行加密"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("2.输入格式：elastic:password")]),s._v(" "),e("p",[s._v("3.此时你会得到一串字符串，这就是我们需要使用的帐号密码加密串。")]),s._v(" "),e("h2",{attrs:{id:"ajax设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ajax设置"}},[s._v("#")]),s._v(" ajax设置")]),s._v(" "),e("p",[s._v("在你的header中添加")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Authorization: Basic ZWxhc3RpYzpwYXNzd29yZA==\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),e("p",[s._v("注意Basic和后面的字符串中需要有个空格，我被这个耽搁了半个小时")])])])}),[],!1,null,null,null);e.default=r.exports}}]);