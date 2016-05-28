var Q = require("q");

Q.fcall(function(){
    JSON.parse(process.argv[2]);
}).catch(function(error){
    console.log(error);
});