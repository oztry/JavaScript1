let arr1 = [1,6,23,8,4,98,3,7,3,98,4,98]
let minValue, maxValue
for(let i = 0; i < arr1.length; i++){
    if (i === 0)
    {
        minValue = maxValue = arr1[i];
        continue;
    }

    if (minValue > arr1[i])
        minValue = arr1[i]
    if (maxValue < arr1[i])
        maxValue = arr1[i]
}

console.log("Min value is: " + minValue)
console.log("Max value is: " + maxValue)