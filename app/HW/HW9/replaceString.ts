function replaceString (stringReplacing : string) {
    let newResultString = ''
    let resultString = '';
    let capitalizeNext = true;
    for (let i = 0; i < stringReplacing.length; i++) {
        if (stringReplacing[i] === ' ') {
            resultString += stringReplacing[i];
            capitalizeNext = true;
        } else if (capitalizeNext) {
            resultString += stringReplacing[i].toUpperCase();
            capitalizeNext = false;
        } else {
            resultString += stringReplacing[i].toLowerCase();
        }
    }
    for (let i = 0; i<resultString.length; i++)
        if (i === 0) {
            newResultString += resultString[i];
            i++;
        } else if (i % 4 !== 0 && i !== 0) {
            newResultString += resultString[i-1];
        }  else newResultString += '_';
        return newResultString;
}

const stringReplacing = 'hello word. Testing test';
console.log(replaceString (stringReplacing));