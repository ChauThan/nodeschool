function askFoo() {
    return new Promise(function(resolve, reject) {
        resolve('foo');
    });
}

function run(generator) {
    var it = generator();

    function go(promise) {
        if (promise.done) return promise.value;

        return promise.value.then(function(value) {
            return go(it.next(value));
        });
    }

    go(it.next());
}

run(function*() {
    var foo = yield askFoo();
    console.log(foo);
});