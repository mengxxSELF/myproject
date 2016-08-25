# gulp

## 安装

```
npm i gulp -g
npm i gulp -D

```

> 创建任务

有两个参数  任务名 函数


```
gulp.task('taskname',function(){
    gulp.src('./src/*/*.js')
        .pipe(gulp.dest('./bulid'))
})

```

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

 在命令行直接执行 task3   ，然后会按照其依赖的任务名依次执行对应的任务


















