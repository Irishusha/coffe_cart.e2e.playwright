//1
function printEvenOrOdd (inputNumber : number): void {
    if (inputNumber % 2 === 0) {
        console.log(`The number ${inputNumber} is even.`);
    } else {
        console.log(`The number ${inputNumber} is odd.`)} 
};
printEvenOrOdd(-15);

//2
function getGreetingByTime (time: number) : void {
    if (time < 0 || time > 23) {
        console.log("Invalid time! Please enter a time between 0 and 23.");
    } else 
    if (time < 12) {
        console.log(`Now ${time}. Good morning!`);
    }  
    if (time >= 12 && time <= 18) {
        console.log(`Now ${time}. Good afternoon!`)
    } 
    if (time > 18){
        console.log(`Now ${time}. Good evening!`);
    }
};
getGreetingByTime(-12);

//3
function passedTest (inputScore: number) : void {
    if (inputScore >= 50) {
        console.log(`You have passed the test with score ${inputScore}`);
    }
    if (inputScore < 50) {
        console.log(`You haven't passed the test.Your score: ${inputScore}`);
    }
}
passedTest(-15);

//4

function canVote (inputAge : number) : void {
    if (inputAge >= 18) {
        console.log("You can vote");
    } else {
        console.log("You can't vote");
    }
};
canVote(19);

//5
function compareTwoNumbers (firstNumber : number, secondNumber: number) : void {
    if (firstNumber === secondNumber) {
        console.log(`The ${firstNumber} and ${secondNumber} are equal.`);
    } else if (firstNumber > secondNumber) {
        console.log(`The first number ${firstNumber} is bigger than the second number ${secondNumber}.`);
    } else {
        console.log(`The second number ${secondNumber} is bigger than the first number ${firstNumber}.`);
    }
};
compareTwoNumbers(5,3);

//6
function trafficLightAction (lightColor : string): void {
    lightColor = lightColor.toLocaleLowerCase();
    switch (lightColor) {
        case "green" :
            console.log('You can go!');
            break;
        case "yellow":
            console.log('You can prepare!');
            break;
        case  "red":
            console.log("You CAN'T go!");
            break;
        default : 
            console.log('This is not a color of traffic light!');
            break;
    }

};
trafficLightAction('GReeN');

//7
function isPositive (inputNumber : number) : void { 
    if (typeof inputNumber === "number") {  
        if (inputNumber === 0) {
            console.log("Your number is zero.");
        } else if (inputNumber > 0) {
            console.log("Your number is positive.");
        } else {
            console.log("Your number is negative.");
        }}
    else {
            throw Error("Use ONLY number to check if it positive/negative number.");
          }
};
isPositive(-15);
