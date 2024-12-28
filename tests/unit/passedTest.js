import { test, expect } from '@playwright/test';

function passedTest (inputScore) {
    if (inputScore >= 50) {
        return`You have passed the test with score ${inputScore}`;
    }
    if (inputScore < 50) {
        return`You haven't passed the test.Your score: ${inputScore}`;
    }
};

test('score is exactly 50', async () => {
    const result = passedTest(50);
    expect(result).toBe('You have passed the test with score 50');
});

test('score is greater than 50', async () => {
    const result = passedTest(75);
    expect(result).toBe('You have passed the test with score 75');
});

test('score is less than 50', async () => {
    const result = passedTest(30);
    expect(result).toBe("You haven't passed the test.Your score: 30");
});

test('score is zero', async () => {
    const result = passedTest(0);
    expect(result).toBe("You haven't passed the test.Your score: 0");
});

test('score is negative', async () => {
    const result = passedTest(-10);
    expect(result).toBe("You haven't passed the test.Your score: -10");
});

