// function getRandomNumber(min, max) {
//     return Math.floor((Math.random() * (max - min + 1)) + min);
// }

function getRandomOperator(array) {
    return array[Math.floor((Math.random() * (array.length)))];
}

function randomOperation(a, b, array) {
    return eval(a + getRandomOperator(array) + b)
}

let arr1 = [1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20,11]
let result = arr1[0]
let operators = ['-', '+']

for (let i = 0; i < arr1.length-1; i++) {
    result = randomOperation(result, arr1[i+1], operators)
}

console.log(`Result is ${result}`);