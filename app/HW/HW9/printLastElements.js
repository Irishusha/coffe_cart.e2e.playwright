export function printLastElements (arrayForTask, orderNumber) {  
    let arrayFistElements = [];
    if (orderNumber <= arrayForTask.length & orderNumber >= 1) {
        const count = arrayForTask.length - orderNumber;
    for (let i = count; i < arrayForTask.length; i++) {
        arrayFistElements.push(arrayForTask[i]);
    }
    return arrayFistElements;
}  else return('Enter the correct order of number')
};
console.log(printLastElements([7, 9, 0, -2], 4)); 
console.log(printLastElements([7, 9, 0, -2], 1));