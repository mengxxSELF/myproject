## 跨域问题处理

对于一个网址 http:// www . google : 8080 / script/jquery.js
　　　　  http:// （协议号）
               www  （子域名）
             google （主域名）
               8080 （端口号）
script/jquery.js （请求的地址）
 当协议、子域名、主域名、端口号中任意一各不相同时，都算不同的“域”。

 不同的域之间相互请求资源，就叫“跨域”。

> 解决跨域请求的处理方法

* JSONP

JSONP的局限在于只可以发送get请求

* CORS  (常用)

CORS 全称为 Cross Origin Resource Sharing（跨域资源共享）。
整个CORS通信过程，都是浏览器自动完成，不需要用户参与。
对于开发者来说，CORS通信与同源的AJAX通信没有差别，代码完全一样。
浏览器一旦发现AJAX请求跨源，就会自动添加一些附加的头信息，但用户不会有感觉。
因此，实现CORS通信的关键是服务端。

服务端只需添加相关响应头信息，即可实现客户端发出 AJAX 跨域请求。

```
res.setHeader('Access-Control-Allow-Origin', '*')

```

## $.get $.post 跨域

```
$.ajax({
            url:url,
            method:'POST',
            data:registerData,
            dataType:'json',
            context:this, // 成功或者失败的回调中的this
            success: function (result) {

            }
        })

```




