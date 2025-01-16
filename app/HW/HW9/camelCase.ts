function camelizeString(stringToCamelize: string) {
    let resultString = '';
    for (let i = 0; i < stringToCamelize.length; i++) {
        if (stringToCamelize[i] === ' ') {
            resultString += stringToCamelize[i+1].toUpperCase();
            i++;
        } else {
            resultString += stringToCamelize[i];
        }
    }
    return resultString;
}

const stringToCamelize = 'JavaScript Exercises testing test';
console.log(camelizeString(stringToCamelize));