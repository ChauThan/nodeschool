var fs = require('fs');
var path = require('path');

module.exports = function(dirPath, ext, callback){
    fs.readdir(dirPath, function(err, list){
        if(err)
          return callback(err);

          var filtered = list.filter(function(item){
            return path.extname(item) === '.' + ext;
          });

          return callback(null, filtered);
    });
}
