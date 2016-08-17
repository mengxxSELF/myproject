var fs = require('fs');
createDir('../a/b/c');
function createDir(obj){
    var objList = obj.split('/'); //[ '..', 'a', 'b', 'c' ]
    var curPath,newPath ;
    for(var i=0;i<objList.length-1;i++){
        newPath = curPath+'/'+objList[i+1];// ./a/b
        mkdiring(curPath,mkdiring( newPath ) );
        curPath = newPath; // ./a
    }

}

function mkdiring(path,fn){
    fs.mkdir(path,function(err,data){
        if(!err){
            console.log(path+'is done!');
            fn;
        }
    })
}

