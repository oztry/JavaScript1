function RevertArray(array) {
    let result = [];
    let len = array.length;
    for(let i = len - 1; i >= 0; i--) {
        result.push(array[i]);
    }
    return result;
}

let arr1 = [1,6,23,8,4,98,3,7,3,98,4,98,7,6,7,19,20,11]
console.log(arr1);
console.log(RevertArray(arr1));

arr1 = []
console.log(arr1);
console.log(RevertArray(arr1));

arr1 = [1]
console.log(arr1);
console.log(RevertArray(arr1));