module.exports = function filterForNumbers(iterable) {
    var array = [];

    for (var value of iterable) {
        if (typeof value == 'number')
            array.push(value);
    }

    return array;
}