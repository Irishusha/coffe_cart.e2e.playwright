function repeat(stringToRepeat : string, amountOfRepeat: number) {
    let newStr = '';
    for (let i = 1; i <= amountOfRepeat; i++) {
        newStr = newStr + stringToRepeat;
    }
    return newStr;
};
const stringToRepeat = 'Ha!';
const amountOfRepeat = 15;
console.log(repeat(stringToRepeat, amountOfRepeat));
