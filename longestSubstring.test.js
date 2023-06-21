const longestSubstring = require("./longestSubstring");


describe("test cases from the assignment", () => {
  test("longestSubString() should return the length of the longest substring without repeating any of the characters", () => {
    expect(longestSubstring("abcabcbb")).toBe(3);
    expect(longestSubstring("bbbbb")).toBe(1);
    expect(longestSubstring("pwwkew")).toBe(3);
  });

  //testing null return case
  test("addtional test cases", () => {
      expect(longestSubstring("")).toBeNull;

    });
  
});
