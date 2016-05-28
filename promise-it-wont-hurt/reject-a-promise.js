var q = require('q');
var defer = q.defer();

// your solution here
defer.promise.then(null, function(err) {
    console.log(err.message);
});


setTimeout(defer.reject, 300, new Error('REJECTED!'));