export function isNumberEvenOrOdd (inputNumber : number){
    if (inputNumber % 2 === 0) {
        return `The number ${inputNumber} is even.`;
    } else {
        return `The number ${inputNumber} is odd.`} 
};
isNumberEvenOrOdd(-15);