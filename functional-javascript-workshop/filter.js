function getShortMessage(messages){
  var filtered = messages.filter(function(obj){
    return obj.message.length < 50;
    });

    return filtered.map(function(obj){
      return obj.message;
      })
    }

module.exports = getShortMessage;
