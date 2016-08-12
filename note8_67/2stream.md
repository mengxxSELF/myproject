# stream

* readStream

flag 打开文件要做什么

start end  前+后面
highWaterMark  最大字节数 默认64k


传送字节数

rs.on('data') 切换到流动模式

## 流的方式是异步的，不能用try catch  要用on('err')

### 不写编码格式的， on.('data') 中读取到   就是 buffer形式
如果设置之后，highwaterMark 一定要大于最小编码的字符长度

pause 暂停  resume 开始

##　结束
rs.on('end',function(){
 ...
});


* writeStream

默认编码utf8
highWaterMark  最大字节数 默认16k

ws.write(data);
当数据写入核缓存区，该值为true  当数据存放到队列 ，该值为false



当流成功出刷新挂起的缓存区时调用drain
`ws.on('drain') `


ws.end('当写入结束时候你要写入的东西')


## pipe
相当于可读流和可写流的综合：暂停可读流直到可写流赶上再恢复可读流

(可读流).pipe(可写流);

默认情况下，可读流在结束时会调用end方法

当然你可以设置不这么做

```javascript
var fs =require('fs')
var rs = fs.createReadStream('./2.txt');
var ws =fs.createWriteStream('./3.txt'); 这个目标文件没有回自动创建的

(rs).pipe(ws);
rs.on('end', function () {
    console.log('ending')
})
```











