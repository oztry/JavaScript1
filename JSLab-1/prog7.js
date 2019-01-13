let arr1 = [1,6,23,8,4,98,3,7,3,98,4,98]
let numberOfEvens = 0
let sumOfEvens = 0

for(let i = 0; i < arr1.length; i++){
    if (arr1[i] % 2 === 0) {
        sumOfEvens += arr1[i]
        numberOfEvens++
    }
}

let avgOfEvens = sumOfEvens / numberOfEvens

console.log('Average value of even numbers is: ' + avgOfEvens)