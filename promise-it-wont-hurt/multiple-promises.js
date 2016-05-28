var q = require("q");
var def1 = q.defer();
var def2 = q.defer();

function all(promise1, promise2) {
    var def = q.defer();
    var counter = 0;
    var array = [];

    promise1
        .then(function(result) {
            array[0] = result;
            counter++;
            if (counter == 2) def.resolve(array);
        })
        .then(null, def.reject)
        .done();
        
    promise2
        .then(function(result){
            array[1] = result;
            counter++;
            if (counter == 2) def.resolve(array);
        })
        .then(null, def.reject)
        .done();
        
    return def.promise;
}

all(def1.promise, def2.promise).then(console.log).done();

setTimeout(function(){
    def1.resolve("PROMISES");
    def2.resolve("FTW");
}, 200);