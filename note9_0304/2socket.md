# Scoket

socket是 WebSocket库 同时具备客户端jS和服务端Node.js
它会自动根据浏览器从WebSocket、AJAX长轮询、Iframe流等等
各种方式中选择最佳的方式来实现网络实时应用，
非常方便和人性化，而且支持的浏览器最低达IE5.5。

## 1 服务端事件

** connection 成功连接到客户端
** disconnect
** message 接受到客户端的信息
** error 监听错误

## 2 客户端事件

** connect 成功连接到服务端
** disconnect
** message 接受到服务端的信息
** error 监听错误

## 一个简单的通信

> npm i socket.io -S


客户端服务端实时通信


## 1 服务端写好socket.io

 服务端监听客户端请求
>  socket是服务器与客户端通信的对象
```
var server = http.createServer()
var io = require('socket.io')(server)

io.on('connention',function(socket){
   socket.send('连接上啦')
})


server.listen(9090)
```

## 2 页面中写好socket.io

> 引入socket.io 的js文件

在引入
```<script src="/socket.io/socket.io.js"></script>```
后，window挂载一个io 属性


消息通过socket.io 传递，所以必须连接到后台
通过
```io.connect('http://localhost:9090')```
或者直接写 ```io.connent('/')  ```


```
window.onload =function(){
   var socket = io.connent('/')
   socket.on('connect',function(){
       console.log('我们连接上啦')
   })
   socket.on('message',function(msg){
      cosnoelr.log('收到你的消息啦'+msg)
   })
}

```


### send 原理


```
Namespace.prototype.send =Namespace.prototype.write = function(){
  var args = Array.prototype.slice.call(arguments);
  args.unshift('message'); // 开头增加message
  this.emit.apply(this, args);
  return this;
};

```


##  房间

> join leave



##  广播

> io.emit

进入房间再广播

> io.in().emit()




##  聊天室

可同时进入多个房间

### 页面

这里只写几个重点的代码行


```
//第一个参数是事件类型  第二个参数是传的参数
  socket.emit('join',roomName);


```

### 服务器

发消息到服务器  服务器接受消息  然后服务器广播给所有人





















