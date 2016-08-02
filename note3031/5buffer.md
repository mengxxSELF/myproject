#buffer   缓存区

###为了处理类二进制数据，node进入了一个二进制缓存区实现，
该实现通过buffer的API暴露接口到外界

缓存区的长度以字节为单位，可以随机设置和获取缓存区的数据

##创建缓冲区的三种方式
```javascript
var buffer =new Buffer(10); 10是缓存区的长度 是以字节为计量单位的
var buffer =new Buffer([2,4,56,778,8  ]); 指定内容 数组形式
var buffer =new Buffer('water and floor'); 指定内容  字符串形式


```

> 创建buffer的时候你可以指定他的编码格式

```javsscript
var butter = new Buffer('create','utf8') 默认是utf-8
var butter = new Buffer('create','ascii')   ASCII
var butter = new Buffer('create','base64') base64

```




## 你可以手动清楚buffer内存
`buffer.fill(0)`




***
#编码格式

* UTF-8
* ASCII
* base64



***

#进制

##进制
2 8 10 16

buffer是16进制  默认的编码格式是utf8  utf8中汉字占3个字节




##进制转换

###转换为十进制

```javascript
console.log(parseInt('Oxef'));


```

###转换为任意进制
```javascript
console.log(  (Oxfa).toString(2)   ) // 后面是需要转成的进制


```















