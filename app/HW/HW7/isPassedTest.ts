export function isPassedTest (inputScore: number) {
    if (inputScore >= 50 && inputScore <= 100) {
        return `You have passed the test with score ${inputScore}`;
    }
    if (inputScore < 50) {
        return `You haven't passed the test.Your score: ${inputScore}`;
    }
}
isPassedTest(-15);