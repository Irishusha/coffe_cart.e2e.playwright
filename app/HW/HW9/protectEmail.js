function protectEmailRegex (email) {
    const regex = /_\w+/;
    const protectedEmail = email.replace(regex, '***');
    return protectedEmail;
};

function protectEmail(email){
    const underscoreIndex = email.indexOf('_');
    const atIndex = email.indexOf('@');
    if (atIndex === -1) {
        throw new Error("Invalid email address");
    } else {
        const before = email.slice(0, underscoreIndex); 
        const after = email.slice(atIndex); 
        const masked = '***';
        return before + masked + after;
        }
};

function isValidEmail(email) {
    const atPosition = email.indexOf("@");
    const dotPosition = email.lastIndexOf(".");
    return (
        typeof email === "string" &&
        atPosition > 0 &&
        dotPosition > atPosition + 1 &&
        dotPosition < email.length - 1
    );
}

function protectEmailNewVersion (email) {
    if (!isValidEmail(email)) {
        throw new Error("Invalid email address");
    }
    const atIndex = email.indexOf("@");
    const namePart = email.slice(0, atIndex);
    const domainPart = email.slice(atIndex);

    if (namePart.length <= 3) {
        return namePart + "...@" + domainPart.slice(1);
    }
    return namePart.slice(0, 5) + "..." + domainPart;
};

const emailToProtect = 'robin_singh@example.com';

console.log(protectEmailRegex(emailToProtect));
console.log(protectEmail(emailToProtect));
console.log(protectEmailNewVersion('dd@ex.ua'));
console.log(protectEmailNewVersion('robin_singh@example.com'));