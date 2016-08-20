# mongodb

先起服务器

再打开服务端





>将mongo配置成环境变量

属性》高级属性》 path 》将文件所在地址 C:\Program Files\MongoDB 2.6 Standard\bin  放在前面
》 记得加分号; 和后面的地址隔开

## mongo vue

前面那个数据库名字可以随便写

server 服务器   localhost 表示是本机




## 数据库操作

* use databaseName  进入数据库
* show dbs  显示所有数据库列表
* db  查看当前数据库
* db.dropDatabase()  删除数据库


> 展示一个新建数据库的过程


```
use person // 进入 这时没有该数据库也可以进入

 db.person.insert({name:"zhangSan",age:30})  //插入数据
 db.person.find()  //查看数据

 show dbs  // 此时查看数据库就可以发现有新建的那个了

```

> 创建数据

```
//在创建该数据库后

db.createCollection('course')

db.course.insert({})


db.course.find()


```

#  如果自己要传递主键值 _id



```
// 使用insert 插入数据  不得重复插入_id 值相同的两条
db.course.insert({_id:2,name:"xiaoHong",age:10})
// 使用save插入数据   重复插入_id 值相同的两条   后者会覆盖前者
db.course.save({_id:3,name:"xiaoHong",age:10})

```


# 更新文档

```
db.course.update({id:2},{ name:'try' }) // 直接替换
db.course.update({id:2},{ $set:{name:'try' } })  // $set 直接更新
db.course.update({id:2},{ $inc:{name:'try' } }) // $inc 原基础累加


db.course.update({id=2},{name:'try' },{upsert:true}) //有就更新 没有就插入

db.course.update({name:'try',{name:'tryagain' }) // 只匹配第一条
db.course.update({name:'try',{name:'tryagain' },{multi:true}) //


```
# 查询

> 注意 find()   最大可以寻找20条数据

it

i 表示 显示 0 表示不显示

```
db.collection_name.find({/*这里面不写的话，表示查找所*/},{name:1}) //显示name
db.collection_name.find({},{name:1,class:1,habit:1}) //显示name class  habit
db.collection_name.find({},{age:0}) //不显示age
db.collection_name.find({},{name:0,class:0,habit:0}) //不显示name class  habit
db.collection_name.find({},{name:1,age:0}) //不可以混-合的这样写
db.collection_name.find({id:4},{name:1,__id:0}) //但是主键_id 可以混合的这样写




```

> findOne  查询一条数据

>

```
db.worker.find({age:{$gt:30}}) 查询age 大于 30的数据
db.worker.find({age:{$lt:30}}) 查询age <  30的数据
db.worker.find({age:{$gte:30}}) 查询age 大于等于 30的数据
db.worker.find({age:{$ne:30}}) 查询age 不等于 30的数据

```
> db.worker.find().count() 查询结果条数





## 删除

```
db.course.remove({name:'try'})

```










## 架构模式

* 分布式架构

* 主从架构





















