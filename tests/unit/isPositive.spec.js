import { test, expect } from "@playwright/test";

function isPositive (inputNumber) { 
  if (typeof inputNumber === "number") {  
      if (inputNumber === 0) {
          return "Your number is zero.";
      } else if (inputNumber > 0) {
          return "Your number is positive.";
      } else {
          return "Your number is negative.";
      }}
  else {
          throw Error("Use ONLY number to check if it positive/negative number.");
        }
};

test("is positive", async () => {
  const result = isPositive(1);
  expect(result).toBe("Your number is positive.");
});

test("is positive - max value", async () => {
  const result = isPositive(1.7976931348623157e308);
  expect(result).toBe("Your number is positive.");
});

test("is negative", async () => {
  const result = isPositive(-1);
  expect(result).toBe("Your number is negative.");
});

test("is negative - min value", async () => {
  const result = isPositive(-1.7976931348623157e308);
  expect(result).toBe("Your number is negative.");
});

test("is zero", async () => {
  const result = isPositive(0);
  expect(result).toBe("Your number is zero.");
});

test("is not a number", async () => {
  try {
    isPositive("string");
  } catch (e) {
    expect(e.message).toBe("Use ONLY number to check if it positive/negative number.");
  }
});
