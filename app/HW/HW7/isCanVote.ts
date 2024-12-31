export function isCanVote (inputAge : number) {
    if (inputAge >= 18) {
        return "You can vote";
    } else {
        return "You can't vote";
    }
};
isCanVote(19);