let add = (a, b) => { return a + b } 
let substract = (a, b) => { return a - b }
let multipy = (a, b) => { return a * b }
let divide = (a, b) => { return a / b }

let result = (x, y, operator) => {
    return calculation = {
        parameters: {
            x,
            y
        },
        operation: undefined,
        setOperation(operator) {
            if (operator === '+') operation = add
            else if (operator === '-') operation = substract        
            else if (operator === '*') operation = multipy
            else if (operator === '/') operation = divide
        },
        calculate(){
            this.setOperation(operator)
            return operation(this.parameters.x, this.parameters.y)
        }
    }
}

console.log(result(1, 2, '+').calculate())
console.log(result(3, 2, '-').calculate())
console.log(result(3, 2, '*').calculate())
console.log(result(8, 2, '/').calculate())