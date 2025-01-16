
function waitForTwoSeconds() {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve(); 
        }, 2000);
    });
};

waitForTwoSeconds()
    .then(() => console.log('2 seconds passed!'));