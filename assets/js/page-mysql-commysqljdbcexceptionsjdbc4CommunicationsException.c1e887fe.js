(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{864:function(e,n,t){"use strict";t.r(n);var s=t(1),a=Object(s.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("1、现象：\n连接mysql时报错")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(" com.mysql.jdbc.exceptions.jdbc4.CommunicationsException\n")])])]),t("p",[e._v("这个在长时间连接但是又不操作的情况下会报这个错误，虽然可以改mysql的配置文件来达到目的，但是\n我们是开发不是DBA，所以尽量还是通过程序来控制")]),e._v(" "),t("p",[e._v("2、解决\n在连接串中添加下面一串配置")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("&autoReconnect=true&failOverReadOnly=false&maxReconnects=10\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("3.释义\nautoReconnect：自动重连\nfailOverReadOnly：自动重连成功后，连接是否设置为只读\nmaxReconnects：autoReconnect设置为true时，重试连接的次数")])])}),[],!1,null,null,null);n.default=a.exports}}]);