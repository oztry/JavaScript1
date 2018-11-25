function getRandomNumber(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function getRandomElement(array) {
    return array[getRandomNumber(0, array.length-1)]
}

let arr1 = [1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20,11]

console.log(getRandomElement(arr1));