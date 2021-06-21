<!DOCTYPE html>
<html lang="en">

<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8">
	<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport">
	
	<!-- title -->
	
	<title>
	
		nginx部署多个vue项目 分vue-cli2.x和3.x | 
	 
	Teler的日常
	</title>
	
	<!-- keywords,description -->
	 
		<meta name="description" content="日常小站" />
	

	<!-- favicon -->
	
	<link rel="shortcut icon" href="/favicon.ico">
	


	<!-- search -->
	<script>
		var searchEngine = "https://www.google.com/search?q=";
		if(typeof searchEngine == "undefined" || searchEngine == null || searchEngine == ""){
			searchEngine = "https://www.google.com/search?q=";
		}
		var homeHost = "wujun234.github.io";
		if(typeof homeHost == "undefined" || homeHost == null || homeHost == ""){
			homeHost = window.location.host;
		}
	</script>


	
<link rel="stylesheet" href="/css/main.css">

	
<link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css">

	
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.17.1/build/styles/darcula.min.css">

	
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css">


	
<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js"></script>

	
<script src="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"></script>

	
<script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.17.1/build/highlight.min.js"></script>

	
<script src="https://cdn.jsdelivr.net/npm/jquery-pjax@2.0.1/jquery.pjax.min.js"></script>

	
<script src="/js/main.js"></script>

	
		
<script src="https://cdn.jsdelivr.net/npm/leancloud-storage/dist/av-min.js"></script>

		
<script src="https://cdn.jsdelivr.net/npm/valine@1.3.10/dist/Valine.min.js"></script>

	
	
		<script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
	
<meta name="generator" content="Hexo 5.4.0"></head>

<body>
	<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?3efe99c287df5a1d6f0d02d187e403c1";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>

<header id="header">
    <a id="title" href="/" class="logo">Teler的日常</a>

	<ul id="menu">
		<li class="menu-item">
			<a href="/about" class="menu-item-link">ABOUT</a>
		</li>
	

	

		<li class="menu-item">
			<a href="https://github.com/wujun234/uid-generator-spring-boot-starter" class="menu-item-link" target="_blank">
				UidGenerator
			</a>
		</li>
		<li class="menu-item">
			<a href="https://github.com/wujun234" class="menu-item-link" target="_blank">
				<i class="fa fa-github fa-2x"></i>
			</a>
		</li>
	</ul>
