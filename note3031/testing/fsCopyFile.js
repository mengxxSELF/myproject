var fs = require('fs');

fs.readFile('./1.txt', function (err,data) {
    if(!err){
        fs.writeFile('./2.txt', data ,function () {
            console.log('copy done!')
        })
    }
})