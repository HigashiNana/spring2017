const fs = require('fs');
const path = require('path');
fs.readFile(path.join(__dirname,"hello.txt"),{encoding:'utf8'},
function(err,date){
  if(err) return console.error('Error');
  //console.log
  console.log("ファイルの内容は以下の通り");
  console.log(date);
});
