(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{386:function(t,e,a){"use strict";a.r(e);var n=a(0),l=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"html-table"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#html-table"}},[t._v("#")]),t._v(" html table")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('<el-table :stripe="true" style="width: 100%" border highlight-current-row\n                  ref="table"\n                  :data="tableData"\n                  row-key="id">\n</el-table>\n')])])]),e("p",[e("strong",[t._v('PS:注意 ref="table" 配置 不加这个在vue中会找不到这个组件')])]),t._v(" "),e("h2",{attrs:{id:"vue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue"}},[t._v("#")]),t._v(" vue")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('//为了防止指向错误 所以我都是直接提出来的\nlet self=this;\n$.each(vm.tableData, function (index, item) {\n\t//这里可以用你的条件\n    if (item.state == "0") {\n             //默认选中\n             self.$nextTick(function () {\n                 self.$refs.table.toggleRowSelection(item, true);\n             })\n     }\n})\n')])])]),e("p",[t._v("如果有更好的解决办法 请留言")])])}),[],!1,null,null,null);e.default=l.exports}}]);