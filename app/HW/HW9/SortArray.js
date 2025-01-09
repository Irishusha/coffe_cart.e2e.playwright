export function sortArrayWithUsualMethod (myArray) {
    const sortedValues = myArray.toSorted((a, b) => a - b);
    return sortedValues;
};

export function sortArray (myArray) {
    for (let i = 0; i < myArray.length; i++ ) {
        for (let j = 0; j < myArray.length; j++) {
            const item = myArray[j];
            if (myArray[j] > myArray[j+1] ) {
                myArray[j] = myArray[j+1];
                myArray[j+1] = item; 
            };
        };
    }
    return myArray;
}
const myArray = [-3, 8, 7, 6, 5, -4, 3, 2, 1, -5];  
console.log(sortArrayWithUsualMethod(myArray));
console.log(sortArray(myArray));
