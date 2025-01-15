export function cloneArray (inputArray: Array<any>) {
    let clonedArray : Array<any>
    clonedArray = [];
    for(let i = 0; i < inputArray.length; i++) {
        clonedArray.push(inputArray[i]);
    }
    return clonedArray;
};

console.log(cloneArray([1, 2, 4, 0])); 


console.log(cloneArray([1, 2, [4, 0]])); 
console.log(cloneArray([1, 2, [4, [3,5]]])); 