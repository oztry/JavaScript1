const hands = require("./pokerHands");
const cards = require("./pokerCards");
const { tests } = require("./pokerTests");

let PickRandomCardFromDeck = (array, times) => {
  let result = [];
  for (let i = 0; i < times; i++)
    result.push(array.splice(getRandomNumber(0, array.length - 1), 1)[0]);
  return result;
};

let getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

let cards52 = cards.cardDeck();
let myCards = PickRandomCardFromDeck(cards52, 5);

//myCards = tests();

console.log(myCards);
console.log(hands.findHighestPokerHand(myCards));