</header>

	
<div id="sidebar">
	<button id="sidebar-toggle" class="toggle" ><i class="fa fa-arrow-right " aria-hidden="true"></i></button>
	
	<div id="site-toc">
		<input id="search-input" class="search-input" type="search" placeholder="按回车全站搜索">
		<div id="tree">
			

			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/Elastic%20Search%20%E6%B7%BB%E5%8A%A0%20split%20%E8%87%AA%E5%AE%9A%E4%B9%89%E5%88%86%E8%AF%8D%E6%96%B9%E6%B3%95">
										Elastic Search 添加 split 自定义分词方法
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/Elastic%20search%20%E5%AD%97%E6%AE%B5%E6%8C%87%E5%AE%9A%E8%87%AA%E5%B8%A6%E5%88%86%E8%AF%8D%E5%99%A8">
										Elastic search 字段指定自带分词器
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/Long%20%E8%BF%94%E5%9B%9E%E7%BB%99%E5%89%8D%E5%8F%B0%20js%E4%B8%AD%E4%B8%A2%E5%A4%B1%E7%B2%BE%E5%BA%A6">
										Long 返回给前台 js中丢失精度
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/MinMaxNormalize%20%E8%A7%84%E4%B8%80%E5%8C%96%E7%AE%97%E6%B3%95">
										MinMaxNormalize 规一化算法
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/Navicat%2012%E8%BF%9E%E6%8E%A5Oracle%E5%A4%B1%E8%B4%A5%20%E6%8A%A5%E9%94%99_ORA-28547_%E6%88%96%E8%80%85_oracle%20library%20is%20not%20loaded_">
										Navicat 12连接Oracle失败 报错_ORA-28547_或者_oracle library is not loaded_
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/No%20result%20defined%20for%20action,%E9%9B%86%E7%BE%A4%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%87%BA%E7%8E%B0%E7%9A%84%E6%95%B0%E6%8D%AE%E5%BA%93%E8%BF%9E%E4%B8%8D%E4%B8%8A">
										No result defined for action,集群服务器出现的数据库连不上
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/PostgreSQL%20%E4%BD%BF%E7%94%A8%E6%95%B0%E7%BB%84%E7%B1%BB%E5%9E%8B">
										PostgreSQL 使用数组类型
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/ajax%E8%BF%94%E5%9B%9E%E6%88%90%E5%8A%9F%E5%8D%B4%E8%BF%9B%E5%85%A5%E4%BA%86error">
										ajax返回成功却进入了error
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/centos7%20docker%20%E6%9B%B4%E6%8D%A2%E8%BF%81%E7%A7%BB%E6%95%B0%E6%8D%AE%E7%9B%AE%E5%BD%95">
										centos7 docker 更换迁移数据目录
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/centos7%20%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85docker%E5%92%8Cdocker-compose">
										centos7 离线安装docker和docker-compose
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/docker%20hadoop%E4%BC%AA%E5%88%86%E5%B8%83%E5%BC%8F%20java%E4%B8%8A%E4%BC%A0%E6%8A%A5%E9%94%99">
										docker hadoop伪分布式 java上传报错
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/echarts%20%E8%AF%8D%E4%BA%91%E4%BC%9A%E6%B8%B2%E6%9F%93%E4%B8%A4%E6%AC%A1">
										echarts 词云会渲染两次
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/elementui%20table%20%E9%BB%98%E8%AE%A4%E5%8B%BE%E9%80%89">
										elementui table 默认勾选
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/elementui%20%E7%A6%81%E6%AD%A2%E6%B5%8F%E8%A7%88%E5%99%A8%E8%87%AA%E5%8A%A8%E5%A1%AB%E5%85%85%E7%94%A8%E6%88%B7%E5%90%8D%E5%AF%86%E7%A0%81">
										elementui 禁止浏览器自动填充用户名密码
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/es%20%E9%80%9A%E8%BF%87reindex%E5%AE%9E%E7%8E%B0%E9%9B%86%E7%BE%A4%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB">
										es 通过reindex实现集群数据迁移
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/git%20.gitignore%E9%80%9A%E7%94%A8%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6">
										git .gitignore通用配置文件
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/hello-world">
										hello-world
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/idea%E5%85%B3%E9%97%AD%E4%B8%8D%E5%BF%85%E8%A6%81%E7%9A%84%E6%8F%92%E4%BB%B6%E5%87%8F%E5%B0%91%E5%86%85%E5%AD%98%E5%8D%A0%E7%94%A8">
										idea关闭不必要的插件减少内存占用
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/idea%E6%9B%B4%E6%94%B9%E7%BC%A9%E8%BF%9B%E7%BA%BF%E9%A2%9C%E8%89%B2">
										idea更改缩进线颜色
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/idea%E8%AE%BE%E7%BD%AE%E5%88%9B%E5%BB%BA.java%E6%96%87%E4%BB%B6%E7%9A%84%E6%A8%A1%E6%9D%BF">
										idea设置创建.java文件的模板
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/idea%E9%83%A8%E5%88%86%E6%88%96%E6%95%B4%E4%BD%93java%E6%96%87%E4%BB%B6%E4%B8%8D%E7%BC%96%E8%AF%91%E4%B8%BAclass%E6%96%87%E4%BB%B6%20%E6%88%96%E7%BC%96%E8%AF%91%E5%90%8E%E4%B8%8D%E6%98%AF%E6%9C%80%E6%96%B0%E7%9A%84">
										idea部分或整体java文件不编译为class文件 或编译后不是最新的
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/input%E4%B8%8B%E6%8B%89%E9%80%89%E6%8B%A9%E6%A1%86%E5%8F%AF%E4%BB%A5%E8%87%AA%E8%A1%8C%E8%BE%93%E5%85%A5%E4%B9%9F%E5%8F%AF%E4%BB%A5%E4%B8%8B%E6%8B%89%E9%80%89%E6%8B%A9">
										input下拉选择框可以自行输入也可以下拉选择
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/jquery%20%E7%82%B9%E5%87%BB%E6%B5%8F%E8%A7%88%E5%99%A8%E8%BF%94%E5%9B%9E%E4%B8%8A%E4%B8%80%E9%A1%B5%E6%8C%89%E9%92%AE%E5%B9%B6%E8%83%BD%E7%9B%B4%E6%8E%A5%E5%88%B7%E6%96%B0">
										jquery 点击浏览器返回上一页按钮并能直接刷新
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/jquery%20%E8%8A%82%E6%B5%81%E9%98%B2%E6%8A%96">
										jquery 节流防抖
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/js%20jquery%20%E9%99%90%E5%88%B6input%E8%BE%93%E5%85%A5%E6%A1%86%E5%8F%AA%E8%83%BD%E8%BE%93%E5%85%A5%E4%B8%A4%E4%BD%8D%E5%B0%8F%E6%95%B0%E7%9A%84%E6%95%B0%E5%AD%97">
										js jquery 限制input输入框只能输入两位小数的数字
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/js_jquery%E8%8E%B7%E5%8F%96%E4%B8%8D%E5%88%B0%E9%A1%B5%E9%9D%A2%E5%85%83%E7%B4%A0%20%E9%9C%80%E8%A6%81%E7%82%B9%E5%87%BB%E4%B8%80%E4%B8%8B%E6%89%8D%E8%83%BD%E6%89%BE%E5%88%B0">
										js_jquery获取不到页面元素 需要点击一下才能找到
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/kibana%20%E6%9F%A5%E8%AF%A2ES%20%E7%9A%84%E4%B8%80%E4%BA%9B%E8%AF%AD%E6%B3%95">
										kibana 查询ES 的一些语法
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/kindeditor%E5%AF%8C%E6%96%87%E6%9C%AC%E7%BC%96%E8%BE%91%E5%99%A8%E9%80%9A%E8%BF%87%E5%8F%82%E6%95%B0%E5%88%9D%E5%A7%8B%E5%8C%96%E9%99%90%E5%88%B6%E4%B8%8A%E4%BC%A0%E5%9B%BE%E7%89%87%E7%AD%89%E5%8A%9F%E8%83%BD">
										kindeditor富文本编辑器通过参数初始化限制上传图片等功能
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/layui%20lay-verify%20form%E8%A1%A8%E5%8D%95%E8%87%AA%E5%AE%9A%E4%B9%89%E9%AA%8C%E8%AF%81%E8%A7%84%E5%88%99">
										layui lay-verify form表单自定义验证规则
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/layui%E7%9A%84laydate%E6%8E%A7%E4%BB%B6%E7%9A%84%E4%BD%BF%E7%94%A8">
										layui的laydate控件的使用
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/mapbox-gl_Style%20is%20not%20done%20loading">
										mapbox-gl_Style is not done loading
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/myEclipse%E9%A1%B9%E7%9B%AE%E6%8A%A5%E9%94%99%E5%8F%89%20%E4%BD%86%E8%83%BD%E6%AD%A3%E5%B8%B8%E8%BF%90%E8%A1%8C">
										myEclipse项目报错叉 但能正常运行
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/mysql%20%20%20%20%20%20com.mysql.jdbc.exceptions.jdbc4.CommunicationsException">
										mysql      com.mysql.jdbc.exceptions.jdbc4.CommunicationsException
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/nginx%20%E5%9F%BA%E7%A1%80%E9%85%8D%E7%BD%AE%EF%BC%9A%E5%A4%9A%E4%B8%AAlocation%E8%BD%AC%E5%8F%91%E4%BB%BB%E6%84%8F%E8%AF%B7%E6%B1%82%E6%88%96%E8%AE%BF%E9%97%AE%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90%E6%96%87%E4%BB%B6">
										nginx 基础配置：多个location转发任意请求或访问静态资源文件
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/nginx%20%E8%BD%AC%E5%8F%91%E8%A7%84%E5%88%99%E6%A1%88%E4%BE%8B%E8%AF%A6%E8%A7%A3">
										nginx 转发规则案例详解
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/nginx%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86%20%E7%AB%AF%E5%8F%A3%E4%B8%A2%E5%A4%B1">
										nginx反向代理 端口丢失
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file active">
									<a href="/2021/06/21/03/nginx%E9%83%A8%E7%BD%B2%E5%A4%9A%E4%B8%AAvue%E9%A1%B9%E7%9B%AE%20%E5%88%86vue-cli2.x%E5%92%8C3.x">
										nginx部署多个vue项目 分vue-cli2.x和3.x
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/oracle%20group%20by%E5%88%86%E7%B1%BB%E6%9F%A5%E8%AF%A2%E6%B1%87%E6%80%BB%20%E6%B2%A1%E6%95%B0%E6%8D%AE%E7%9A%84%E6%97%B6%E5%80%99%E8%AE%A9%E6%AD%A4%E9%A1%B9%E6%98%BE%E7%A4%BA%E4%B8%BA0">
										oracle group by分类查询汇总 没数据的时候让此项显示为0
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/oracle%20mybatis%20DATE%E6%97%A0%E6%B3%95%E5%AD%98%E6%97%B6%E5%88%86%E7%A7%92">
										oracle mybatis DATE无法存时分秒
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/oracle%20%E7%94%A8%E6%88%B7%E8%A2%AB%E9%94%81">
										oracle 用户被锁
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/oracle%20%E7%A9%BA%E9%97%B4%E5%AD%97%E6%AE%B5%E5%9C%A8java%E4%B8%AD%E8%83%BD%E6%9F%A5%E8%AF%A2%E5%87%BA%E6%9D%A5%E5%B9%B6%E8%BF%94%E5%9B%9E%E7%BB%99%E6%8E%A5%E5%8F%A3">
										oracle 空间字段在java中能查询出来并返回给接口
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/orcle%20full%20join%20%E5%A4%9A%E5%BC%A0%E8%A1%A8%E6%A8%AA%E5%90%91%E5%85%B3%E8%81%94%20%E6%8B%BC%E6%8E%A5%E5%A4%9A%E5%BC%A0%E8%A1%A8%E6%89%80%E9%9C%80%E5%AD%97%E6%AE%B5">
										orcle full join 多张表横向关联 拼接多张表所需字段
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/org.apache.jasper.JasperException_%20Unable%20to%20compile%20class%20for%20JSP_">
										org.apache.jasper.JasperException_ Unable to compile class for JSP_
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/org.springframework.beans.factory.BeanInitializationException_%20Could%20not%20load%20properties;">
										org.springframework.beans.factory.BeanInitializationException_ Could not load properties;
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/radio%E5%8F%96%E6%B6%88%E9%80%89%E4%B8%AD%E5%B9%B6%E8%83%BD%E5%86%8D%E6%AC%A1%E9%80%89%E4%B8%AD">
										radio取消选中并能再次选中
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/vue%20router-link%20%E5%A3%B0%E6%98%8E%E5%BC%8F%E8%BF%94%E5%9B%9E%E4%B8%8A%E4%B8%80%E9%A1%B5">
										vue router-link 声明式返回上一页
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/vue+elementui%20%E6%89%93%E5%BC%80%E5%BC%B9%E7%AA%97%20%E4%BD%86%E6%98%AF%E5%BC%B9%E7%AA%97%E7%9A%84%E6%8E%A5%E5%8F%A3%E5%8F%AA%E4%BC%9A%E5%88%9D%E5%A7%8B%E8%B0%83%E7%94%A8%E4%B8%80%E6%AC%A1">
										vue+elementui 打开弹窗 但是弹窗的接口只会初始调用一次
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/windows%20terminal%20settings.json%E7%9A%84%E4%B8%80%E4%BA%9B%E4%B8%AA%E4%BA%BA%E9%85%8D%E7%BD%AE%E4%B8%8E%E6%B3%A8%E9%87%8A">
										windows terminal settings.json的一些个人配置与注释
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/window%E7%9A%84linux%E5%AD%90%E7%B3%BB%E7%BB%9F">
										window的linux子系统
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/winows%20%E5%BC%80%E6%9C%BA%E8%87%AA%E5%90%AF%E5%8A%A8%20jar%20nginx%20redis%E7%AD%89">
										winows 开机自启动 jar nginx redis等
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/wsl%20debian10%E4%BD%BF%E7%94%A8%E9%97%AE%E9%A2%98%E6%B1%87%E6%80%BB">
										wsl debian10使用问题汇总
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/%E4%B8%80%E7%BB%84%E6%95%B0%E5%B7%AE%E8%B7%9D%E8%BF%87%E5%A4%A7%E7%9A%84%E9%97%AE%E9%A2%98%EF%BC%9Asymbolsize%20%E8%AE%A1%E7%AE%97%E5%85%AC%E5%BC%8F">
										一组数差距过大的问题：symbolsize 计算公式
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/%E4%B8%AD%E5%9B%BD%E5%9F%8E%E5%B8%82%E4%B8%AD%E5%BF%83%E7%82%B9%E5%9D%90%E6%A0%87">
										中国城市中心点坐标
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/%E5%88%A9%E7%94%A8layer%E5%AE%9E%E7%8E%B0%E6%94%BE%E5%A4%A7%E5%9B%BE%E7%89%87%E7%9A%84%E6%95%88%E6%9E%9C">
										利用layer实现放大图片的效果
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/%E5%BC%80%E5%8F%91%E4%B8%AD%E5%B8%B8%E7%94%A8%E7%9A%84%E5%B7%A5%E5%85%B7%E5%BD%92%E7%B1%BB">
										开发中常用的工具归类
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/%E5%BE%AE%E4%BF%A1%E6%B5%8F%E8%A7%88%E5%99%A8%20%E8%AE%BF%E9%97%AEajax%E6%8E%A5%E5%8F%A3%20%E5%8D%81%E7%A7%92%E9%92%9F%E6%9C%AA%E5%93%8D%E5%BA%94%E8%87%AA%E5%8A%A8%E9%87%8D%E5%8F%91">
										微信浏览器 访问ajax接口 十秒钟未响应自动重发
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/%E6%89%8B%E6%9C%BA%E7%A4%BE%E4%BC%9A%E5%8C%96%E5%88%86%E4%BA%AB%E5%88%B0qq%E5%A5%BD%E5%8F%8B%E3%80%81qq%E7%A9%BA%E9%97%B4%E3%80%81%E5%BE%AE%E4%BF%A1%E3%80%81%E5%BE%AE%E4%BF%A1%E6%9C%8B%E5%8F%8B%E5%9C%88%E3%80%81%E5%BE%AE%E5%8D%9A%E7%AD%89(%E5%8C%BA%E5%88%86%E6%B5%8F%E8%A7%88%E5%99%A8)">
										手机社会化分享到qq好友、qq空间、微信、微信朋友圈、微博等(区分浏览器)
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
							<ul>
								<li class="file">
									<a href="/2021/06/21/03/%E7%99%BE%E5%BA%A6%E5%9C%B0%E5%9B%BEjs%20Uncaught%20TypeError_%20Cannot%20read%20property%20%E2%80%98gc%E2%80%98%20of%20undefined">
										百度地图js Uncaught TypeError_ Cannot read property ‘gc‘ of undefined
									</a>
								</li>
								<div class="article-toc" style="display: none;"></div>
							</ul>
			
		</div>
	</div>
