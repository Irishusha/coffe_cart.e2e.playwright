function splitStringToArray1 (stringToSplit: string): string[] {
    let splittedArray: string[]; 
    return splittedArray = stringToSplit.split(' ');
};

function splitStringToArray (stringToSplit: string) : string[] {
    let splittedArray: string[] = [];
    let itemOfArray: string = '';
    for (const letter of stringToSplit) {
        if (letter !== " ") {
            itemOfArray += letter;
        }
        else {
            splittedArray.push(itemOfArray);
            itemOfArray = '';
        }
    }
        splittedArray.push(itemOfArray);
    return splittedArray;
};

const stringToSplit = "Robbin Singh";
console.log(splitStringToArray(stringToSplit));