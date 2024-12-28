import { test, expect } from '@playwright/test';

function canVote (inputAge){
    if (inputAge >= 18) {
        return "You can vote";
    } else {
        return"You can't vote";
    }
};

test('age is exactly 18', async () => {
    const result = canVote(18);
    expect(result).toBe("You can vote");
});

test('age is greater than 18', async () => {
    const result = canVote(25);
    expect(result).toBe("You can vote");
});

test('age is less than 18', async () => {
    const result = canVote(17);
    expect(result).toBe("You can't vote");
});

test('age is zero', async () => {
    const result = canVote(0);
    expect(result).toBe("You can't vote");
});

test('age is negative', async () => {
    const result = canVote(-5);
    expect(result).toBe("You can't vote");
});