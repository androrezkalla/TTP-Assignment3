const mathFunctions = require("./mathFunctions");

describe("Add(a,b) should return the sum of a and b", () => {
    test("add(1,2) should return 3", () => { 
        expect(mathFunctions.add(1,2)).toBe(3);
    })
    test("add(5,-2) should return 3", () => { 
        expect(mathFunctions.add(5,-2)).toBe(3);
    })
    test("add(-3,-3) shuld return -6", () => { 
        expect(mathFunctions.add(-3,-3)).toBe(-6);
    })
    test("add(3,0) should be 3", () => { 
        expect(mathFunctions.add(3,0)).toBe(3);
    })
})

describe("Subtract(a,b) should return the difference of a and b", () => {
    test("subtract(2,1) should return 1", () => {
        expect(mathFunctions.subtract(2,1)).toBe(1);
    })
    test("subtract(5,-2) should return 3", () => { 
        expect(mathFunctions.subtract(5,-2)).toBe(7);
    })
    test("subtract(-3,-3) shuld return 0", () => { 
        expect(mathFunctions.subtract(-3,-3)).toBe(0);
    })
})

describe("Multiply(a,b) should return the product of a and b", () => {
    test("multiply(2,2) should return 4", () => {
        expect(mathFunctions.multiply(2,2)).toBe(4);
    })
    test("multiply(-3,2) should return -6", () => { 
        expect(mathFunctions.multiply(-3,2)).toBe(-6);
    })
    test("multiply(-3,-3) shuld return 9", () => { 
        expect(mathFunctions.multiply(-3,-3)).toBe(9);
    })
})

describe("Divide(a,b) should return the quotient of a and b", () => {
    test("divide(10,2) should return 5", () => {
        expect(mathFunctions.divide(10,2)).toBe(5);
    })
    test("divide(4,-2) should return -2", () => { 
        expect(mathFunctions.divide(4,-2)).toBe(-2);
    })

    //Should return null as defined by my function
    test("divide(2,0) should return null", () => { 
        expect(mathFunctions.divide(2,0)).toBeNull();
    })
})

