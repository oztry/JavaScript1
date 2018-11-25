function Factorial(number) {
    if (number < 0) return NaN;
    if (number === 0) return 1;
    return (number > 1) ? (number * Factorial(number-1)) : number;
}

let number = 5;
console.log(Factorial(number));