# cookie

## cookie

使用原始的http服务器方法写入一个cookie

```javascript

http.createServer(function(req,res){
   var path = url.parse(req.url,true)
   if(path.pathname=='writec'){
     res.setHeaders('Set-Cookie','name=name1'); // 写入cookie值
     res.end('write ending')
   }else if(path.pathname=='readc'){
     res.end(req.headers.cookie); // 从请求头读取到页面的cookie值
   }

}).listen(3456)

```


> express

在使用express框架之后 cookie的操作方法

```javascript

app.get('/writec',function(req,res){
   res.cookie('cookiekey','cookiename'); // 设置cookie值
   res.send();
});
app.get('/readc',function(req,res){
   var getC = req.headers.cookie; // 读取cookie值
   res.send(getC);
});


```

##  使用第三方插件 cookieParser

** 使用了cookieParser   会挂载  req.cookies*/


```javascript

var cookieParser = require('cookie-parser');
app.use( cookieParser() );//要先调用一下中间件



```


















