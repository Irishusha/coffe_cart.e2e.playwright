export function printFirstNElements (arrayForTask, orderNumber) {
    if (orderNumber <= arrayForTask.length & orderNumber >= 1) {
    let arrayFistElements = [];
    for (let i=0; i<orderNumber; i++) {
        arrayFistElements.push(arrayForTask[i]);
    }
    return arrayFistElements;
}   else return('Enter the correct order of number')
};
console.log(printFirstNElements([7, 9, 0, -2], 1)); 
console.log(printFirstNElements([7, 9, 0, -2], 5));