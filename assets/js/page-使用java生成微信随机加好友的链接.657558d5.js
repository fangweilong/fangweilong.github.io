(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{840:function(n,s,a){"use strict";a.r(s);var t=a(1),r=Object(t.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"随机生成链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#随机生成链接"}},[n._v("#")]),n._v(" 随机生成链接")]),n._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[n._v("#")]),n._v(" 前言")]),n._v(" "),a("ol",[a("li",[n._v("Java写的，其他语言自己翻译，其实就是一个随机数生成")]),n._v(" "),a("li",[n._v("微信PC复制会自动加空格把这个a标签破坏掉，所以用其他工具复制")]),n._v(" "),a("li",[n._v("朋友圈发不了，跟（2）一样 会自动加空格把a标签破坏掉，其他自测")])]),n._v(" "),a("h2",{attrs:{id:"先看一下效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#先看一下效果"}},[n._v("#")]),n._v(" 先看一下效果")]),n._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190814105615981.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3R1dGlhbjIwMDA=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),n._v("\n你看用微信复制的时候，a标签就被破坏了 要自己重新改一下\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190814105651238.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3R1dGlhbjIwMDA=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),n._v("\n点击以后进去这个页面。但是这种应该是没有真人的，我没加好友，自行测试。")]),n._v(" "),a("p",[n._v("首先是main")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('public static void main(String[] args) {\n        //12位数\n        String str="<a href=\\"weixin://contacts/profile/wxid_%s\\">点击加好友%s</a>";\n        boolean flag=true;\n        int num=0;\n        System.out.println("请输入一个大于0小于10000的正整数：");\n        while (flag){\n            Scanner scanner = new Scanner(System.in);\n            try {\n                num = scanner.nextInt();\n                if(num<=0||num>=10000){\n                    System.out.println("输入错误！请输入一个大于0小于10000的正整数：");\n                }else{\n                    flag=false;\n                }\n            }catch (Exception e){\n                System.out.println("输入错误！请输入一个大于0小于10000的正整数：");\n            }\n        }\n\n        for (int i = 0; i <num ; i++) {\n            //生成随机id\n            String randomString= getRandomString(12);\n            //format替换里面的参数\n            System.out.println(String.format(str,randomString,i));\n        }\n    }\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br")])]),a("p",[n._v("然后是生成随机id的方法")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v(' //生成随机数\n    public static String getRandomString(int length){\n        String str="abcdefghijklmnopqrstuvwxyz0123456789";\n        StringBuffer sb = new StringBuffer();\n        Random random = new Random();\n        for (int i = 0; i < length; i++)\n        {\n            sb.append(str.charAt(random.nextInt(str.length())));\n        }\n        return sb.toString();\n    }\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br")])]),a("p",[n._v("最后是控制台效果\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190814105936985.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3R1dGlhbjIwMDA=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);