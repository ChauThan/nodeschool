module.exports = function* multiplier() {
    // `yield` all integers multiplied by the value passed in via `.next()`
    var number = 0;
    var multiply = 1;
    while (true) {
        number++;
        multiplier = yield number * multiplier;

        multiplier = !multiplier ? 1 : multiplier;
    }
}