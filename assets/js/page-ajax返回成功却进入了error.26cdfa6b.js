(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{842:function(s,n,a){"use strict";a.r(n);var t=a(1),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('$.ajax({\n        type: "POST",\n        url: "",\n        data: {},\n        dataType: "json",//注意这里\n        success: function(data){\n            console.log(data)\n        },\n        error:function(data){\n            console.log(data)\n        }\n    })\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("返回的数据明明是成功的，状态也都是200，但是就是没进success。\n"),a("strong",[s._v("其实原因很简单，后台返回的数据类型不是json的，而我们在ajax里面指定的dataType类型是json的，数据类型不一致就会导致出现进入error的问题，只要返回的类型和ajax指定类型一致就ok了。")])])])}),[],!1,null,null,null);n.default=e.exports}}]);