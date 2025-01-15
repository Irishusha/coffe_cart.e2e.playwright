export function addDashToEvenNumber(StringToEdit) {
    let resultArray = [];
    let arrayOfString = StringToEdit.split('');
    for (let i = 0; i < arrayOfString.length; i++) {
        resultArray.push(arrayOfString[i]);
        if (i < arrayOfString.length - 1 && arrayOfString[i] % 2 === 0 && arrayOfString[i + 1] % 2 === 0) {
            resultArray.push('-');
        }
    }    
    return resultArray.join(''); 
}
console.log(addDashToEvenNumber('125468'));