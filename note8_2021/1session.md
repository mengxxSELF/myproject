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

使用以上方法，当服务器端重启，数据消失，客户端cookie值存在，所以会出错

## 创建本地数据文件 session.json

```
function setSession(sessions){ // 将session写入文件
        fs.writeFileSync('./session.json',JSON.stringify(sessions))
    }
    function getSession(){ // 将session从文件中读出来
        var sessions ={};
        var exists = fs.existsSync('./session.json');
        if(exists){ // 判断文件是否存在
            var cont = fs.readFileSync('./session.json');
            if(cont){ // 如果在文件中读到内容 就转成对象
                sessions = JSON.parse(cont);
            };
        }
        return sessions;
    }
```

读取session的时候从本地文件中拿，这样当服务端重启也不会影响数据

