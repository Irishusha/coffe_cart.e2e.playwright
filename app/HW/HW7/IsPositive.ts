export function isPositive (inputNumber : number) { 
    if (typeof inputNumber === "number") {  
        if (inputNumber === 0) {
            return "Your number is zero.";
        } else if (inputNumber > 0) {
            return "Your number is positive.";
        } else {
            return "Your number is negative.";
        }}
    else {
            throw Error("Use ONLY number to check if it positive/negative number.");
          }
};
isPositive(-15);