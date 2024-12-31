export function isFirstNumberBiggest (firstNumber : number, secondNumber: number) {
    if (firstNumber === secondNumber) {
        return `The ${firstNumber} and ${secondNumber} are equal.`;
    } else if (firstNumber > secondNumber) {
        return `The first number ${firstNumber} is bigger than the second number ${secondNumber}.`;
    } else {
        return `The second number ${secondNumber} is bigger than the first number ${firstNumber}.`;
    }
};
isFirstNumberBiggest(5,3);