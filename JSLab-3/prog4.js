//utility function
let add = (a, b) => {
  return a + b;
};
let substract = (a, b) => {
  return a - b;
};
let multiply = (a, b) => {
  return a * b;
};
let divide = (a, b) => {
  return a / b;
};

let matchOperation = {
  "+": add,
  "-": substract,
  "*": multiply,
  "/": divide
};

let result = (x, y, operator) => {
  return {
    parameters: {
      x,
      y
    },
    operation: undefined,
    setOperation(operator) {
      operation = matchOperation[operator];
    },
    calculate() {
      this.setOperation(operator);
      return operation(this.parameters.x, this.parameters.y);
    }
  };
};

console.log(result(1, 2, "+").calculate());
console.log(result(3, 2, "-").calculate());
console.log(result(3, 2, "*").calculate());
console.log(result(8, 2, "/").calculate());
