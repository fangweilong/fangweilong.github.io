(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{542:function(t,a,_){"use strict";_.r(a);var s=_(20),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"版本"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#版本"}},[t._v("#")]),t._v(" 版本")]),t._v(" "),_("h2",{attrs:{id:"pgsql-9-6"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#pgsql-9-6"}},[t._v("#")]),t._v(" pgsql:9.6")]),t._v(" "),_("h2",{attrs:{id:"navicat-15"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#navicat-15"}},[t._v("#")]),t._v(" navicat:15")]),t._v(" "),_("hr"),t._v(" "),_("h1",{attrs:{id:"创表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#创表"}},[t._v("#")]),t._v(" 创表")]),t._v(" "),_("h2",{attrs:{id:"使用navicat"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用navicat"}},[t._v("#")]),t._v(" 使用navicat")]),t._v(" "),_("h3",{attrs:{id:"字段类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#字段类型"}},[t._v("#")]),t._v(" 字段类型 |")]),t._v(" "),_("h5",{attrs:{id:"字段类型找不到"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#字段类型找不到"}},[t._v("#")]),t._v(" 字段类型找不到")]),t._v(" "),_("p",[t._v("以varchar为例，在navicat中是找不到数组类型的。只能看到varchar类型\n"),_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200901095305595.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3R1dGlhbjIwMDA=,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),t._v(" "),_("h5",{attrs:{id:"自行设置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#自行设置"}},[t._v("#")]),t._v(" 自行设置")]),t._v(" "),_("p",[t._v("想定义成数组类型也很简单，直接在后面添加一个 [] 的符号\n"),_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200901095410793.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3R1dGlhbjIwMDA=,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),t._v(" "),_("h5",{attrs:{id:"保存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#保存"}},[t._v("#")]),t._v(" 保存")]),t._v(" "),_("p",[t._v("随意输入一个表名后保存\n"),_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200901095434806.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3R1dGlhbjIwMDA=,size_16,color_FFFFFF,t_70#pic_center",alt:""}})]),t._v(" "),_("h5",{attrs:{id:"注意点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#注意点"}},[t._v("#")]),t._v(" 注意点")]),t._v(" "),_("p",[t._v("保存以后你会发现代表数组的符号 []  消失了，同时字符串长度变成了0。这时候不是没设置成功，只是因为navicat显示不出来。\n"),_("img",{attrs:{src:"https://img-blog.csdnimg.cn/2020090109551623.png#pic_center",alt:"在这里插入图片描述"}})]),t._v(" "),_("h2",{attrs:{id:"sql语句"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#sql语句"}},[t._v("#")]),t._v(" SQL语句")]),t._v(" "),_("div",{staticClass:"language-sql line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-sql"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" test "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" arry "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARCHAR")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("hr"),t._v(" "),_("h1",{attrs:{id:"插入"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#插入"}},[t._v("#")]),t._v(" 插入")]),t._v(" "),_("h3",{attrs:{id:"使用-array"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用-array"}},[t._v("#")]),t._v(" 使用 ARRAY")]),t._v(" "),_("div",{staticClass:"language-sql line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-sql"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" test\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v("\n\t"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" ARRAY "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x'")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'y'")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br")])]),_("h3",{attrs:{id:"使用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用 {}")]),t._v(" "),_("p",[t._v("注意单引号双引号的位置")]),t._v(" "),_("div",{staticClass:"language-sql line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-sql"}},[_("code",[t._v("\t"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" test\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v("\n\t"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"x","y"}\'')]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br")])]),_("h1",{attrs:{id:"查询"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#查询"}},[t._v("#")]),t._v(" 查询")]),t._v(" "),_("h2",{attrs:{id:"查询数组字段"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#查询数组字段"}},[t._v("#")]),t._v(" 查询数组字段")]),t._v(" "),_("div",{staticClass:"language-sql line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-sql"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" arry "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" test"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("p",[t._v("查找结果如图所示\n"),_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200901100308565.png#pic_center",alt:"在这里插入图片描述"}})]),t._v(" "),_("h2",{attrs:{id:"查询数组下标"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#查询数组下标"}},[t._v("#")]),t._v(" 查询数组下标")]),t._v(" "),_("p",[_("em",[t._v("千万注意：我们在大部分语言中，数组下标都从0开始，但是在pgsql的数组中，数组下标是从1开始")])]),t._v(" "),_("div",{staticClass:"language-sql line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-sql"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" arry"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" test"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200901100423183.png#pic_center",alt:"在这里插入图片描述"}})]),t._v(" "),_("h2",{attrs:{id:"条件语句"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#条件语句"}},[t._v("#")]),t._v(" 条件语句")]),t._v(" "),_("p",[t._v("查询要求：数组中某一个与 y 相等")]),t._v(" "),_("div",{staticClass:"language-sql line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-sql"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" test "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" arry @"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{\"y\"}'")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("h2",{attrs:{id:"常见的操作符"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常见的操作符"}},[t._v("#")]),t._v(" 常见的操作符")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("操作符")]),t._v(" "),_("th",[t._v("描述")]),t._v(" "),_("th",[t._v("示例")]),t._v(" "),_("th",[t._v("结果")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("=")]),t._v(" "),_("td",[t._v("相等")]),t._v(" "),_("td",[t._v("SELECT ARRAY[1.1,2.1,3.1]::int[] = ARRAY[1,2,3];")]),t._v(" "),_("td",[t._v("t")])]),t._v(" "),_("tr",[_("td",[t._v("<>")]),t._v(" "),_("td",[t._v("不等于")]),t._v(" "),_("td",[t._v("select ARRAY[1,2,3] <> ARRAY[1,2,4];")]),t._v(" "),_("td",[t._v("t")])]),t._v(" "),_("tr",[_("td",[t._v("<")]),t._v(" "),_("td",[t._v("小于")]),t._v(" "),_("td",[t._v("select ARRAY[1,2,3] < ARRAY[1,2,4];")]),t._v(" "),_("td",[t._v("t")])]),t._v(" "),_("tr",[_("td",[t._v(">")]),t._v(" "),_("td",[t._v("大于")]),t._v(" "),_("td",[t._v("select ARRAY[1,4,3] > ARRAY[1,2,4];")]),t._v(" "),_("td",[t._v("t")])]),t._v(" "),_("tr",[_("td",[t._v("<=")]),t._v(" "),_("td",[t._v("小于或等于")]),t._v(" "),_("td",[t._v("select ARRAY[1,2,3] <= ARRAY[1,2,3];")]),t._v(" "),_("td",[t._v("t")])]),t._v(" "),_("tr",[_("td",[t._v(">=")]),t._v(" "),_("td",[t._v("大于或等于")]),t._v(" "),_("td",[t._v("select ARRAY[1,4,3] >= ARRAY[1,4,3];")]),t._v(" "),_("td",[t._v("t")])]),t._v(" "),_("tr",[_("td",[t._v("@>")]),t._v(" "),_("td",[t._v("包含")]),t._v(" "),_("td",[t._v("select ARRAY[1,4,3] @> ARRAY[3,1];")]),t._v(" "),_("td",[t._v("t")])]),t._v(" "),_("tr",[_("td",[t._v("<@")]),t._v(" "),_("td",[t._v("包含于")]),t._v(" "),_("td",[t._v("select ARRAY[2,7] <@ ARRAY[1,7,4,2,6];")]),t._v(" "),_("td",[t._v("t")])]),t._v(" "),_("tr",[_("td",[t._v("&&")]),t._v(" "),_("td",[t._v("重叠（是否有相同元素）")]),t._v(" "),_("td",[t._v("select ARRAY[1,4,3] && ARRAY[2,1];")]),t._v(" "),_("td",[t._v("t")])]),t._v(" "),_("tr",[_("td",[t._v("||")]),t._v(" "),_("td",[t._v("数组与数组连接")]),t._v(" "),_("td",[t._v("select ARRAY[1,2,3] || ARRAY[4,5,6];")]),t._v(" "),_("td",[t._v("{1,2,3,4,5,6}")])]),t._v(" "),_("tr",[_("td",[t._v("||")]),t._v(" "),_("td",[t._v("数组与数组连接")]),t._v(" "),_("td",[t._v("select ARRAY[1,2,3] || ARRAY[[4,5,6],[7,8,9]];")]),t._v(" "),_("td",[t._v("\\{{1,2,3},{4,5,6},{7,8,9}\\}")])]),t._v(" "),_("tr",[_("td",[t._v("||")]),t._v(" "),_("td",[t._v("元素与数组连接")]),t._v(" "),_("td",[t._v("select 3 || ARRAY[4,5,6];")]),t._v(" "),_("td",[t._v("{3,4,5,6}")])]),t._v(" "),_("tr",[_("td",[t._v("||")]),t._v(" "),_("td",[t._v("数组与元素连接")]),t._v(" "),_("td",[t._v("select ARRAY[4,5,6] || 7;")]),t._v(" "),_("td",[t._v("{4,5,6,7}")])])])]),t._v(" "),_("h2",{attrs:{id:"函數"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#函數"}},[t._v("#")]),t._v(" 函數")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("函数")]),t._v(" "),_("th",[t._v("返回类型")]),t._v(" "),_("th",[t._v("描述")]),t._v(" "),_("th",[t._v("例子")]),t._v(" "),_("th",[t._v("结果")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("array_append(anyarray, anyelement)")]),t._v(" "),_("td",[t._v("anyarray")]),t._v(" "),_("td",[t._v("向数组末尾追加元素")]),t._v(" "),_("td",[t._v("array_append(ARRAY[1,2], 3)")]),t._v(" "),_("td",[t._v("{1,2,3}")])]),t._v(" "),_("tr",[_("td",[t._v("array_cat(anyarray, anyarray)")]),t._v(" "),_("td",[t._v("anyarray")]),t._v(" "),_("td",[t._v("连接两个数组")]),t._v(" "),_("td",[t._v("array_cat(ARRAY[1,2,3], ARRAY[4,5])")]),t._v(" "),_("td",[t._v("{1,2,3,4,5}")])]),t._v(" "),_("tr",[_("td",[t._v("array_ndims(anyarray)")]),t._v(" "),_("td",[t._v("int")]),t._v(" "),_("td",[t._v("返回数组的维数")]),t._v(" "),_("td",[t._v("array_ndims(ARRAY[[1,2,3], [4,5,6]])")]),t._v(" "),_("td",[t._v("2")])]),t._v(" "),_("tr",[_("td",[t._v("array_dims(anyarray)")]),t._v(" "),_("td",[t._v("text")]),t._v(" "),_("td",[t._v("返回数组维数的文本表示")]),t._v(" "),_("td",[t._v("array_dims(ARRAY[[1,2,3], [4,5,6]])")]),t._v(" "),_("td",[t._v("[1:2][1:3]")])]),t._v(" "),_("tr",[_("td",[t._v("array_fill(anyelement, int[], [, int[]])")]),t._v(" "),_("td",[t._v("anyarray")]),t._v(" "),_("td",[t._v("返回数组初始化提供的值和维度，可选下界不是1")]),t._v(" "),_("td",[t._v("array_fill(7, ARRAY[3], ARRAY[2])")]),t._v(" "),_("td",[t._v("[2:4]={7,7,7}")])]),t._v(" "),_("tr",[_("td",[t._v("array_length(anyarray, int)")]),t._v(" "),_("td",[t._v("int")]),t._v(" "),_("td",[t._v("返回数组维度的长度")]),t._v(" "),_("td",[t._v("array_length(array[1,2,3], 1)")]),t._v(" "),_("td",[t._v("3")])]),t._v(" "),_("tr",[_("td",[t._v("array_lower(anyarray, int)")]),t._v(" "),_("td",[t._v("int")]),t._v(" "),_("td",[t._v("返回数组维数的下界")]),t._v(" "),_("td",[t._v("array_lower('[0:2]={1,2,3}'::int[], 1)")]),t._v(" "),_("td",[t._v("0")])]),t._v(" "),_("tr",[_("td",[t._v("array_prepend(anyelement, anyarray)")]),t._v(" "),_("td",[t._v("anyarray")]),t._v(" "),_("td",[t._v("向数组开头添加元素")]),t._v(" "),_("td",[t._v("array_prepend(1, ARRAY[2,3])")]),t._v(" "),_("td",[t._v("{1,2,3}")])]),t._v(" "),_("tr",[_("td",[t._v("array_remove(anyarray, anyelement)")]),t._v(" "),_("td",[t._v("anyarray")]),t._v(" "),_("td",[t._v("从数组中删除所有等于给定值的元素（数组必须是一维的）")]),t._v(" "),_("td",[t._v("array_remove(ARRAY[1,2,3,2], 2)")]),t._v(" "),_("td",[t._v("{1,3}")])]),t._v(" "),_("tr",[_("td",[t._v("array_replace(anyarray, anyelement, anyelement)")]),t._v(" "),_("td",[t._v("anyarray")]),t._v(" "),_("td",[t._v("用新值替换每个等于给定值的数组元素")]),t._v(" "),_("td",[t._v("array_replace(ARRAY[1,2,5,4], 5, 3)")]),t._v(" "),_("td",[t._v("{1,2,3,4}")])]),t._v(" "),_("tr",[_("td",[t._v("array_to_string(anyarray, text [, text])")]),t._v(" "),_("td",[t._v("text")]),t._v(" "),_("td",[t._v("使用分隔符和null字符串连接数组元素")]),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("array_upper(anyarray, int)")]),t._v(" "),_("td",[t._v("int")]),t._v(" "),_("td",[t._v("返回数组维数的上界")]),t._v(" "),_("td",[t._v("array_upper(ARRAY[1,8,3,7], 1)")]),t._v(" "),_("td",[t._v("4")])]),t._v(" "),_("tr",[_("td",[t._v("cardinality(anyarray)")]),t._v(" "),_("td",[t._v("int")]),t._v(" "),_("td",[t._v("返回数组中的总元素数量，或者如果数组是空的则为0")]),t._v(" "),_("td",[t._v("cardinality(ARRAY[[1,2],[3,4]])")]),t._v(" "),_("td",[t._v("4")])]),t._v(" "),_("tr",[_("td",[t._v("string_to_array(text, text [, text])")]),t._v(" "),_("td",[t._v("text[]")]),t._v(" "),_("td",[t._v("使用指定的分隔符和null字符串把字符串分裂成数组元素")]),t._v(" "),_("td",[t._v("string_to_array('xx~^~yy~^~zz', '~^~', 'yy')")]),t._v(" "),_("td",[t._v("{xx,NULL,zz}")])]),t._v(" "),_("tr",[_("td",[t._v("unnest(anyarray)")]),t._v(" "),_("td",[t._v("setof anyelement")]),t._v(" "),_("td",[t._v("将数组行转列")]),t._v(" "),_("td",[t._v("unnest(ARRAY[1,2])")]),t._v(" "),_("td",[t._v("1 "),_("br"),t._v(" 2")])]),t._v(" "),_("tr",[_("td",[t._v("unnest(anyarray, anyarray [, ...])")]),t._v(" "),_("td",[t._v("setof anyelement, anyelement [, ...]")]),t._v(" "),_("td",[t._v("扩展多个数组（可能是不同的类型）到一组行。 仅在FROM子句中允许这样做")]),t._v(" "),_("td",[t._v("unnest(ARRAY[1,2],ARRAY['foo','bar','baz'])")]),t._v(" "),_("td",[t._v("1    foo"),_("br"),t._v("2    bar"),_("br"),t._v("NULL baz"),_("br")])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);