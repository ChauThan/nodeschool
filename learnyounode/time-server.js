var port = process.argv[2];

var net = require('net');
var server = net.createServer(function(socket){
  var m = new Date();
  var dateString = '';
  dateString =
    m.getFullYear() +"-"+
    ("0" + (m.getMonth()+1)).slice(-2) +"-"+
    ("0" + m.getDate()).slice(-2) + " " +
    ("0" + m.getHours()).slice(-2) + ":" +
    ("0" + m.getMinutes()).slice(-2) + "\n";
  socket.write(dateString);
  socket.end();
});

server.listen(port);
