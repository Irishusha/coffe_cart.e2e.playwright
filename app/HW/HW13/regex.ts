
function findOnlyNumbers(string: string) {

    return string.match(/\d+/g);
};
const string = "У мене 3 яблука, 12 груш і 7 апельсинів.";
console.log(findOnlyNumbers(string));


function findWordWithCapital (str: string) {
    return str.match(/\b[A-Z][a-z]*/g);
}
//const str = 'Привіт, мене звати Анна, і я живу в Києві.';Hi, my name is Anna and I live in Kyiv.
const str = 'Hi, my name is Anna and I live in Kyiv.'
console.log(findWordWithCapital(str));