# 文件模块  fs

里面的方法基本分为同步和异步两种，
同步通过try()catch() 捕获异常

> 在node中能用异步不用同步


###  fs.readFileSync
```javascript

同步方式
var fs = require('fs')
var cont = fs.readFileSync('./1.txt',{encoding:'utf8'}); 如果不写编码格式，将会返回原生Buffer
console.log(cont)

异步方法 只设置编码格式
fs.readFile('./1.txt','utf8', function (err,data) {
    if(err) return err;
    console.log(data);
})



```

###　　fs.writeFile(filename, data, [options], callback)

如果没有目标文件，将会自动创建并且写入内容
如果文件原先存在，会被替换。
data 可以是一个string，也可以是一个原生buffer。



```javascript


fs.writeFile('./2.txt','alone and locing', function (err,data) {
    console.log(arguments)
})

```

###  尝试读取1.txt 中内容放到 2.txt 中
(fsCopyFile)[]