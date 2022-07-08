(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{423:function(t,n,s){"use strict";s.r(n);var a=s(0),r=Object(a.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("我们在sql中使用最多的关联查询无非是left join.right join,union,union all。\n这几种关联的区别和用法别的教程都太多了 这里不赘述.\n这里讲一下full join的用法\n1.需求\n需要做一张统计表 要能实现多级表头\n"),n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190712165236680.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3R1dGlhbjIwMDA=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),t._v("\n但是这个数据又不是一张表中存在的，分为了乔木，灌木，行道树，古树 四张表\n那么为了最简单有效办法就是考虑在sql中实现了")]),t._v(" "),n("p",[t._v("2.实现\n直接上代码，有注意的地方会在sql中标出来")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("select * from \t\t\t\t\t--最外层一个select，如果不需要rownum可以把*替换成你想要的字段或者使用mybatis中的resultType指定映射字段\n\t(select rownum rn,A.*    --这里需要 rownum 否则数据会是杂乱无章且重复的\n\t\tfrom (\n\t\t\tselect catagoryA,count(catagory) amountA \n\t\t\t\tfrom 表A group by catagory order by amount\n\t\t)A)B\n\tFULL JOIN                 --以full join 拼接\n\t(select rownum rn,C.* \n\t\tfrom (\n\t\t\tselect catagoryC,count(catagory) amountC \n\t\t\t\tfrom 表C group by catagory order by amount\n\t\t)C)D\n\tON B.rn=D.rn\t\t\t\t\t\t--直接以rn相等就行了\n\tFULL JOIN\n\t(select rownum rn,E.* \n\tfrom (\n\t\tselect catagoryE,count(catagory) amountE\n\t\t\tfrom 表E group by catagory order by amount\n\t)E)F\n\tON D.rn=F.rn or B.rn=F.rn   --注意 超过两张表的情况下on后面需要以（表数-2）个or拼接 \n\t\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br")])]),n("p",[t._v("注意：如果数据和表特别多，这种拼接写法会有很明显的性能问题")])])}),[],!1,null,null,null);n.default=r.exports}}]);