(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{547:function(e,s,n){"use strict";n.r(s);var a=n(14),t=Object(a.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("1.返回类型找不到\n这种情况我没出现，但是我在翻阅资料中很多人都有出现，这里不详细介绍，请查阅他人的文章。")]),e._v(" "),n("p",[e._v('2.集群服务器\n即一个oracle有多个ip连接(看oracle的配置文件)。在C#代码中使用一个ip可以连接，但是在java中使用thin方式连接就会报"No result defined for action"。\n我们常规下oracle连接属性是这样配置的')]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("jdbc.url=jdbc:oracle:thin:@127.0.0.1:1521:oracle\njdbc.username=root\njdbc.password=123\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br")])]),n("p",[e._v("但是在集群服务器中可就不行了。\n解决办法:我们需要找到oracle目录中 tnsnames.ora 文件，复制其中的连接串并放到thin@后面\n更改后的连接串")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("jdbc.url=jdbc:oracle:thin:@(DESCRIPTION=(ADDRESS_LIST=(LOAD_BALANCE=yes)(ADDRESS=(PROTOCOL=TCP)(HOST=127.0.0.1)(PORT=1521))(ADDRESS=(PROTOCOL=TCP)(HOST=127.0.0.2)(PORT=1521)))(CONNECT_DATA=(SERVICE_NAME=oracle)))\njdbc.username=root\njdbc.password=123\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);