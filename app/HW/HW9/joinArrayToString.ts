export function joinArrayToString (myArray: string[]):string {
    let resultString ='';
    resultString = myArray.join('+');
    return resultString;
}
let myArray = ["Red", "Green", "White", "Black"];
console.log(joinArrayToString(myArray));
