const reverseString = require("./reverseString");

describe("reverseString(str) should return the reversed str", () => {

    test("test cases from assignment", () => {
        expect(reverseString("hello")).toBe("olleh");
        expect(reverseString("OpenAI")).toBe("IAnepO");
        expect(reverseString("racecar")).toBe("racecar");
    });

    // testing empty str for null return value
    test("empty str", () => {
        expect(reverseString("")).toBeNull();
    });

    //testing special characters
    test("reverseString(special!) => !laiceps", () => {
        expect(reverseString("special!")).toBe("!laiceps");
    });
});
