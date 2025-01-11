function parametrizeStringUsualMethod(myString) {
    let newString = myString.replaceAll(' ', '-');
    return newString;
};

function parametrizeString(myString) {
    let resultString ='';
    for (let letter of myString) {
        if (letter === " ") {
            resultString = resultString + "-";
        }   else {
                resultString = resultString + letter;
        }    
    } 
    return resultString;
}
const myString = "Robin Singh from USA";
console.log(parametrizeStringUsualMethod(myString));
console.log(parametrizeString(myString));
