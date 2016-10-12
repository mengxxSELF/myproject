# express + multer

Multer是一个nodejs中间件，用来处理http提交multipart/form-data，也就是文件上传


##

```
var multer = require('multer');
var path = require('path')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null,path.resolve(__dirname,'../public/uploads/'))
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})
var upload = multer({ storage: storage })
```


使用方式

```
 router.post('/user/user/:id',upload.single('avatar'),su.user.user);
```

[参考网址](http://blog.csdn.net/devil13th/article/details/50404351)

## 直接写在app.js中

```
/* 上传文件*/
var multer = require('multer');
app.use(multer({dest:path.resolve(__dirname,'./public/uploads/')}).array('image'))

```

## multer
### 方法

#### multer() 创建对象

引入multer模块之后，会获取到一个顶级方法。可用来创建multer对象。它接受
一个选项对象，最基本的是dest，用来设置文件的存储位置。如果忽略，则文件
会被保存到内存中。

##### multer的选项对象包含以下值：
* dest 或 storage -- 文件存储位置
* fileFilter -函数，控制可以上传的文件类型
* limits - 上传数据限制（文件大小）

一般需要设置文件的存储位置
** var upload =  multer({dest: path.resolve(__dirname,'../public/uploads')  })


##### 选项参数
* storage 存储引擎
 该选项有以下两个可选项：
 ** DiskStorage  硬盘存储
 ** MemoryStorage   硬盘存储

```
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname,'../pulick/uploads'))
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

var upload = multer({ storage: storage })
```
destination用于设置文件的存储目录，
可以是一个函数或字符串。若未提供该参数，将使用系统的临时目录。

filename用于设置文件名。
若未提供该参数，将使用一个随机字符串，且文件名中不包含扩展名。


如果是硬盘存储

```
var storage = multer.memoryStorage()
var upload = multer({ storage: storage })

```















