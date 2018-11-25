function SumOfElements(array) {
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });
    return sum;
}

let arr1 = [1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20,11]
console.log(SumOfElements(arr1));
