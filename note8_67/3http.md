#http  http模块
ping www.baidu.com

##  发送请求的就是客户端

当客户端发起一个请求时，http会发射一个request事件，该事件传入http请求
和http响应对象。http请求允许查询请求的属性，http响应会被发送到客户端

## 请求对象 request

有三个属性
*req.url  请求路径
*req.method 请求方法 get post delete. ...
*req.headers 请求头

## 响应对象 response
用来响应给客户端，可以写入响应头和响应主体

http服务器会在发送响应头之后发送响应主体

响应主体数据有两种：字符串和已经存在的buffer

res.write('write in');
var buffer = new Buffer('hello');
res.write(buffer);


res.statusCode = 200 ; // 404

res.end() // 记得关掉电话



> url 模块
console.log(url); 看看url 对象有什么属性
{ parse: [Function: urlParse],
  resolve: [Function: urlResolve],
  resolveObject: [Function: urlResolveObject],
  format: [Function: urlFormat],
  Url: [Function: Url] }

#  url.parse(request,true)  路径转化为对象
```javascript
Url {
  protocol: 'http:', 协议
      slashes: true,  是否有//
      auth: null, 用户名密码
      host: 'zhidao.baidu.com', 主机
      port: null, 80 端口
      hostname: 'zhidao.baidu.com', 主机名
      hash: null, hash值
      search: '?lm=0&rn=10&pn=0&fr=search&ie=gbk&word=asdasd', 路径和和hash值之间的
      query: 'lm=0&rn=10&pn=0&fr=search&ie=gbk&word=asdasd', 同过true转换成对象
      pathname: '/search',  路径
      path: '/search?lm=0&rn=10&pn=0&fr=search&ie=gbk&word=asdasd', 路径+查询字符串
      href: 'http://zhidao.baidu.com/search?lm=0&rn=10&pn=0&fr=search&ie=gbk&word=asdasd'  }

```
我们一般需要的是 这个路径属性值  pathname



## content-type

* text/html
* text/css
* application/x-javascript

> mime  使用这个模块就不用自己写 content-type值了 可以自己分析
```javascript
var mime = {
    '.html':'text/html',
    '.js':'application/x-javascript',
    '.css':'text/css',
}
```

使用模块代替这个功能 第三方模块mime

安装 npm install mime

mime.lookup()



***

xhr  创建 打开 监听数据 发送

var xhr = new






如果规定响应类型是json格式 xhr = reaponseType('json')
就要用xhr.response

否则不需要了


## querystring 模块
用来转换格式
querystring.parse(obj,&,=);
querystring.stringify(obj,&,=);

var queryObj = querystring.parse(str,[sep],[eq]); //字符串转对象
var queryStr = querystring.stringify(obj,[sep],[eq]); //对象转字符串










