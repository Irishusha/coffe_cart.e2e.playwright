import { test, expect } from '@playwright/test';
import { isPassedTest } from '../../app/HW/HW7/isPassedTest';

test('score is exactly 50', async () => {
    const result = isPassedTest(50);
    expect(result).toBe('You have passed the test with score 50');
});

test('score is greater than 50', async () => {
    const result = isPassedTest(75);
    expect(result).toBe('You have passed the test with score 75');
});

test('score is less than 50', async () => {
    const result = isPassedTest(30);
    expect(result).toBe("You haven't passed the test.Your score: 30");
});

test('score is zero', async () => {
    const result = isPassedTest(0);
    expect(result).toBe("You haven't passed the test.Your score: 0");
});

test('score is negative', async () => {
    const result = isPassedTest(-10);
    expect(result).toBe("You haven't passed the test.Your score: -10");
});

