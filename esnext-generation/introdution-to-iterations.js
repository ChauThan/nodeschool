module.exports = function makeCounter(someObj) {
    var index = 0;
    someObj.next = function() {
        // complete me
        return (index < 10) ? {
            value: ++index,
            done: false
        } : {
            value: null,
            done: true
        };
    }

}