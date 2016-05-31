var fs = require('fs');

function run(generator) {
    // 1. define a iterator variable
    var it = generator(go);

    // 2. define a method to call next of iterator 
    function go(err, result) {
        if (err) {
            it.throw(err);
        }
        it.next(result);
    }

    // 3. excute first of iterator
    go();
}

run(function*(done) {
    try {
        // catch exception
        var dirFiles = yield fs.readdir('NoNoNoNo', done); // No such dir
        var firstFile = dirFiles[0]; // TypeError: Cannot read property '0' of undefined
    }
    catch (e) {
        firstFile = null;
    }

    console.log(firstFile);
});