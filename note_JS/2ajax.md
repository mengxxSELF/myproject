# Ajax

Ajax的核心是 XMLHttpRequest对象 ，即XHR
XHR 可以异步从服务器获取信息，意味着用户在单击之后，不用刷新页面也可以获取新的数据

* 在不重新加载页面的情况下更新网页、
* 在页面已加载后从服务器请求数据、
* 在页面已加载后从服务器接收数据、
* 向后台服务器发送数据等

## XMLHttpRequest对象属性

* readyState HTTP 请求的状态
当用XMLHttpRequest对象发起HTTP请求时，
readyState会从0（初始化）递增到4（接收完成）
* responseText
* responseXML
* status 服务器返回的 HTTP状态代码

例如：200响应正常、404表示页面未找到。
当 readyState 小于 3时，此属不存在，读取这一属性会抛出一个异常。
* statusText

## XMLHttpRequest对象事件监听

* onreadystatechange
每次readyState属性改变的时，调用的监听事件。
当 readyState 为3（所有响应头部都已经接收到。
响应体开始接收但未完成）时，此监听可能会被调用多次。

## XMLHttpRequest 方法
* open(method,url,async)
初始化 HTTP 请求参数，例如 URL 和 HTTP 方法，但是并不发送请求。

method：参数是用于请求的 HTTP 方法。值包括 GET、POST 和 HEAD。

url：参数是请求的主体。大多数浏览器实施了一个同源安全策略，并且要求这个 URL 与包含脚本的文本具有相同的主机名和端口。

async：参数指示请求使用应该异步地执行。如果这个参数是 false，请求是同步的，后续对 send() 的调用将阻塞，直到响应完全接收。如果这个参数是 true 或省略，
请求是异步的，且通常需要一个 onreadystatechange 事件句柄。

* send()

发送HTTP请求。
使用传递给 open() 方法的参数，向web服务器发送HTTP请求。

xhr.send()方法要求传入数据格式是字符串或Document对象，
但如果传入数据是一个Object，
就需要使用JSON.stringify()将其序列化成字符串。


> 一个完整的例子

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

> HTTP请求过程

  HTTP请求发送后，send()会把readyState 设置为2，
  并触发 onreadystatechange 事件临听。

  如果通过open()方法设置async参数为false，
  这个方法会阻塞并不会返回，直到readyState为 4 并且服务器的响应被完全接收才会相应。如果为 true或者省略此参数时，send() 立即返回，服务器响应会在一个后台线程中处理。

  如果服务器响应带有HTTP重定向，
  send()方法或后台线程自动进行重定向。
  当所有的 HTTP 响应头部已经接收，
  send()或后台线程把 readyState 设置为 3 并触发 onreadystatechange 事件监听。如果响应较长，send() 或后台线程可能会多次在状态 3 中触发 onreadystatechange 事件监听（此特性可以作为一个下载进度指示器）。
  最后，当响应完成，send() 或后台线程把 readyState 设置为 4，
  并最后一次触发事件监听。























