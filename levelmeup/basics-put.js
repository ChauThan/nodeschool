var level = require('level');
var db = level(process.argv[2]);

var object = JSON.parse(process.argv[3]);

for (var key in object){
    db.put(key, object[key]);
}