const human = {
    age : 24,
    height : 190,
    weight : 90,
    sex : 'male',
    hair : 'black',
    IQ :135,
    goToGym : function () {
        console.log("I am going to the Gym")
    }
};

human.goToGym();

const personIryna = {
    hobby: 'reading books',
    sex : 'female',
    hair : 'brown',
    IQ :125,
    height : 168,
    weight : 75,
    age : 35,
    isEmployed : true,
    wakeUp() {
        console.log("I wake up at 6:30 a.m.")
    },
    readingBook() {
        console.log("I like reading books")
    },
    playWithDog() {
        console.log("I play with my dog")
    },

};

console.log(personIryna.readingBook());

human.salary = 8000;

human['position'] ='QA';
function getKey () {
    return ['hobby', 'position']
};

human[getKey()[0]] = getKey()[0];
delete human.age;
delete human[getKey()];

console.log(human);
for (const key in human) {
    console.log(key);
    console.log(human[key]);
    console.log(human['sex']);
};

const keys = Object.keys(human);
console.log(keys);

const  entries = Object.entries(human);
console.log(entries);