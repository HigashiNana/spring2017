const fs = require('fs');//fileSystemの略
const path = require('path');
//path.join(__dirname+パスを結合してくれる。/もいらない)
fs.writeFile(path.join(__dirname+'hello.txt'),'Node始めました\n',//ファイル名の先頭には/を付ける(dirnameがルート)
  function(err){
    if(err) return console.log("Error!");
  }
);
