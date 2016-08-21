var mongoose = require('mongoose');
mongoose.Promise = Promise;//  不写这行会有警告  但是不影响运行 Mongoose: mpromise (mongoose's default promise library) is deprecated, plug in your
mongoose.connect('mongodb://localhost:mxx')

// 定义一个模型骨架，定义集合中字段的名称和类型

// 如果 字段名称不符合 忽略 字段 类型不符合 会报错
var personSchema = new mongoose.Schema({
    username: String, // 注意在写属性类型首字母是大写
    age: Number,
})

// 定义modal  可以操作集合 ,类似命令行中的db.person

var personModal = mongoose.model('Person2',personSchema);


                   /* 查找范围  回调函数*/
personModal.find({}, function (err,docs) {
    if(err){
        console.log(err)
    }else{
        console.log(docs)
    }
});
// 创建一个文档
personModal.create({username:'鹿晗'}, function (err,doc) {
    if(err){
        console.log(err)
    }else{
        console.log(doc)
    }
})


// 更新  Model.update(查询条件,更新对象,callback);

personModal.update({username:'鹿晗'},{age:'20'},function (err,doc) {
    if(err){
        console.log(err)
    }else{
        console.log(doc)
    }
})
/*

personModal.remove({username:'鹿晗'}, function (err,doc) {
    if(err){
        console.log(err)
    }else{
        console.log(doc)
    }
})*/
