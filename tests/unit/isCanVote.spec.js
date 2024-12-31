import { test, expect } from '@playwright/test';
import {isCanVote} from '../../app/HW/HW7/isCanVote';

test('age is exactly 18', async () => {
    const result = isCanVote(18);
    expect(result).toBe("You can vote");
});

test('age is greater than 18', async () => {
    const result = isCanVote(25);
    expect(result).toBe("You can vote");
});

test('age is less than 18', async () => {
    const result = isCanVote(17);
    expect(result).toBe("You can't vote");
});

test('age is zero', async () => {
    const result = isCanVote(0);
    expect(result).toBe("You can't vote");
});

test('age is negative', async () => {
    const result = isCanVote(-5);
    expect(result).toBe("You can't vote");
});