function longestSubstring(str) {
    let max = 0;
    let start = 0;
    const charMap = {}; // this will store the index of each character in the string and the character itself

    if (str.length === 0){
        return null;
    }
  
    for (let end = 0; end < str.length; end++) {
      const char = str[end]; // get the current char
  
      if (charMap[char] !== undefined) { // checks if the char is already in the map
        start = Math.max(start, charMap[char] + 1); // update the start index if the char is already in the map
      }
  
      charMap[char] = end; 
      max = Math.max(max, end - start + 1);  // update the max length
    }
  
    return max; // return the max length 
  }
  
  module.exports = longestSubstring;
  