</div>

	<!-- 引入正文 -->
	<div id="content">
		<h1 id="article-title">

	nginx部署多个vue项目 分vue-cli2.x和3.x
</h1>
<div class="article-meta">
	
	<span>fangweilong</span>
	<span>2021-06-21 11:37:50</span>
		<div id="article-categories">
    
		<span>Categories：</span>
            
    

    
		<span>Tags：</span>
            
    
		</div>

</div>

<div id="article-content">
	<h2 id="1-vue-cli3-x"><a href="#1-vue-cli3-x" class="headerlink" title="1.vue-cli3.x"></a>1.vue-cli3.x</h2><p><img src="https://img-blog.csdnimg.cn/2019071613392824.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3R1dGlhbjIwMDA=,size_16,color_FFFFFF,t_70" alt="在这里插入图片描述"><br>在根目录下找到”vue.config.js”<br><img src="https://img-blog.csdnimg.cn/20190716134038552.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3R1dGlhbjIwMDA=,size_16,color_FFFFFF,t_70" alt="在这里插入图片描述"><br>更改<code>publicPath: &#39;/portal/&#39;</code> 的 portal 为你自己的项目名，记得前后的”/“</p>
<h2 id="2-vue-cli2-x"><a href="#2-vue-cli2-x" class="headerlink" title="2.vue-cli2.x"></a>2.vue-cli2.x</h2><p>找到config/index.js文件<br><img src="https://img-blog.csdnimg.cn/2019071616150043.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3R1dGlhbjIwMDA=,size_16,color_FFFFFF,t_70" alt="在这里插入图片描述"><br>找到”build”部分<br><img src="https://img-blog.csdnimg.cn/20190716161557630.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3R1dGlhbjIwMDA=,size_16,color_FFFFFF,t_70" alt="在这里插入图片描述"><br>同样的更改<code>assetsPublicPath: &#39;/gardan/&#39;,</code>为你自己的项目名， 别忘了前后的”/“</p>
<p>3.nginx的配置<br>在nginx的html下新建两个文件夹，一个gardan，一个portal</p>
<p>打开config/nginx.conf文件夹，按照下面的配置项更改，我做了部分删减，只留下了实际更改的部分</p>
<figure class="highlight plaintext"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br><span class="line">9</span><br><span class="line">10</span><br><span class="line">11</span><br><span class="line">12</span><br></pre></td><td class="code"><pre><span class="line">server &#123;</span><br><span class="line">        listen       8080;</span><br><span class="line">        server_name  localhost;</span><br><span class="line"></span><br><span class="line">        location /gardan &#123;#项目1</span><br><span class="line">			try_files $uri $uri/ /gardan/index.html;#指定到目录下的index.jtml</span><br><span class="line">		&#125;</span><br><span class="line">		</span><br><span class="line">		location /portal &#123;//项目2</span><br><span class="line">			try_files $uri $uri/ /portal/index.html;#指定到目录下的index.jtml</span><br><span class="line">		&#125;</span><br><span class="line">    &#125;</span><br></pre></td></tr></table></figure>


