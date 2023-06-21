const stringFunctions = require("./stringFunctions");

describe("reverseString(str) should returned the reversed str", () => {
  
    // testing null case
  test("reverseString('') should return null", () => {
    expect(stringFunctions.reverseString("")).toBeNull();
  });

  test("reverseString(testing) should return gnitset", () => {
    expect(stringFunctions.reverseString("testing")).toBe("gnitset");
  });
   
   // testing special characters
  test("testing special characters", () => {
    expect(stringFunctions.reverseString("Special!")).toBe("!laicepS");
  });

});


describe("isPalindrome(str) should return if a str is a palindrome", () => {

    //testing null/ empty string case
  test("isPalindrome('') emptry string should return null", () => {
    expect(stringFunctions.isPalindrome("")).toBeNull();
  });

  test("isPalindrome(madam) should be true ", () => {
    expect(stringFunctions.isPalindrome("madam")).toBe(true);
  });

  test("isPalindrome(andro) should be false", () => {
    expect(stringFunctions.isPalindrome("andro")).toBe(false);
  });

  // testing special characters
  test("isPalindrome('!mom!') should be true", () => {
    expect(stringFunctions.isPalindrome("!mom!")).toBe(true);
  })


});
