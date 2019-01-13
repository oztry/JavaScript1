const cards = require("./pokerCards");

let isRoyalFlush = array => {
  if (!cards.allCardsSameColor(array)) return false;
  return cards.playerHasSequenceOfRanks(array.map(a => a.rank), [
    "10",
    "jack",
    "queen",
    "king",
    "ace"
  ]);
};

let isStraightFlush = array => {
  if (!cards.allCardsSameColor(array)) return false;
  for (let i = 0; i < cards.ranks.length - 5; i++) {
    if (
      cards.playerHasSequenceOfRanks(array.map(a => a.rank), [
        cards.ranks[i],
        cards.ranks[i + 1],
        cards.ranks[i + 2],
        cards.ranks[i + 3],
        cards.ranks[i + 4]
      ])
    )
      return true;
  }
};

let isFourOfKind = array =>
  cards.numberOfRankMaxTimesOccured(array.map(a => a.rank)) === 4;

let isFullHouse = array =>
  cards.numberOfRankMaxTimesOccured(array.map(a => a.rank)) === 3 &&
  cards.numberOfRankMinTimesOccured(array.map(a => a.rank)) === 2;

let isFlush = array => cards.allCardsSameColor(array);

let isStraight = array => {
  //if (cards.allCardsSameColor(array)) return false; //dead condition

  for (let i = 0; i < cards.ranks.length - 4; i++) {
    if (
      cards.playerHasSequenceOfRanks(array.map(a => a.rank), [
        cards.ranks[i],
        cards.ranks[i + 1],
        cards.ranks[i + 2],
        cards.ranks[i + 3],
        cards.ranks[i + 4]
      ])
    )
      return true;
  }
};

let isThreeOfKind = array =>
  cards.numberOfRankMaxTimesOccured(array.map(a => a.rank)) === 3;

let isTwoPair = array =>
  cards.numberOfRankMaxTimesOccured(array.map(a => a.rank)) === 2 &&
  cards.numberOfUniqueRanks(array.map(a => a.rank)) === 3;

let isPair = array =>
  cards.numberOfRankMaxTimesOccured(array.map(a => a.rank)) === 2;

let highestCard = array => cards.getHighestCard(array.map(a => a.rank));

let findHighestPokerHand = array => {
  if (isRoyalFlush(array)) return "Royal Flush";
  if (isStraightFlush(array)) return "Straight Flush";
  if (isFourOfKind(array)) return "Four of a Kind";
  if (isFullHouse(array)) return "Full House";
  if (isFlush(array)) return "Flush";
  if (isStraight(array)) return "Straight";
  if (isThreeOfKind(array)) return "Three of a Kind";
  if (isTwoPair(array)) return "Two pair";
  if (isPair(array)) return "Pair";
  return "High card: " + highestCard(array);
};

module.exports = {
  findHighestPokerHand
};
