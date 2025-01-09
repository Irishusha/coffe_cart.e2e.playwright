export function findMaxOfTwoNumbers (firstNumber, secondNumber) {
    if (firstNumber === secondNumber) {
        return 'Numbers are equal'
    } else if (firstNumber > secondNumber){
        return 'The first number is MAX'
    } else {
        return 'The second number is MAX'
    };
};

const firstNumber = 45;
const secondNumber = -10;

console.log(findMaxOfTwoNumbers(firstNumber, secondNumber));