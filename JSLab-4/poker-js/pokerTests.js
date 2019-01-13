const cards = require("./pokerCards");

let royalFlushCardsTest = () => {
  result = [];
  result.push(new cards.card("10", "hearts"));
  result.push(new cards.card("jack", "hearts"));
  result.push(new cards.card("queen", "hearts"));
  result.push(new cards.card("king", "hearts"));
  result.push(new cards.card("ace", "hearts"));
  return result;
};

let straightFlushCardsTest1 = () => {
  result = [];
  result.push(new cards.card("2", "hearts"));
  result.push(new cards.card("3", "hearts"));
  result.push(new cards.card("4", "hearts"));
  result.push(new cards.card("5", "hearts"));
  result.push(new cards.card("6", "hearts"));
  return result;
};

let straightFlushCardsTest2 = () => {
  result = [];
  result.push(new cards.card("9", "hearts"));
  result.push(new cards.card("10", "hearts"));
  result.push(new cards.card("jack", "hearts"));
  result.push(new cards.card("queen", "hearts"));
  result.push(new cards.card("king", "hearts"));
  return result;
};

let fourOfKindTest1 = () => {
  result = [];
  result.push(new cards.card("10", "diamonds"));
  result.push(new cards.card("10", "hearts"));
  result.push(new cards.card("10", "spades"));
  result.push(new cards.card("jack", "clubs"));
  result.push(new cards.card("10", "clubs"));
  return result;
};

let fourOfKindTest2 = () => {
  result = [];
  result.push(new cards.card("2", "diamonds"));
  result.push(new cards.card("5", "hearts"));
  result.push(new cards.card("7", "spades"));
  result.push(new cards.card("9", "clubs"));
  result.push(new cards.card("jack", "clubs"));
  return result;
};

let fullHouseTest1 = () => {
  result = [];
  result.push(new cards.card("10", "diamonds"));
  result.push(new cards.card("10", "hearts"));
  result.push(new cards.card("10", "spades"));
  result.push(new cards.card("9", "clubs"));
  result.push(new cards.card("9", "hearts"));
  return result;
};

let fullHouseTest2 = () => {
  result = [];
  result.push(new cards.card("jack", "diamonds"));
  result.push(new cards.card("jack", "hearts"));
  result.push(new cards.card("queen", "spades"));
  result.push(new cards.card("queen", "clubs"));
  result.push(new cards.card("jack", "hearts"));
  return result;
};

let flushTest1 = () => {
  result = [];
  result.push(new cards.card("2", "hearts"));
  result.push(new cards.card("5", "hearts"));
  result.push(new cards.card("queen", "hearts"));
  result.push(new cards.card("king", "hearts"));
  result.push(new cards.card("ace", "hearts"));
  return result;
};

let isStraightTest1 = () => {
  result = [];
  result.push(new cards.card("2", "diamonds"));
  result.push(new cards.card("3", "hearts"));
  result.push(new cards.card("4", "hearts"));
  result.push(new cards.card("5", "hearts"));
  result.push(new cards.card("6", "hearts"));
  return result;
};

let threeOfKindTest1 = () => {
  result = [];
  result.push(new cards.card("2", "diamonds"));
  result.push(new cards.card("2", "hearts"));
  result.push(new cards.card("2", "clubs"));
  result.push(new cards.card("5", "hearts"));
  result.push(new cards.card("6", "hearts"));
  return result;
};

let threeOfKindTest2 = () => {
  result = [];
  result.push(new cards.card("2", "diamonds"));
  result.push(new cards.card("3", "hearts"));
  result.push(new cards.card("ace", "clubs"));
  result.push(new cards.card("ace", "hearts"));
  result.push(new cards.card("ace", "spades"));
  return result;
};

let twoPairTest = () => {
  result = [];
  result.push(new cards.card("3", "diamonds"));
  result.push(new cards.card("3", "hearts"));
  result.push(new cards.card("4", "clubs"));
  result.push(new cards.card("ace", "hearts"));
  result.push(new cards.card("ace", "spades"));
  return result;
};

let pairTest = () => {
  result = [];
  result.push(new cards.card("2", "diamonds"));
  result.push(new cards.card("3", "hearts"));
  result.push(new cards.card("4", "clubs"));
  result.push(new cards.card("ace", "hearts"));
  result.push(new cards.card("ace", "spades"));
  return result;
};

let highCardTest = () => {
  result = [];
  result.push(new cards.card("queen", "diamonds"));
  result.push(new cards.card("7", "clubs"));
  result.push(new cards.card("9", "hearts"));
  result.push(new cards.card("ace", "hearts"));
  result.push(new cards.card("8", "hearts"));
  return result;
};

let tests = () => {
  let result;
  //result = royalFlushCardsTest();
  //result = straightFlushCardsTest1();
  //result = straightFlushCardsTest2();
  //result = fourOfKindTest1();
  //result = fourOfKindTest2();
  //result = fullHouseTest1();
  //result = fullHouseTest2();
  //result = flushTest1();
  //result = isStraightTest1();
  //result = threeOfKindTest1();
  //result = threeOfKindTest2();
  //result = twoPairTest();
  //result = pairTest();
  result = highCardTest();
  return result;
};

module.exports = {
  tests
};
