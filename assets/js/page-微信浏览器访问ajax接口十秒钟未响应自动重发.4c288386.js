(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{858:function(s,n,e){"use strict";e.r(n);var t=e(1),a=Object(t.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("2018-12-21更新：\n在url或者ajax带上 connect_redirect=1 这个参数，我在项目中遇到的会自动重发的手机确实不重发了，但是有人说有很小一部分的手机还是会重发\n原文地址见：https://developers.weixin.qq.com/community/develop/doc/b8f9f09573e92ffb0e23308d54bcdcf7\n评论区9楼")]),s._v(" "),e("p",[s._v("===================================================================\n以下为原文")]),s._v(" "),e("p",[s._v("在微信内资的浏览器中调用程序(ios暂未发现，android上面会出现)，当网络不稳定或服务器处理慢，ajax调用服务器十秒钟未响应，微信的浏览器默认就会关闭上一次的请求，重新发起新请求。\n在日常的查询处理中可能还好，但是涉及到订单等数据必须唯一的时候，就会出现下两次订单的情况，并且每次的间隔都是十秒钟(很少一部分会有9秒钟的情况)\n所以我加了两个方式来处理\n"),e("strong",[s._v("1.ajax超时")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('ajaxTimeoutTest=$.ajax({\n            url: "",\n            type: "post",\n            data: {\n            },\n            timeout : 8000, //超时时间设置，单位毫秒\n            datatype: "json",\n            success: function (msg) {\n            }\n             error: function (msg) {\n            },\n            complete : function(XMLHttpRequest,status){ //请求完成后最终执行参数\n                if(status==\'timeout\'){//超时,status还有success,error等值的情况\n                    ajaxTimeoutTest.abort();\n                    alert("网络请求超时,请检查网络后再试");\n                }\n            }\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br")])]),e("p",[s._v("在网络不好的时候要给用户提示而不是一直在等数据返回，并且主动切断ajax。\n"),e("strong",[s._v("2.查询订单状态(以订单举例，最常见的一种)")]),s._v("\n即便不存在重发的情况下，在对订单进行操作的时候也是需要先判断订单的状态，如果已经支付成功应该就返回给前端支付成功不要重复支付的提醒。\n但是之前做的一套系统里面，下单的时候没有生成订单而是在最终确认支付的时候才会生成订单(不知道为啥会这样设计，姑且这样用吧)，这个时候可以用session（cookie）来判断。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('\t\tif(session().getAttribute("orderSessios")!=null){\n            errorMsg = "请勿在一分钟内重复提交订单";\n            outJson(errorMsg);\n            return;\n        }else{\n            session().setAttribute("orderSessios", "orderSession");\n            session().setMaxInactiveInterval(60);//秒\n        }\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("代码仅供参考，请根据实际业务增加判断逻辑")])])}),[],!1,null,null,null);n.default=a.exports}}]);