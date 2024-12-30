import {test, expect} from '@playwright/test'

function isGreetingByTime (time) {
    if (time < 0 || time > 23) {
        return "Invalid time! Please enter a time between 0 and 23.";
    } else 
    if (time < 12) {
        return `Now ${time}. Good morning!`;
    }  
    if (time >= 12 && time <= 18) {
        return `Now ${time}. Good afternoon!`;
    } 
    if (time > 18){
        return`Now ${time}. Good evening!`;
    }
};

test('invalid time less than 0', async () => {
    const result = isGreetingByTime(-1);
    expect(result).toBe("Invalid time! Please enter a time between 0 and 23.");
});

test('invalid time greater than 23', async () => {
    const result = isGreetingByTime(24);
    expect(result).toBe("Invalid time! Please enter a time between 0 and 23.");
});

test('valid time in the morning', async () => {
    const result = isGreetingByTime(9);
    expect(result).toBe("Now 9. Good morning!");
});

test('valid time in the afternoon', async () => {
    const result = isGreetingByTime(15);
    expect(result).toBe("Now 15. Good afternoon!");
});

test('valid time in the evening', async () => {
    const result = isGreetingByTime(20);
    expect(result).toBe("Now 20. Good evening!");
});