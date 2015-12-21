function checkUsersValid(goodUsers){
  return function allUsesValid(submittedUsers){
    return submittedUsers.every(function(submittedUser, index, array){
      return goodUsers.some(function(goodUser, index, array){
        return goodUser == submittedUser;
      });
    });
  };
}

module.exports = checkUsersValid;
