(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{559:function(t,e,n){"use strict";n.r(e);var s=n(20),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("因为只有一个点击的操作，没有任何其他的逻辑操作，我就不想写一个方法来承载它，就一直在找声明式的写法")]),t._v(" "),n("p",[t._v("官网文档链接：https://router.vuejs.org/zh/guide/essentials/navigation.html")]),t._v(" "),n("p",[t._v("在文档中介绍了一种router.go(n)来返回上一页，但是没有示例，经过测试无法使用这种写法")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<router-link :to="router.go(1)">\n\t<el-button>返回</el-button>\n</router-link>\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("p",[t._v("搜索一些博客，都是使用的编程式的方法来返回上一页。\n所以就经过简化后，将方法绑定在@click中")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<router-link to>\n\t<el-button @click="$router.back(-1)">返回</el-button>\n</router-link>\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("p",[t._v("注意：router-link中的"),n("strong",[t._v("to要留空")]),t._v("，否则@click方法不起作用")])])}),[],!1,null,null,null);e.default=r.exports}}]);