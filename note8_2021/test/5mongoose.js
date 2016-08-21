var mongoose = require('mongoose');
mongoose.Promise = Promise;//  不写这行会有警告  但是不影响运行 Mongoose: mpromise (mongoose's default promise library) is deprecated, plug in your
mongoose.connect('mongodb://localhost:mxx')
var personSchema = new mongoose.Schema({
    username: String, // 注意在写属性类型首字母是大写
    age: Number,
    home:String
})

// 扩展实例方法
personSchema.methods.findSameAge = function (cb) {
    this.model('Person3').find({age:this.age},cb);
}

var personModal = mongoose.model('Person3',personSchema);

var lh = new personModal({
    uasername:'鹿晗',
    age:'5'
})

lh.findSameAge(function(err,docs){
    console.log(docs);
});

