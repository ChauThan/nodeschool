var database_dir = process.argv[2];
var key = process.argv[3];

var level = require('level');
var db = level(database_dir);

db.get(key, function(err, value){
  console.log(value);
});
