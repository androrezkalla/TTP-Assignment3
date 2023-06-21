function reverseString(str) {
    if (str.length === 0){
        return null; // return null if str is empty
    } 
    return str.split("").reverse().join("");
  }
  
  function isPalindrome(str) {
    const reversedStr = reverseString(str);
    if (str.length === 0){
        return null; // return null if str is empty
    }
    return str === reversedStr;
  }
  
  module.exports = {
    reverseString,
    isPalindrome,
  };
  