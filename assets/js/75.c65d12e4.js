(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{553:function(a,s,e){"use strict";e.r(s);var t=e(14),n=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[a._v("常规的操作是一个Tomcat下只有一个项目，但是需求总是千变万化的，今天就遇到了一个服务器上需要布置两个项目。")]),a._v(" "),e("p",[a._v("详解步骤：\n1、将两个项目打包放入tomcat的webapps目录下（这个步骤就不用说了，直接复制class还是war什么的随你开心）\n2、修改tomcat的server.xml文件，原来的代码如下：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('      <Host name="localhost"  appBase="webapps"\n            unpackWARs="true" autoDeploy="true">\n\t   \x3c!--中间还有一大串注释掉的不用管--\x3e\n     </Host>\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("\t我们修改后的应该是这样:\t\n")])])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('       <Host name="localhost"  appBase="webapps" unpackWARs="true" autoDeploy="true">\n\t\t\x3c!--注意这行--\x3e\n        <Context path="root" docBase="/ROOT"/>\n       </Host>\n       \n       <Host name="myspring.com"  appBase="webapps" unpackWARs="true" autoDeploy="true">\n            \x3c!--注意这行--\x3e\n        <Context path="omey" docBase="/omey"/>\n       </Host>\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br")])]),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("\t*注:  path表示项目名，即我们在浏览器访问时localhost:8080/项目名，如果为空则表示不加项目名。最多只能有一个path为空，不能有多个为空否则会报错\n\t\t  docBase表示项目路径，即你实际对应这个项目名的项目所在的目录 *\n")])])]),e("p",[a._v("3.重启Tomcat，这时候应该就能访问了。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("如果你在重启Tomcat过程中报有关\n")])])]),e("h2",{attrs:{id:"webapprootkey"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webapprootkey"}},[a._v("#")]),a._v(' "webAppRootKey"')]),a._v(" "),e("p",[a._v("的错，则修改你项目中web.xml中")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("<context-param>\n    <param-name>webAppRootKey</param-name>\n\t\x3c!--注意这块，修改名字就行，修改为和你web.xml中一致的项目名--\x3e\n\t<param-value>omey</param-value>\n  </context-param>\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);