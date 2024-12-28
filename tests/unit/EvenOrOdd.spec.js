import {test, expect} from '@playwright/test'

function printEvenOrOdd (inputNumber){
    if (typeof inputNumber === "number") { 
        if (inputNumber % 2 === 0) {
            return `The number ${inputNumber} is even.`;
        } else {
            return `The number ${inputNumber} is odd.`} }
    else {
            throw Error("Use ONLY number type!");
          }
};

test("is even number", async () => {
    const result = printEvenOrOdd(4);
    expect(result).toBe("The number 4 is even.");
});

test ("is odd number", async () => {
    const result = printEvenOrOdd(3);
    expect(result).toBe("The number 3 is odd.");
});

test ("is odd negative number", async () => {
    const result = printEvenOrOdd(-3);
    expect(result).toBe("The number -3 is odd.");
});

test ("is even negative number", async () => {
    const result = printEvenOrOdd(-6);
    expect(result).toBe("The number -6 is even.");
});

test ("is Zero positive number", async () => {
    const result = printEvenOrOdd(0);
    expect(result).toBe("The number 0 is even.");
});

test ("is even large number", async () => {
    const result = printEvenOrOdd(100000000000);
    expect(result).toBe("The number 100000000000 is even.");
});

test ("is odd large number", async () => {
    const result = printEvenOrOdd(1000000000001);
    expect(result).toBe("The number 1000000000001 is even.");
});

test("is not a number", async () => {
    try {
      printEvenOrOdd("string");
    } catch (e) {
      expect(e.message).toBe("Use ONLY number type!");
    }
  });