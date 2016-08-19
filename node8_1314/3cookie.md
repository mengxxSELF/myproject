# cookie

客户端第一次向服务器发起请求，服务器通过响应头Set-Cookie向客户端种植cookie


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
## cookie 的一些属性

* maxAge  最大失效时间,在多久之后失效
* Path  使用该路径时候才发射cookie
* Expires 过期时间
*  httpOnly  浏览器不可以操作cookie

不写这个属性，浏览器可以通过document.cookie 更改cookie值
document.cookie='name=name1'



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
> 尝试加上一些cookie属性

```javascript

//domain指定下次向哪个服务器发请求的时候要发送此cookie
  //res.cookie('name','zfpx',{domain:'a.zfpx.cn'});

  //设置下次向哪个路径的时候发送此cookie
  //res.cookie('name','zfpx',{path:'/read'});

   //设置cookie的有效期 过期时间
  //res.cookie('name','zfpx',{expires:new Date(Date.now()+10*1000)});
    //设置cookie的倒计时时间
  //res.cookie('name','zfpx',{maxAge:20*1000});
 //   res.cookie('name','zfpx');

```






##  使用第三方插件 cookieParser cookie加载器

> 使用了cookieParser   会挂载  req.cookies


```javascript

var cookieParser = require('cookie-parser');
app.use( cookieParser() );//要先调用一下中间件




```


> 判断页面访问次数


```javascript

app.get('/write', function (req,res) {
    var getC = req.cookies.visit;
    if(getC){
        getC=parseInt(getC)+1;
    }else{
        getC=1;
    }
    res.cookie('visit',getC);
    res.send(req.cookies.visit)
});
app.get('/clear', function (req,res) {
    res.clearCookie('visit'); // 清除页面的cookie值
    res.send(req.cookies)
})

```


## cookie 加密



```javascript

var cookieParser = require('cookie-parser');

app.use(cookieParser('mxx')); 设置秘钥

app.get('/write',function(req,res){
   res.cookie('name','suxie',{signed:true}); //  signed=true表示需要加密
   res.send();
})
app.get('/readc',function(req,res){
   res.send( req.singedCookies ); // 这是读取cookie值 要是使用req.cookies是读不到的
})



```














