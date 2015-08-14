var mymodule = require('./make-it-modular/module.js');

var dirPath = process.argv[2];
var extname = process.argv[3];

mymodule(dirPath, extname, function(err, list){
  for (var i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
})
