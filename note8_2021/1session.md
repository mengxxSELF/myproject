# session

将数据存储在服务器端。和cookie不同。比cookie要安全

## session 存储的基本原理

> 在服务器端使用唯一标识存储数据，一个标识对应一个值，将此标识值发送给客户端
当客户端携带此标识值来访问服务器的时候，就返回给客户端该标识对应的数据值


```
var express = require('express');
var cookieParser = require('cookie-parser');
var uuid = require('uuid'); // 用来生成不同的cookieID 值 作为服务器中存储的唯一标识符
var app =express();


var sessions ={};
var SESSION_KEY='session_id';
app.get('/',function(req,res){
  var getCookieId = req.cookies[SESSION_KEY]; // 判断客户端是否有标识
  if(getCookieId){
      var getCookieCont = sessions[getCookieId]; // 通过这个唯一标识值 在sessions 中查找对应的数据
      if(getCookieCont){
         getCookieCont.moneyTotal -= 10; // 如果有值 将值减去10元
      }
      res.send('你有多钱'+ getCookieCont.moneyTotal )
  }else{
      // 如果发现请求头中   没有SESSION_KE  就创建并赋值
      var sessionId = uuid.v4(); // 生成唯一标识
      sessions[sessionId]=  { moneyTotal : 100   }  ; //在sessions 中保存数值
      res.cookie(SESSION_KEY,sessionId); // 将标识名 写入cookie
      res.send('你有多钱'+ sessions[sessionId].moneyTotal)
  }



})

app.listen(5005);


```