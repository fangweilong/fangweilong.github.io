(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{577:function(a,n,t){"use strict";t.r(n);var s=t(20),e=Object(s.a)({},(function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[t("strong",[a._v("开始前准备")])]),a._v(" "),t("ol",[t("li",[a._v("tomcat版本8.0.51\n(下载地址：http://archive.apache.org/dist/tomcat/tomcat-8/v8.0.51/bin/apache-tomcat-8.0.51.tar.gz) 2018-05-09可以访问")]),a._v(" "),t("li",[a._v("tomcat日志扩展接口包\ntomcat-juli.jar\ntomcat-juli-adapters.jar\n(下载地址：http://archive.apache.org/dist/tomcat/tomcat-8/v8.0.51/bin/extras/) 2018-05-09可以访问")]),a._v(" "),t("li",[a._v("log4j2版本2.3\nlog4j-core-2.3.jar\nlog4j-api-2.3.jar\nlog4j-1.2-api-2.3.jar\n(下载地址：http://www.apache.org/dist/logging/log4j/2.3/apache-log4j-2.3-bin.zip) 2018-05-09可以访问\n(三个jar都在bin压缩包里)")]),a._v(" "),t("li",[a._v("新建log4j2.xml")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('<?xml version="1.0" encoding="utf-8"?>\n<Configuration status="info">\n    <Properties>\n        <Property name="logdir">${sys:catalina.base}/logs</Property>\n        <Property name="layout">%d [%t] %-5p %c-%m%n</Property>\n    </Properties>\n    <Appenders>\n        <Console name="CONSOLE" target="SYSTEM_OUT">\n            <PatternLayout charset="UTF-8" pattern="${layout}" />\n        </Console>\n        <RollingFile name="CATALINA" fileName="${logdir}/catalina.log"\n            filePattern="${logdir}/catalina.%d{yyyy-MM-dd}.log.gz">\n            <PatternLayout charset="UTF-8" pattern="${layout}" />\n            \x3c!-- DefaultRolloverStrategy属性如不设置，则默认为最多同一文件夹下7个文件，这里设置了20 --\x3e\n            <SizeBasedTriggeringPolicy size="50MB" />\n            <DefaultRolloverStrategy max="20" />\n        </RollingFile>\n        <RollingFile name="LOCALHOST" fileName="${logdir}/localhost.log"\n            filePattern="${logdir}/localhost.%d{yyyy-MM-dd}-%i.log.gz">\n            <PatternLayout charset="UTF-8" pattern="${layout}" />\n            <SizeBasedTriggeringPolicy size="50MB" />\n            <DefaultRolloverStrategy max="20" />\n        </RollingFile>\n    </Appenders>\n    <Loggers>\n        <Logger\n            name="org.apache.catalina.core.ContainerBase.[Catalina].[localhost]"\n            level="info">\n            <AppenderRef ref="LOCALHOST" />\n        </Logger>\n        <Root level="info">\n            <AppenderRef ref="CATALINA" />\n            <AppenderRef ref="CONSOLE" />\n        </Root>\n    </Loggers>\n</Configuration>\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br"),t("span",{staticClass:"line-number"},[a._v("22")]),t("br"),t("span",{staticClass:"line-number"},[a._v("23")]),t("br"),t("span",{staticClass:"line-number"},[a._v("24")]),t("br"),t("span",{staticClass:"line-number"},[a._v("25")]),t("br"),t("span",{staticClass:"line-number"},[a._v("26")]),t("br"),t("span",{staticClass:"line-number"},[a._v("27")]),t("br"),t("span",{staticClass:"line-number"},[a._v("28")]),t("br"),t("span",{staticClass:"line-number"},[a._v("29")]),t("br"),t("span",{staticClass:"line-number"},[a._v("30")]),t("br"),t("span",{staticClass:"line-number"},[a._v("31")]),t("br"),t("span",{staticClass:"line-number"},[a._v("32")]),t("br"),t("span",{staticClass:"line-number"},[a._v("33")]),t("br"),t("span",{staticClass:"line-number"},[a._v("34")]),t("br"),t("span",{staticClass:"line-number"},[a._v("35")]),t("br"),t("span",{staticClass:"line-number"},[a._v("36")]),t("br")])]),t("p",[t("strong",[a._v("操作")])]),a._v(" "),t("ol",[t("li",[a._v("jar包\n三个 log4j2 的jar包 和 tomcat-juli-adapters.jar放到 tomact 目录下的lib文件夹下\ntomcat-juli.jar 替换tomcat目录下 bin 文件夹下的同名文件")]),a._v(" "),t("li",[a._v("配置文件\n删除或重命名tomact目录下conf文件夹下的logging.properties文件\nlog4j2.xml，放到tomcat目录下lib文件夹下")])]),a._v(" "),t("p",[a._v("启动tomcat，在tomcat目录下logs文件夹下查看日志文件")]),a._v(" "),t("p",[a._v("原文转载自：https://blog.csdn.net/Json0108/article/details/80258933")])])}),[],!1,null,null,null);n.default=e.exports}}]);