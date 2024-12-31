export function isGreetingByTime (time: number){
    if (time < 0 || time > 23) {
        return "Invalid time! Please enter a time between 0 and 23.";
    } else 
    if (time < 12) {
        return`Now ${time}. Good morning!`;
    }  
    if (time >= 12 && time <= 18) {
        return`Now ${time}. Good afternoon!`
    } 
    if (time > 18){
        return `Now ${time}. Good evening!`;
    }
};
isGreetingByTime(-12);