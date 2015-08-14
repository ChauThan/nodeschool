var url = process.argv[2];

var http = require('http');

http.get(url, function(res){
  res.setEncoding('utf8');
  var contents = '';
  res.on('data', function(data){
    contents += data;
  });
  res.on('end', function(){
    console.log(contents.length);
    console.log(contents);
  });
});
