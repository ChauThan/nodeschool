var fs = require('fs');

var file = process.argv[2];
var contents = fs.readFileSync(file).toString();
var lines = contents.split('\n').length - 1;

console.log(lines);
