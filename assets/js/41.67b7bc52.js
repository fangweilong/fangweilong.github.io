(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{437:function(s,n,e){"use strict";e.r(n);var a=e(0),t=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("//配置")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('public class Mongodb {\n   private static String host = "";//域名\n   private static int port = ;//端口\n   private static String user = "sc";\n   private static String pwd = "sc_1!$";\n\n   public final MongoClient getDB(String dbName) {\n      // 连接到MongoDB服务 如果是远程连接可以替换“localhost”为服务器所在IP地址\n      // ServerAddress()两个参数分别为 服务器地址 和 端口\n      ServerAddress serverAddress = new ServerAddress(host, port);\n      List<ServerAddress> addrs = new ArrayList<ServerAddress>();\n      addrs.add(serverAddress);\n\n      // MongoCredential.createScramSha1Credential()三个参数分别为 用户名 数据库名称 密码\n      MongoCredential credential = MongoCredential.createScramSha1Credential(user, dbName, pwd.toCharArray());\n      List<MongoCredential> credentials = new ArrayList<MongoCredential>();\n      credentials.add(credential);\n\n      // 通过连接认证获取MongoDB连接\n      return new MongoClient(addrs, credentials);\n   }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("p",[s._v("//指定库配置")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('private final static MongoClient client = new Mongodb().getDB("");//库名\nMongoDatabase mongoDatabase = client.getDatabase("");//数据库\nMongoCollection<Document> collection = mongoDatabase.getCollection(“”);//表名\n\n//查询语句\nBasicDBList bsList = new BasicDBList();\nbsList.add("");//添加值\n//使用这种方法更简单方便，写起来也命了。另一种方法相当于手拼json，未作记录\nBson _filters = Filters.and(\n        Filters.eq("", cityName),//属性名  值\n        Filters.in("",)//要使用 in 函数   值必须为BasicDBList类型\n        Filters.gte("", ) //大于等于: \n Filters.gt("", ) //大于\n        Filters.lte("",),//小于等于\n        Filters.lt("",),//小于\n  Filters.ne("", ),//不等于\n        Filters.or(\n                Filters.regex("name",str),// 属性名 值\n                Filters.regex("category",str), //属性名 值\n                Filters.regex("detail.address",str)  //如果不是最外层的属性，则需要从外层属性一层层点进去\n        ),\n Filters.near("point", new Point(new Position(lng, lat)), 1000000000d, 0d)) //经纬度 必须要创立索引  第一个值为经纬度的属性，第二个是经纬度的值（double），第三个是最大距离，第四个是最小距离  默认包含排序\n);\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("p",[s._v("//总条数")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("int totalCount = (int) collection.count(_filters);\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("// 查询器")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("FindIterable<Document> ret = collection.find();//这样可以创立公共的\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("//查询")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("ret = ret.filter(_filters).sort(new BasicDBObject(“”,1?1:-1)).skip(pageSize * (pageIndex-1)).limit(pageSize).batchSize(pageSize);//sort 排序前面是属性名，后面是1=正序 -1=倒序    skip 跳过多少条   limit 接下来查到多少条  bathSize  返回的条数\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("//如果需要对查询结果操作")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('for(Document:document:ret){\n//方法1  直接拿key对应的value\ndocument.get("key");\n//方法2  转成model   这里不做介绍，mongo的数据是json形式的数据所以直接google json怎么转model就可以\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);