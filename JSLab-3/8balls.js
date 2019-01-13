class ball {
  constructor(id, weight) {
    this.id = id;
    this.weight = weight;
  }
}

let ballCalculations = {
  FindHeaviestBall(arr) {
    return this.Comparison(this.Comparison(arr, 3, 6, 8), 1, 2, 3);
  },
  Comparison(arr, sliceArg1, sliceArg2, sliceArg3) {
    let first = arr.slice(0, sliceArg1);
    let second = arr.slice(sliceArg1, sliceArg2);
    let third = arr.slice(sliceArg2, sliceArg3);
    let result = scale.Compare(first, second);
    return result ? result : third;
  }
};

let scale = {
  Weigh(arr) {
    let weight = 0;
    arr.forEach(element => {
      weight += element.weight;
    });
    return weight;
  },
  Compare(first, second) {
    let firstWeigh = this.Weigh(first);
    let secondWeigh = this.Weigh(second);
    return firstWeigh === secondWeigh
      ? null
      : firstWeigh > secondWeigh
      ? first
      : second;
  }
};

let getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
let getRandomElement = arr => arr[getRandomNumber(0, arr.length - 1)];

const numberOfBalls = 8;
const initialWeight = 1;
const alteredWeight = 2;
let arrayOfBalls = [];

for (let i = 1; i < numberOfBalls + 1; i++)
  arrayOfBalls.push(new ball(i, initialWeight));

getRandomElement(arrayOfBalls).weight = alteredWeight;
arrayOfBalls.forEach(element => console.log(element));
console.log(
  "The heaviest ball is: ",
  ballCalculations.FindHeaviestBall(arrayOfBalls)
);
