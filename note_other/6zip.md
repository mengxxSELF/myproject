# zip  ѹ����ѹ��
��Ҫͨ�����ķ�ʽ����

> deflate Gzip


## Gzip��ʽ��ѹ����ѹ

### ѹ��
�ɶ�����ѹ��������д�����

> zlib.createGzip()


```
function zip(filename){
  var rs = fs.createReadStream(filename)
  var z= zlib.createGzip()
  var ws = fs.createWriteStream(filename+'.zip')
  rs.pipe(z).pipe(ws)
}

```

### ��ѹ

�ɶ�������ѹ������д�����


> zlib.createGunzip()


```
function uzip(filename){
   var rs = fs.createReadStream(filename)
   var uzip = zlib.createGunzip()
   var rw = fs.createWriteStream(filename.slice(0,filename.length-3))
   rs.pipe(uzip).pipe(rw)
}

```

