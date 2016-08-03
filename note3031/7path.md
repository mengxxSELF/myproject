#path模块

进行规范、连接、解析路径等其他操作

##  path.normalize(path)    规范路径
```javascript

path.normalize('./a////s///dd')

```
## path.join() 连接路径并且规范化路径

```javascript
path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')
// returns '/foo/bar/baz/asdf'
这里的quux 加上后面的.. 相当于返回一级 所以你看不到quuex
//1. 会把/斜杠转换成\
//2。 而且识别. 和..
//3. 将多个/转换成单个
//4. 保留最后一个/



path.join('foo', {}, 'bar')
// throws TypeError: Arguments to path.join must be strings
```


## path.resolve() 解析路径
```javascript
var pathResolve = path.resolve('/foo/bar', '../baz');
d:\foo\baz


var wrongPath = path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
这种解析的结果 会将当前工作目录附加到解析路径的前边
d:\Testing\zhufeng\wbs\packageTesting\wwwroot\static_files\gif\image.gif

```


##  path.relative() 查找两个绝对路径之间的相对路径

```javascript
path.relative('','')

```

##  提取路径的组成部分

* path.dirname  获取父级路径
* path.basename  获取最后的那个路径信息
* paht.extname 获取文件扩展名

```javascript
path.dirname('/foo/bar/baz/asdf/quux')
// returns '/foo/bar/baz/asdf'

path.basename 有两个参数，第二个参数可选

path.basename('/foo/bar/baz/asdf/what')
  // returns 'what'

path.basename('/foo/bar/baz/asdf/quux.html')
  // returns 'quux.html'

第二个参数你可以设定文件的扩展名 ，这样会读出文件名称（不带有扩展名）
path.basename('/foo/bar/baz/asdf/quux.html', '.html')
  // returns 'quux'

path.extname('foo/pngs/logo.png');
// .png

```





