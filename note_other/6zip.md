
# zip  压缩解压缩
主要通过流的方式进行

> deflate Gzip


## Gzip形式的压缩解压

### 压缩
可读流》压缩流》可写流输出

> zlib.createGzip()


```
function zip(filename){
  var rs = fs.createReadStream(filename)
  var z= zlib.createGzip()
  var ws = fs.createWriteStream(filename+'.zip')
  rs.pipe(z).pipe(ws)
}

```

### 解压

可读流》解压流》可写流输出


> zlib.createGunzip()


```
function uzip(filename){
   var rs = fs.createReadStream(filename)
   var uzip = zlib.createGunzip()
   var rw = fs.createWriteStream(filename.slice(0,filename.length-3))
   rs.pipe(uzip).pipe(rw)
}

```

## flate方式压缩解压

```
var d = zlib.createDefalte()

var ud = zlib.createInflate()


```