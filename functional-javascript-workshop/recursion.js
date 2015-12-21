function reduce(arr, fn, initial){
    if(!arr.length)
        return initial;
    
    var next = arr.shift();
    console.log(next);
    var reduced = fn(initial, next, 0, arr);
    
    return reduce(arr, fn, reduced);
}

module.exports = reduce;