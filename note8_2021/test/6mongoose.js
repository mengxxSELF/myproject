var mongoose = require('mongoose');
mongoose.Promise = Promise;//  不写这行会有警告  但是不影响运行 Mongoose: mpromise (mongoose's default promise library) is deprecated, plug in your
mongoose.connect('mongodb://localhost:mxx')
var personSchema = new mongoose.Schema({
    username: String, // 注意在写属性类型首字母是大写
    age: Number,
    home:String
})


// 为模型添加新的自定义方法
personSchema.statics.findByName = function(name,cb){
    this.find({name:new RegExp(name)},cb)
}

var personModal = mongoose.model('Person3',personSchema);

personModal.findByName('鹿晗5',function(err,persons){
    console.log(persons);  //获得所有名称叫鹿晗的人
});


