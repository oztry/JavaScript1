function Combine(array) {
    let result = []
    for (let i = 0; i < array.length - 1; i += 2) {
       result.push(array[i] + array[i+1])     
    }
    return result;
}

let arr1 = [1,6,23,8,4,98,3,7,3,98,4,98,7,6,7,19,20,11]
console.log(Combine(arr1));