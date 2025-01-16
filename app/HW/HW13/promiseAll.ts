function randomTime () {
    return Math.floor(Math.random() * 2000) + 1000; 
};
function task1() {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve(); 
        }, randomTime());
    });
};
function task2() {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve(); 
        }, randomTime());
    });
};
function task3() {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve(); 
        }, randomTime());
    });
};
Promise.all([task1(), task2(), task3()])
    .then(() => console.log('All tasks done!'));