var port = process.argv[2];
var pathFile = process.argv[3];

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  fs.createReadStream(pathFile).pipe(res);
});

server.listen(port);
