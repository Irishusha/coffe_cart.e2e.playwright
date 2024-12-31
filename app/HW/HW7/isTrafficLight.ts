export function isTrafficLight (lightColor : string) {
    lightColor = lightColor.toLowerCase();
    switch (lightColor) {
        case "green" :
            return 'You can go!';
            break;
        case "yellow":
            return 'You can prepare!';
            break;
        case  "red":
            return "You CAN'T go!";
            break;
        default : 
            return 'This is not a color of traffic light!';
            break;
    }

};
isTrafficLight('GReeN');