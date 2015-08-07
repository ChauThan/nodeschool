var fs = require('fs');
var path = require('path');
var dirPath = process.argv[2];
var extname = '.' + process.argv[3];
fs.readdir(dirPath, function(err, list){
  var filtered = list.filter(function(item){
    return path.extname(item) === extname;
  });
  for (var i = 0; i < filtered.length; i++) {
    console.log(filtered[i]);
  }
})
