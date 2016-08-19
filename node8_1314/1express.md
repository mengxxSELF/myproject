## express 框架

提供一系列强大的功能，
：模板解析、静态文件服务、中间件、路由控制等等,
并且还可以使用插件或整合其他模块来帮助你创建各种 Web和移动设备应用,
是目前最流行的基于Node.js的Web开发框架，并且支持Ejs、jade等多种模板，
可以快速地搭建一个具有完整功能的网站。

## 使用

```javascript
var express = require('express');
var app = express(); // 所以app 其实是一个函数

app.listen(8000);
```
## 中间件 路由  请求
```javascript
app.use(path ,function(req,res,next){
   next();
}); // 中间件不写next  会一直挂起
app.use(function(req,res,next){
   next();
}); // 中间件不写next  会一直挂起
app.get('/user',function(req,res){
   res.send( /* 字符串 数组 对象 数字【数字会返回对应状态码】  */  ); // 代替之前的 res.end(/* 只能是字符串或者buffer */)
   res.redirect(   ); // 页面重定向
})

```

## 关于请求的操作

```javascript
app.all('/form',function(req,res){

   req.query; // 获取查询字符串  就是URL ? 之后的那些
   req.path; // 请求地址 相当于  url.parse(req.url,true).pathname;
   req.hostname; //  请求主机名  req.hostname = req.headers.host.split(':')[0];

})

app.get('/book/:id/:name',function(req,res){
    req.params.attrName; // 获取请求参数
    console.log(req.params);
    res.end(req.params.id+req.params.name);
});


```


## 静态资源目录
如果要在网页中加载静态文件（css、js、img），
就需要另外指定一个存放静态文件的目录，
当浏览器发出非HTML文件请求时，服务器端就会到这个目录下去寻找相关文件

```javascript

app.use(express.static(path.resolve('public'))); // 将静态资源放到public中

```











