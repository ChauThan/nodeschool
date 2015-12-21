function countWords(inputWords){
  return inputWords.reduce(function(obj, curr){
        if(!obj[curr]){
            obj[curr] = 1;
        }
        else{
            obj[curr] = obj[curr] + 1;
        }
        
        return obj;
  }, {});
}

module.exports = countWords;
