function truncateString (myString, number) {
    let newString = '';
    if (number <= myString.length) {
    for (i=0; i<number; i++) {
        newString = newString + myString[i];
    };
        return newString;
    } else {
        return 'Enter the correct number that less that length of string!'
    };
}; 

function  truncateStringWithUsualMethod (myString, number) {
    return myString.substring(0,number);
};

function  truncateStringWithSliced (myString, number) {
    return myString.slice(0,number);
};

const myString = "Robin Singh";
const number = 4;
console.log(truncateString(myString,number));
console.log(truncateStringWithUsualMethod(myString,number));
console.log(truncateStringWithSliced(myString,number));
