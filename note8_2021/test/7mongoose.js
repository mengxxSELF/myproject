var mongoose = require('mongoose');
mongoose.Promise = Promise;//  不写这行会有警告  但是不影响运行 Mongoose: mpromise (mongoose's default promise library) is deprecated, plug in your
mongoose.connect('mongodb://localhost:mxx')

var PersonSchema = new mongoose.Schema({
    name:{
        type:'String',
        match:/^mxx/,//必须符合正则
        required:true //姓名非空
    },
    age:{
        type:'Number',
        min:5,       //年龄最小18
        max:110     //年龄最大110
    },
    gender:{
        type:'String',
        enum:['男','女']  //只能是男或女
    },
    home:{
        type:String,
        validate: [validator,'必须是北京'] // 自定义验证函数
    }
});
//自定义验证函数
function validator (val) {
    return val == '北京';
}

var personModal = mongoose.model('Person4',PersonSchema);

personModal.create({
    name:'mxxlh',
    age:20,
    gender:'女',
    home:'北京'

}, function (err,doc) {
    if(err){console.log(err)} // 如果不符合预定格式 报错
    console.log(doc)
})


