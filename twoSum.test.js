const twoSum = require("./twoSum");

describe("twoSum", () => {
    
    test("Test cases from the assignment", () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
        expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
        expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
    });


    // Test case for no answer 
    test("twoSum([1, 2, 3, 4, 5], 20) => null", () => {
        expect(twoSum([1, 2, 3, 4, 5], 20)).toBeNull();
    });
});
