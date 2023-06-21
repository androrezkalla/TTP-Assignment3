function reverseString(str) {
    let reversed = "";
    
    if (str.length === 0) {
        return null;
    }
    
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  
  module.exports = reverseString;