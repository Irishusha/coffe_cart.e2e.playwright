import { test, expect } from '@playwright/test';
import {isFirstNumberBiggest} from '../../app/HW/HW7/isFirstNumberBiggest';

test('both numbers are equal', async () => {
    const result = isFirstNumberBiggest(5, 5);
    expect(result).toBe('The 5 and 5 are equal.');
});

test('first number is greater than second number', async () => {
    const result = isFirstNumberBiggest(10, 5);
    expect(result).toBe('The first number 10 is bigger than the second number 5.');
});

test('second number is greater than first number', async () => {
    const result = isFirstNumberBiggest(5, 10);
    expect(result).toBe('The second number 10 is bigger than the first number 5.');
});

test('first number is negative and second number is positive', async () => {
    const result = isFirstNumberBiggest(-5, 5);
    expect(result).toBe('The second number 5 is bigger than the first number -5.');
});

test('first number is positive and second number is negative', async () => {
    const result = isFirstNumberBiggest(5, -5);
    expect(result).toBe('The first number 5 is bigger than the second number -5.');
});
