function capitalizeWords(stringForTest: string):string {
    let resultString = '';
    resultString = stringForTest[0].toUpperCase();
    for (let i = 1; i < stringForTest.length; i++) {
       if (stringForTest[i] === " ") {
        resultString = resultString + stringForTest[i] + stringForTest[i+1].toUpperCase();
        i++;
       }
       else {
        resultString = resultString + stringForTest[i];
       }
    }
    return resultString;
}
const stringForTest = 'js string exercises testing test';
console.log(capitalizeWords(stringForTest.trim()));

function capitalizeWordsV2(stringForTest: string): string {
    let resultString = '';
    let capitalizeNext = true;
    for (let i = 0; i < stringForTest.length; i++) {
        if (stringForTest[i] === ' ') {
            resultString += stringForTest[i];
            capitalizeNext = true;
        } else if (capitalizeNext) {
            resultString += stringForTest[i].toUpperCase();
            capitalizeNext = false;
        } else {
            resultString += stringForTest[i].toLowerCase();
        }
    }
    return resultString;
}

console.log(capitalizeWordsV2(stringForTest));