const fs = require('fs');
const rs = fs.createReadStream('stream.txt',{encording:"utf8"});
rs.on('data',function(data){
  console.log('data >>> '+data.replace('\n','\\n'));
});
rs.on('end',function(){
  console.log(">>> END");
});
