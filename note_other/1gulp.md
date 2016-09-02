# gulp

## 安装

```
npm i gulp -g
npm i gulp -D

```

## gulpfile.js

```
var gulp = require('gulp');

```
通过require可以把gulp模块引入当前项目并赋值给gulp变量
这样gulp这个变量里面就会拥有gulp的所有的方法了

## 创建任务

有两个参数  任务名 函数

```
gulp.task('task1',function(){
   console.log('task task')
});
```
在命令行执行 gulp task1 即可执行该命令


### gulp -T  或者 gulp --tasks
显示所有的任务



注意dest的参数是一个目录名,而绝对不是一个文件名

然后在命令行输入  gulp

如果任务名是default，就默认执行


 > 任务依赖

 ```
 gulp.task('task1',function(
   console.log('task1')
 ))
 gulp.task('task2',function(
   console.log('task2')
 ))
                  // 数组中这是本次任务依赖的那些任务列表
 gulp.task('task3',[ 'task2' ,'task1' ],function(
   console.log('task3')
 ))



 ```

 在命令行直接执行 gulp task3   ，然后会按照其依赖的任务名依次执行对应的任务



## gulp 的工作方式： 流
首先获取到需要的流，然后通过pipe将流导入到你需要的地方，
比如gulp的插件中。经过插件的处理的流又可以导入别的插件中
也可以写到文件中

gulp是以流（stream）为媒介的，不需要频繁生成临时文件，所以速度很快


gulp.src 是用来获取流的，但这个流是虚拟的文件对象流，这个
虚拟的文件对象存放着文件路径、名称和内容等信息


```
gulp.task('taskname',function(){
    gulp.src('./src/*/*.js')
        .pipe(gulp.dest('./bulid'))
})

```

## gulp 的API

* src  指定要处理的源文件
* desr  指定输出的目录


## glob 语法

gulp 通过node-glob模块


```
* 匹配一级目录

```


## 任务之间的依赖

可以设置依赖任务数组，会先执行依赖数组中的任务


```
gulp.task('task1',function(){
 console.log('task1')
})
gulp.task('task2',function(){
 console.log('task2')
})
gulp.task('task3',[task1,task2],function(){

})

```

## gulp.watch 文件监控
* 参数1 需要监控的文件
* 参数2 当监控到变动后需要执行的函数,可以是数组或者回调函数

```
gulp.task('watch',function(){
  gulp.watch('./obj/*',['watch'])
})

gulp.task('watch',function(){
  gulp.watch('./obj/*',function(e){
   console.log(e)
  })
})

```
将e 打印出来是 一个对象
{ type: 'changed',
 path: 'D:\\Testing\\zhufeng\\wbs\\Gulptest\\objdir\\html1.html' }

type 是变化类型
path 是变动文件的绝对路径



## gulp 插件
* 安装 引入 使用

> less 编译为css

```
var less = require('gulp-less')

.pipe(less())
```


### gulp-load-plugins

gulp-load-plugins帮我们自动加载插件
它会寻找到package.json中以gulp-开头的插件

```
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

.pipe($.less())

```
## gulp-concat  将文件合并

## gulp-uglify  将JS文件压缩



```
gulp.task('concat',function(){
  gulp.src(['./objdir/*.js','!./objdir/2.js'])
      .pipe($.concat('all.js'))  // 注意要指定合并之后文件名称
      .pipe($.uglify())
      .pipe(gulp.dest('./build'))
})
```

## gulp-rename 将文件重命名

合并-> 保存 -> 压缩 -> 重命名 ->保存

如果不重命名，当压缩之后，压缩文件或覆盖原来的合并文件

```
.pipe(gulp.src('obj.js'))
.pipe($.concat('all.js'))
.pipe(gulp.dest('./dest'))
.pipe($.uglify())
.pipe($.rename('all.min.js'))
.pipe(gulp.dest('./dest'))

```

## gulp-minify-css 压缩css

```
.pipe($.less())
.pipe(gulp.dest('./build'))
.pipe($.minifyCss())   // 注意这部分转化为驼峰命名法使用
.pipe($.rename('all.min.css'))
.pipe(gulp.dest('./build'))

```

## gulp-minify-html  压缩HTML

```
pipe( $.minifyHtml() )

```

## gulp-imagemin 图片压缩

```
$.pipe($.imagemin())
```
## gulp-connect  启动服务器

* root  服务器根目录
* port 端口号
* livereload 是否实时刷新页面


```
gulp.task('server',function(
   $.connect.server({
       root:'./build',
       port:8080,
       livereload:true
   })
))

```

## 尝试一个自动刷新页面的例子

```
gulp.task('html',function(){
  gulp.src('./obj/*.html')
  .pipe(gulp.dest('./build'))
  .pipe($.connect.reload()) // 通过浏览器自动刷新
})

gulp.task('watch',function(){
  gulp.watch('./obj/*.html',[ 'html'])
})

gulp.task('server',function(){
  $.connect.server{
    root:'./build'
    port:8008,
    livereload:true  // 启动实时刷新
  }
})

gulp.task('default',['server','watch']) // 设置默认任务




```

### gulp.task('default',['server','watch'])
设置默认任务  在命令行输入 gulp 会执行名为default里的任务列表



## jshint  检测错误










