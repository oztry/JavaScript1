function getRandomNumber(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function getRandomElement(array, attempts) {
    if (attempts < 1) return null
    let result = array[getRandomNumber(0, array.length-1)]
    //console.log(result);
    for (let i = 1; i < attempts; i++) {
        let temp = array[getRandomNumber(0, array.length-1)] 
        if (result > temp) result = temp  
        //console.log(temp, result);
    }
    return result
}

let arr1 = [1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20,11]

console.log(getRandomElement(arr1, 10));