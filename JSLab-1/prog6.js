let arr1 = [1,6,23,8,4,98,3,7,3,98,4,98]
let highestValue
let indexesWithHighestValue = []

for(let i = 0; i < arr1.length; i++){
    if (i === 0)
    {
        highestValue = arr1[i];
        continue;
    }

    if (highestValue < arr1[i])
        highestValue = arr1[i]
}

for(let i = 0; i < arr1.length; i++){
    if (arr1[i] === highestValue)
        indexesWithHighestValue.push(i)
}

console.log(indexesWithHighestValue)