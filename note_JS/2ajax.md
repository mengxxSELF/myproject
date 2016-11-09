# Ajax

Ajax的核心是 XMLHttpRequest对象 ，即XHR
XHR 可以异步从服务器获取信息，意味着用户在单击之后，不用刷新页面也可以获取新的数据

* 在不重新加载页面的情况下更新网页、
* 在页面已加载后从服务器请求数据、
* 在页面已加载后从服务器接收数据、
* 向后台服务器发送数据等

```
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
  if(xhr.readyState==4&&xhr.status==200){
    console.log('执行回调函数')
  }
}

xhr.open(method,url,true/false);
xhr.send(NULL);

```

## 关于跨域问题

大多数浏览器都实施了同源安全策略，
要求被请求的 URL 与包含XMLHttpRequest脚本的页面
具有相同的主机名和端口。浏览器的这一特性，
给AJAX请求的安全带来了一定的保障，
但对于需要跨域请求的项目和站点也带来了一定的困扰。


> 通过设置响应头 解决站点跨域请求问题

```
res.setHeader('Access-Control-Allow-Origin', '*')

```
这样就允许域名可以通过XMLHttpRequest 对象对站点进行AJAX请求























