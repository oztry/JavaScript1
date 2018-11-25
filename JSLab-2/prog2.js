function SumOfFirstAndLastElement(array) {
    return (array.length !== 0) 
        ? array[0] + array[array.length-1] 
        : 0;
}

let arr1 = [1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20,11];
console.log(SumOfFirstAndLastElement(arr1));

arr1 = [];
console.log(SumOfFirstAndLastElement(arr1));

arr1 = [1];
console.log(SumOfFirstAndLastElement(arr1));