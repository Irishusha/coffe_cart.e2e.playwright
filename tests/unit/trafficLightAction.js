import { test, expect } from '@playwright/test';

function trafficLightAction (lightColor) {
    lightColor = lightColor.toLocaleLowerCase();
    switch (lightColor) {
        case "green" :
            console.log('You can go!');
            break;
        case "yellow":
            console.log('You can prepare!');
            break;
        case  "red":
            console.log("You CAN'T go!");
            break;
        default : 
            console.log('This is not a color of traffic light!');
            break;
    }
};
test('light is green', async () => {
    const consoleSpy = jest.spyOn(console, 'log');
    trafficLightAction('green');
    expect(consoleSpy).toHaveBeenCalledWith('You can go!');
    consoleSpy.mockRestore();
});

test('light is yellow', async () => {
    const consoleSpy = jest.spyOn(console, 'log');
    trafficLightAction('yellow');
    expect(consoleSpy).toHaveBeenCalledWith('You can prepare!');
    consoleSpy.mockRestore();
});

test('light is red', async () => {
    const consoleSpy = jest.spyOn(console, 'log');
    trafficLightAction('red');
    expect(consoleSpy).toHaveBeenCalledWith("You CAN'T go!");
    consoleSpy.mockRestore();
});

test('light is an invalid color', async () => {
    const consoleSpy = jest.spyOn(console, 'log');
    trafficLightAction('blue');
    expect(consoleSpy).toHaveBeenCalledWith('This is not a color of traffic light!');
    consoleSpy.mockRestore();
});

test('light is uppercase', async () => {
    const consoleSpy = jest.spyOn(console, 'log');
    trafficLightAction('GREEN');
    expect(consoleSpy).toHaveBeenCalledWith('You can go!');
    consoleSpy.mockRestore();
});