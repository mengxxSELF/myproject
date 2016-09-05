# WebSocket

## 1 轮询

浏览器周期性的发出请求，但是这样的话会有大量消耗

```
 var xhr = new XMLHttpRequest();
    setInterval(function(){
        xhr.open('GET','http://localhost:5005/clock',true);
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                document.querySelector('#content').innerHTML = xhr.responseText;
            }
        }
        xhr.send();
    },1000);
```
而且会出现跨域问题

所以要设置响应头

```
    res.setHeader('Access-Control-Allow-Origin','*')

```

## 2 长轮询
长轮询是在打开一条连接以后保持连接,等待服务器推送来数据再关闭连接 然后浏览器再发出新的请求

```
function send(){
        setInterval(function(){
            var xhr = new XMLHttpRequest();
            xhr.open('GET','http://localhost:5005/clock',true);
            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4 && xhr.status == 200){
                    document.querySelector('#content').innerHTML = xhr.responseText;
                    /* 当收到结果再发送下一次请求 */
                    send();
                }
            }
            xhr.send();
        },1000);
    };
    send();
```



## 3 WebSocket

WebSocket 不需要频繁请求，而且不需要处理跨域问题


> .send   发送消息都用这个

无论是客户端向服务器发消息
还是服务器向客户端发消息

创建服务器端server.js
创建客户端 client.js
创建客户端页面 client.html

正常会返回页面状态码 101
表示 101 （切换协议） 请求者已要求服务器切换协议，服务器已确认并准备切换。