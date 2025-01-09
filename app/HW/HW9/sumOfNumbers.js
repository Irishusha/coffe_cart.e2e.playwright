function sumOfNumbers (number) {
    let sumOfNumbers = 0;
    for (let i = 0; i <= number; i++) {
        sumOfNumbers += i;
    };
    return sumOfNumbers;
};

const number = 33;
console.log(sumOfNumbers(number));