module.exports = function average(...agrs){
    var length = agrs.length;
    if (length == 0) return 0;
    var sum = agrs.reduce((previous, current) => previous + current);
    
    return sum/length;
}