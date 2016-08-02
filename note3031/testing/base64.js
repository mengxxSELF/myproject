var buf =new Buffer('逐');

console.log(buf); //<Buffer e9 80 90>

var list =['e9' ,80 ,90];
var newList =[];
for(var i=0;i<list.length;i++){
    newList.push( parseInt(list[i],16).toString(2) );
}
console.log(newList); //[ '11101001', '10000000', '10010000' ]
var newString = '';
newList.forEach(function (item) {
    newString+=item;
})
console.log(newString); // 111010011000000010010000

var newArray =[], star= 0,codeNum=6;
for(var i=0;i<newString.length/6 ;i++){
    newArray.push(newString.substr(star,codeNum));
    star += 6;
}
console.log(newArray); //[ '111010', '011000', '000010', '010000' ]

var endArray =[];
newArray.forEach(function (item) {
    endArray.push('00'+item);
});
console.log(endArray); //[ '00111010', '00011000', '00000010', '00010000' ]

var lastArray =[];
endArray.forEach(function (item) {
    lastArray.push( parseInt(item,2));
})
console.log(lastArray ); // [ 58, 24, 2, 16 ]
//[ 58, 24, 2, 16 ]  四个字符代表的10进制
var str  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
str+= "abcdefghijklmnopqrstuvwxyz";
str+="0123456789";
str+="+/";

var BaseEnd = '';
lastArray.forEach(function (item) {
    BaseEnd += str[item] ;
})

console.log(BaseEnd);  //6YCQ





