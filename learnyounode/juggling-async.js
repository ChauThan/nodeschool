var http = require('http');

var urls = process.argv.slice(2, process.argv.length);
var results = [];

results.length = urls.length;

var counter = results.length;
for (var index = 0; index < urls.length; index++) {
  results[index] = '';
  getData(urls[index], index);
}

function getData(url, index){
  http.get(url, function(res){
    // set encoding
    res.setEncoding('utf8');

    // append data
    res.on('data', function(data){
      results[index] += data;
    });

    // end
    res.on('end', function(){
      if(counter > 0){
        counter--;
      }

      if(counter == 0){
        for (var iResult = 0; iResult < results.length; iResult++) {
          console.log(results[iResult]);
        }
      }
    });
  })
}
