import { test, expect } from '@playwright/test';
import {findMaxOfTwoNumbers} from '../../app/HW/HW9/findMaxOfTwoNumbers';

    test('should return "Numbers are equal" when both numbers are equal',  async () => {
        const result = findMaxOfTwoNumbers(10, 10);
        expect(result).toBe('Numbers are equal');
    });

    test('should return "The first number is MAX" when the first number is greater',  async () => {
        const result = findMaxOfTwoNumbers(20, 10);
        expect(result).toBe('The first number is MAX');
    });

    test('should return "The second number is MAX" when the second number is greater',  async () => {
        const result = findMaxOfTwoNumbers(5, 15);
        expect(result).toBe('The second number is MAX');
    });

    test('should return "The first number is MAX" for negative numbers where the first is greater',  async () => {
        const result = findMaxOfTwoNumbers(-5, -10);
        expect(result).toBe('The first number is MAX');
    });

    test('should return "The second number is MAX" for negative numbers where the second is greater',  async () => {
        const result = findMaxOfTwoNumbers(-20, -10);
        expect(result).toBe('The second number is MAX');
    });

    test('should handle mixed positive and negative numbers correctly',  async  () => {
        const result = findMaxOfTwoNumbers(45, -10);
        expect(result).toBe('The first number is MAX');
    });

    test('should handle mixed positive and negative numbers where the second is greater',  async () => {
        const result = findMaxOfTwoNumbers(-10, 45);
        expect(result).toBe('The second number is MAX');
    });
