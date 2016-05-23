function* factorial(n) {
    var result = 1;
    for (var i = 0; i < n; i++) {
        result *= i + 1;
        yield result;
    }
}

for (var n of factorial(5)) {
    console.log(n)
}
// 1, 2, 6, 24, 120