let arr1 = [1974, 1900, 1985, 2000]
let resultArr = []

for (i=0; i<arr1.length; i++){
    if ((arr1[i] % 100 === 0 || arr1[i] % 4 === 0) && arr1[i] % 400 !== 0)
        resultArr.push(arr1[i])
}

console.log(resultArr)