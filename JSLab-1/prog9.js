let arr1 = [1,6,23,8,4,98,3,7,3,98,4,98]
let result = 0

for(let i = 0; i < arr1.length; i++){
    if (i % 2 == 0)
        result += arr1[i]
    else
        result -= arr1[i]
}

console.log('Result is: ' + result)