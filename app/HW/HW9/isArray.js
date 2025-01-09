export function isArray (input) {
    if (input.map){
        return true;
    } else return false;

};
console.log(isArray([1, 2, 4, 0]));
console.log(isArray('QA DOJO')); 
console.log(isArray([]));