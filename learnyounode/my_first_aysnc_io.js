var fs = require('fs');

var file = process.argv[2];
fs.readFile(file, function(err, data){
    if(!err){
      var contents = data.toString();
      var lines = contents.split('\n').length - 1;
      console.log(lines);
    }
})
