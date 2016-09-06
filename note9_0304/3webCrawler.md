## web crawl 网络爬虫

网络爬虫是一种自动获取网页内容的程序,功能如下

* 发出HTTP请求获取指定URL中的内容
* 使用jQuery的语法操作网页元素，提取需要的元素
* 将数据保存到mysql数据库中
* 建立web服务器显示这些数据
* 使用计划任务自动执行更新任务


## 1 request

http请求工具 用来抓取页面

有两个参数  请求地址 回调函数(错误对象 相应对象 响应体)

```
request(url,function(error,request,data){

})

```
其实这个相当于是request.get() 的简写形式

```
request('http://www.163.com', function (err,request,data) {
    if(err){
        console.log(err)
    }else{
        console.log(request.headers) //  你可以看到网页的编码格式
       //console.log(data)
    }
})
```

注意，如果不写编码格式，默认是utf8的，所以有的网页使用的gbk形式的会发生乱码

所以最好还是转码一下

## 2 iconv

 以前的网站如果是gbk   在自动转为utf8的时候 有乱码
 所以需要自己转码  用转码工具iconv   解码jbk

> var iconv = require('iconv-lite')

```
request({
 url:'www.ssss',
 encoding:null
},function(err,request,body){
   var contentType = request.headers['content-type'];
           if(contentType.match(/\bGBK\b/)||contentType.match(/\bgb2312\b/)  ){
               // 如果格式是gbk 转码
               var result = iconv.decode(body,'gbk')
               console.log(body)
           }else{
               // utf8 自动输出
               console.log(body.toString())
           }
})

```
还有一个编码插件 [encoding](http://www.cnblogs.com/ifantastic/p/3503667.html)

抓取一个百度的页面到本地


```
request({
   url:'baudu',
   encoding:null
},function(err,request,body){
    var data = iconv.decode(body,'utf8');
    fs.writeFile('baidu.html',data)
})


```


## 3 cheerio

在服务器端实现类似jQuery的DOM操作

> var cheerio = require('cheerio')

```
var cont = ' <div class="hd">
   <h2 data="356" class="title"><a href="./buzz?b=356&c=10">惊悚悬疑</a></h2>
             <a class="more" href="./buzz?b=356&c=10">更多 &gt;</a>
                 </div>'
var $ = cheerion.load(cont)
$('a').each(function(){
    $me = $(this)
    var getT = $me.text();
    console.log(getT)
})


```
## 4 cron

> var cronJob = require('cron').cronJob

```
var jobd = new cronJob('* * * * * * *',function(){
    console.log(new Date().toLocaleString())
})

```

## 5 child_process

> var child_process = require('child_process')


众所周知node.js是基于单线程模型架构，
这样的设计可以带来高效的CPU利用率，但是无法却利用多个核心的CPU，
为了解决这个问题，node.js提供了child_process模块，
通过多进程来实现对多核CPU的利用. child_process模块提供了四个创建子进程的函数，
分别是spawn，exec，execFile和fork。

```
var child1 =   child_process .spawn( 'node',['sum.js']) // 相当于在命令行执行 node sum.js

var child2 = child_process.exec('node sum.js')

```

* spawn 只要子进程有了标准输出，会马上以流的方式传递给主进程
* exec 子进程有了标准输出 不会立刻传递给主进程，而会收集起来，等待子进程完全
结束终止后才会把所有的标准输出传给回调函数




## stdout 监听子进程的标准输出

* * 如果子进程有输出就会触发data事件
* * 如果子进程的标准输出结束了，会触发end事件

```
var child = child_process.spawn('node',['sum.js'])

child.stdout.on('data',funciton(res){
   console.log(res)
})
child.stdout.on('end',funciton(res){
   console.log(res)
})

child.stdout.on('exit',function(){
    console.log('子进程退出')
})



```

[child_process](http://itbilu.com/nodejs/core/E1kBYnPH.html)



[使用此模块，实现node的下载功能](http://blog.csdn.net/huntzw/article/details/7876760)




## 6 async

### 6.1 串行执行

多个任务依次执行，一个方法执行完毕后才会进入下一方法，方法之间没有数据传递。

> async.series([tasks],callback)

参数：

* 函数数组
  需要执行多个方法。tasks可以以数组形式传入，也可以以object对象形式传入。
  每个方法都要一个回调方法callback(err, result)，
  用于处理错误或进入下一方法。当发生错误时（即：err参数存在时），
  其后的方法会跳过，错误被传入最终回调方法中。
* 回调函数
  可选的最终回调方法。出错时，tasks中抛出的错误将在此方法中捕获，
  错误被传入err参数。
  不出错时，tasks中回调结果将被写入results参数中，以数据或对象形式提供。



这里用抓取页面的请求头为例子
```
async.series([
   function(callback){
      request('www.baiud.com',function (err,req,body){
         callback(null,req.headers)
      })
   },
   function(callback){
         request('www.wetvff.com',function (err,req,body){
            callback(null,req.headers)
         })
      }
],function(err.result){
   console.log(err)
   console.log(result)
})


```
将结果传递给callback 这样最后当数组中的函数执行完毕，回调函数会
打印出所有的result，起值的顺序是 按照数组中函数的排列顺序




