(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{856:function(n,s,t){"use strict";t.r(s);var e=t(1),a=Object(e.a)({},(function(){var n=this,s=n.$createElement,t=n._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("p",[n._v("这个错误是因为画的时候样式还没加载完成，下面就调用了。\n在一些论坛上也能找到别人有遇到这些问题：\nhttps://stackoverflow.com/questions/44394573/mapbox-gl-js-style-is-not-done-loading?rq=1\nhttps://www.javaear.com/question/44394573.html")]),n._v(" "),t("p",[n._v("这个时候在你调用的的方法中加一个监听：")]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function loadSurface(_map, option) {\n            //监听等样式加载完成以后再调用\n            _map.on('load', function () {\n            \t//完成以后再处理当前逻辑 \n                _map.setLayoutProperty('regionFillLayer', 'visibility', 'visible');\n                _map.setFilter('regionFillLayer', filter);\n                _map.setPaintProperty('regionFillLayer', \"fill-extrusion-color\", {\n                    \"property\": \"REGIONNAME\",\n                    \"type\": \"categorical\",\n                    \"stops\": option\n                });\n                _map.setPaintProperty('regionFillLayer', \"fill-extrusion-height\", 1);\n                _map.setPaintProperty('regionFillLayer', \"fill-extrusion-opacity\", 0.5);\n            });\n        }\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br"),t("span",{staticClass:"line-number"},[n._v("14")]),t("br"),t("span",{staticClass:"line-number"},[n._v("15")]),t("br")])]),t("p",[n._v("不知道这样讲能不能看懂 毕竟不是专业前端。简单总结就是加一个监听，实在不行加一个延迟都行，但是不保险")])])}),[],!1,null,null,null);s.default=a.exports}}]);