</div>


    <div class="post-guide">
        <div class="item left">
            
              <a href="/2021/06/21/03/nginx%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86%20%E7%AB%AF%E5%8F%A3%E4%B8%A2%E5%A4%B1">
                  <i class="fa fa-angle-left" aria-hidden="true"></i>
                  nginx反向代理 端口丢失
              </a>
            
        </div>
        <div class="item right">
            
              <a href="/2021/06/21/03/oracle%20group%20by%E5%88%86%E7%B1%BB%E6%9F%A5%E8%AF%A2%E6%B1%87%E6%80%BB%20%E6%B2%A1%E6%95%B0%E6%8D%AE%E7%9A%84%E6%97%B6%E5%80%99%E8%AE%A9%E6%AD%A4%E9%A1%B9%E6%98%BE%E7%A4%BA%E4%B8%BA0">
                oracle group by分类查询汇总 没数据的时候让此项显示为0
                <i class="fa fa-angle-right" aria-hidden="true"></i>
              </a>
            
        </div>
    </div>




<script>
	
	
</script>
	</div>
	<div id="footer">
	<p>
	©2019-<span id="footerYear"></span> 
	<a href="/">fangweilong</a> 
	
	
		|
		<span id="busuanzi_container_site_pv">
			pv
			<span id="busuanzi_value_site_pv"></span>
		</span>
		|
		<span id="busuanzi_container_site_uv"> 
			uv
			<span id="busuanzi_value_site_uv"></span>
		</span>
	
	<br>
	Theme <a href="//github.com/wujun234/hexo-theme-tree" target="_blank">Tree</a>
	by <a href="//github.com/wujun234" target="_blank">WuJun</a>
	Powered by <a href="//hexo.io" target="_blank">Hexo</a>
	</p>
</div>
<script type="text/javascript"> 
	document.getElementById('footerYear').innerHTML = new Date().getFullYear() + '';
</script>
	<button id="totop-toggle" class="toggle"><i class="fa fa-angle-double-up" aria-hidden="true"></i></button>
</body>
</html>