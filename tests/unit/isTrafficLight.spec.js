import { test, expect } from '@playwright/test';
import { isTrafficLight } from '../../app/HW/HW7/isTrafficLight';


    test('should return "You can go!" for green', () => {
        expect(isTrafficLight('green')).toBe('You can go!');
    });

    test('should return "You can prepare!" for yellow', () => {
        expect(isTrafficLight('yellow')).toBe('You can prepare!');
    });

    test('should return "You CAN\'T go!" for red', () => {
        expect(isTrafficLight('red')).toBe("You CAN'T go!");
    });

    test('should return "This is not a color of traffic light!" for invalid color', () => {
        expect(isTrafficLight('blue')).toBe('This is not a color of traffic light!');
    });

    test('should handle case insensitivity', () => {
        expect(isTrafficLight('GReeN')).toBe('You can go!');
        expect(isTrafficLight('YELLOW')).toBe('You can prepare!');
        expect(isTrafficLight('Red')).toBe("You CAN'T go!");
    });
