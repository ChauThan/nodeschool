var numbers = process.argv.slice(2);

function min(...numbers) {
    return Math.min(...numbers);
}

console.log(`The minimum of [${numbers}] is ${min(...numbers)}`);