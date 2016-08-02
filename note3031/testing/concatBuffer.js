function concatList(bufList,length) {
    var bufLength=0,newBuf, start=0 ;
    for(var i=0;i<bufList.length;i++){
        bufLength += bufList[i].length;
    }
    if(length<bufLength){
        bufLength = length;
    }
    newBuf = new Buffer(bufLength);
    for(var i=0;i<bufList.length;i++){
        bufList[i].copy(newBuf,start);
        start +=  bufList[i].length;
    }
    return newBuf.toString();
}

var buf1 = new Buffer('the rain after sun');
var buf2 = new Buffer('JAY');
var buf3 = new Buffer('么么');
var buf4 = new Buffer('Bigbang');
console.log(  concatList([buf1,buf2,buf3,buf4],2090)   )