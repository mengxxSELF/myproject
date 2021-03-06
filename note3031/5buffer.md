#buffer   缓存区

###为了处理类二进制数据，node进入了一个二进制缓存区实现，
该实现通过buffer的API暴露接口到外界

缓存区的长度以字节为单位，可以随机设置和获取缓存区的数据

##创建缓冲区的三种方式
```javascript
var buffer =new Buffer(10); 10是缓存区的长度 是以字节为计量单位的
var buffer =new Buffer([2,4,56,90,8  ]); 指定内容 数组形式
var buffer =new Buffer('water and floor'); 指定内容  字符串形式

var buffer =new Buffer([257,300 ，-3，-78 ]);
如果数字不在 0-255 之前，无论正负，堆255取模然后输出

var buffer = new  Buffer([256 , 10])
console.log(buffer); // 00 0a

var buffer = new Buffer(['a','b','c']);
console.log(buffer); 00 00 00
//如果不识别都是0

//3.在utf8一个汉字由三个字符组成，node不支持gbk
var buffer = new Buffer("珠峰","ASCII");
//第二个参数可以指定编码 一个汉字在ascii码中代表一个字符
console.log(buffer);

```






> 创建buffer的时候你可以指定他的编码格式

```javsscript
var butter = new Buffer('create','utf8') 默认是utf-8
var butter = new Buffer('create','ascii')   ASCII
var butter = new Buffer('create','base64') base64

```




## 你可以手动清楚buffer内存
`buffer.fill(0)`

## write 方法
```javascript
var buf = new Buffer( 20 );
buf.write('写',0 ,3,'utf8' )
//string,要写入的字符串
//offset,写入buffer的偏移长度 默认为0    注意汉字是三个字节
//length,写入的长度
//encoding,编码格式


buffer.write('欢迎',0);
buffer.write('您',6);
console.log(buffer.toString()) //转化成字符串
console.log(buffer.toString('utf8',2,5));//指定start和end截取汉字


```

## 切分缓存区  slice
在创建或者获取缓存区之后，可以通过制定起始位置来切分缓存区，来创建一个小的缓存区

注意，buffer使用slice 切分缓存区的时候，新缓存区并没有分配新的内存，也没有进行任何复制，
只是引用了父级缓存区的而其实位置

所以，你如果变化新缓存区或者父级缓存区，会对两者都产生影响

```javascript


var c = new Buffer( [2,5,6]);
var a = c.slice(0);
console.log(a)  // <Buffer 02 05 06>
a[1]=9;
console.log(c)  // <Buffer 02 09 06>

会改变原有的buffer值

```

slice创建的子缓存区，在操作完毕后，父级缓存区不会被垃圾收集器回收，所以容易造成
内存泄漏，你可以使用 copy 方法来解决这个问题



## 复制缓存区  copy

source.copy(target  ,targetStart ,sourceStart ,sourceEnd  )
// targetBuffer, 目标buffer
// targetStart, 目标开开始
// sourceStart, 源buffer开始 可省略
// sourceEnd  源buffer结束 可省略


```javascript

var buf =new Buffer('i want after the moon')

var buff = new Buffer(5)

buf.copy(buff ,1 , 2,6);




```

## 拼接buffer   concat
Buffer.concat(list,[totalLength])

参数说明：

 list{Array}：数组类型，Buffer数组，用于被连接

 totalLength：{Number}类型，Buffer数组对象的总大小

 如果长度小于实际长度，将会截取，否则自动补充，补充的是随机值


```javascript

var buf1 = new Buffer('are you ok')
var buf2 = new Buffer('   i am fine')
var bufEmd = Buffer.concat([buf1,buf2],30)
console.log(bufEmd.toString())

```






***
#编码格式

* UTF-8  这是网络上的首选编码格式
* ASCII
* Base64  基于64个可以打印的ASCII字符来表示二进制数据

```javascript
Base64 中最大的是 00111111


```


***

#进制

##进制
2 8 10 16

buffer是16进制  默认的编码格式是utf8  utf8中汉字占3个字节




##进制转换

###转换为十进制

```javascript
console.log(parseInt('Oxef'));
console.log(parseInt(89,16)); 这样写是 当前数 , 当前进制




```

###转换为任意进制
```javascript
console.log(  (Oxfa).toString(2)   ) // 后面是需要转成的进制


```


***
## base64编码解码

1. 把16进制转换成2进制 toString
2. 把2进制数连起来 每隔6位来一刀 前面补00
3. 转换成10进制 parseInt
4. 用对应的值去字符串中取



### 发布一个base编码解码包到npm

(base编码解码包)[  https://www.npmjs.com/package/encodeBase64  ]








***

### 尝试编写buffer,concat函数，如果给出截取长度，则按其截取，否则直接拼接
[代码如下](https://github.com/mengxxSELF/myproject/blob/master/note3031/testing/concatBuffer.js)













