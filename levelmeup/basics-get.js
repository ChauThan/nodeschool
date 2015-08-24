var level = require('level');
var db = level(process.argv[2]);

for(var i = 0; i <= 100; i++){
  getKey('key' + i);
}

function getKey(key){
  db.get(key, function(err, value){
    if(!err || !err.notFound){
      console.log(key + '=' + value);
    }
  });
}
