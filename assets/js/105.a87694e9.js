(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{477:function(s,n,t){"use strict";t.r(n);var e=t(1),a=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<sql id="sys_sms_id">SYS_SMS_ID.NEXTVAL</sql>\n<insert id="save" parameterType="SmsDO">\n\t\tinsert into SYS_SMS\n\t\t(\n\t\t\tID,\n            PHONE,\n            CODE,\n            SENDDATE\n\t\t)\n\t\tvalues\n\t\t(\n\t\t\t<include refid="sys_sms_id"/>,\n\t\t\t#{phone,jdbcType=VARCHAR},\n\t\t\t#{code,jdbcType=VARCHAR},\n\t\t\t#{sendDate,jdbcType=DATE}\n\t\t)\n\t</insert>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("p",[s._v("在将时间存到oracle里面的时候发现怎么都无法将带时分秒的日期存进去，每次存只能存到年月日。\n结果发现在mybatis里面设置传参的jdbcType=DATE的话就会出现问题。\n所以改为")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<sql id="sys_sms_id">SYS_SMS_ID.NEXTVAL</sql>\n<insert id="save" parameterType="SmsDO">\n\t\tinsert into SYS_SMS\n\t\t(\n\t\t\tID,\n            PHONE,\n            CODE,\n            SENDDATE\n\t\t)\n\t\tvalues\n\t\t(\n\t\t\t<include refid="sys_sms_id"/>,\n\t\t\t#{phone,jdbcType=VARCHAR},\n\t\t\t#{code,jdbcType=VARCHAR},\n\t\t\t#{sendDate}\n\t\t)\n\t</insert>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("p",[n("strong",[s._v("2018-05-30更新")]),s._v("\n当使用的数据库为oracle时，时间类型全部使用TIMESTAMP,即")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("```\n")])])]),n("p",[n("sql",{attrs:{id:"sys_sms_id"}},[s._v("SYS_SMS_ID.NEXTVAL")]),s._v(" "),n("insert",{attrs:{id:"save",parameterType:"SmsDO"}},[s._v("\ninsert into SYS_SMS\n(\nID,\nPHONE,\nCODE,\nSENDDATE\n)\nvalues\n(\n"),n("include",{attrs:{refid:"sys_sms_id"}}),s._v(",\n#{phone,jdbcType=VARCHAR},\n#{code,jdbcType=VARCHAR},\n#{sendDate,jdbcType=TIMESTAMP}\n)\n")],1)],1),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("\nDATE在oracle中只能存储年月日，TIMESTAMP可以存储到时分秒，所以在使用的时候全部换成TIMESTAMP")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])}),[],!1,null,null,null);n.default=a.exports}}]);