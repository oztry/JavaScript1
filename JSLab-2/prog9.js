function getRandomNumber(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function getRandomArray(array) {
    let resultArray = []
    let element;
    let index;
    let arrayLength = array.length
    for (let i = 0; i < arrayLength; i++) {
        index = getRandomNumber(0, array.length-1);
        element = array[index];
        resultArray.push(element);
        array.splice(index, 1);
    }
    return resultArray;
}

let arr1 = [1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20,11]
console.log(getRandomArray(arr1));