let arr1 = [1,6,23,8,4,98,3,7,3,98,4,98]
let sum = 0
for(let i = 0; i < arr1.length; i++){
    if (arr1[i] % 2 != 0)
        sum += arr1[i]
}
console.log(sum)
