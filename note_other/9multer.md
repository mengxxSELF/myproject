# express + multer

Multer是一个nodejs中间件，用来处理http提交multipart/form-data，也就是文件上传


##

```
var multer = require('multer');
var path = require('path')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log('鹿晗鹿晗鹿晗鹿晗鹿晗鹿晗鹿晗鹿晗 ')
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

### multer API






