var mongoose = require('mongoose');
mongoose.Promise = Promise;//  不写这行会有警告  但是不影响运行 Mongoose: mpromise (mongoose's default promise library) is deprecated, plug in your
mongoose.connect('mongodb://localhost:mxx')

// 定义一个模型骨架，定义集合中字段的名称和类型

// 如果 字段名称不符合 忽略 字段 类型不符合 会报错
var personSchema = new mongoose.Schema({
    username: String, // 注意在写属性类型首字母是大写
    email: String,
    gender: String,
    birthday: Date,
    married: String

})

// 定义modal  可以操作集合 ,类似命令行中的db.person.xxxx

var personModal = mongoose.model('Person',personSchema);

// 定义实体 相当于集合中的文档对象
var luhanEntity  = new personModal({
    username:'lh',
    email:'78@qq.com',
    gender:'boy',
    birthday:'2034',
    married:'未婚'
})

// 实体只有一个save方法  创建并 向数据表中插入该文档信息

luhanEntity.save(function (err,result) {
    if(err){
        console.log(err)
    }else{
        console.log(result)
    }
})