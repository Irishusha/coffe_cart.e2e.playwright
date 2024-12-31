import {test, expect} from '@playwright/test'
import {isNumberEvenOrOdd} from '../../app/HW/HW7/isNumberEvenOrOdd'

test("is even number", async () => {
    const result = isNumberEvenOrOdd(4);
    expect(result).toBe("The number 4 is even.");
});

test ("is odd number", async () => {
    const result = isNumberEvenOrOdd(3);
    expect(result).toBe("The number 3 is odd.");
});

test ("is odd negative number", async () => {
    const result = isNumberEvenOrOdd(-3);
    expect(result).toBe("The number -3 is odd.");
});

test ("is even negative number", async () => {
    const result = isNumberEvenOrOdd(-6);
    expect(result).toBe("The number -6 is even.");
});

test ("is Zero positive number", async () => {
    const result = isNumberEvenOrOdd(0);
    expect(result).toBe("The number 0 is even.");
});

test ("is even large number", async () => {
    const result = isNumberEvenOrOdd(100000000000);
    expect(result).toBe("The number 100000000000 is even.");
});

test ("is odd large number", async () => {
    const result = isNumberEvenOrOdd(1000000000001);
    expect(result).toBe("The number 1000000000001 is odd.");
});

test("is not a number", async () => {
    try {
      isNumberEvenOrOdd("string");
    } catch (e) {
      expect(e.message).toBe("Use ONLY number type!");
    }
  });