var port = process.argv[2];

var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res){
  var obj = url.parse(req.url, true);
  var endpoint =  obj.pathname;
  var date = new Date(obj.query.iso);
  res.writeHead(200, { 'Content-Type': 'application/json' });

  if(endpoint === '/api/parsetime'){
    res.write(JSON.stringify({'hour': date.getHours(), 'minute': date.getMinutes(), 'second': date.getSeconds()}));
  }

  if(endpoint === '/api/unixtime'){
    res.write(JSON.stringify({'unixtime': date.getTime()}))
  }

  res.end();
})

server.listen(port);
