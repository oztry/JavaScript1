// class card {
//   constructor(rank, color) {
//     this.rank = rank;
//     this.color = color;
//   }
// }

function card(rank, color) {
  this.rank = rank;
  this.color = color;
}

let ranks = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "jack",
  "queen",
  "king",
  "ace"
];
let colors = ["clubs", "diamonds", "hearts", "spades"];

let cardDeck = () => {
  let result = [];
  ranks.forEach(rank =>
    colors.forEach(color => result.push(new card(rank, color)))
  );
  return result;
};

let allCardsSameColor = array => array.every(a => a.color === array[0].color);

let playerHasOnlyOneCardOfRank = (array, rank) =>
  array.indexOf(rank) > -1 && array.indexOf(rank) === array.lastIndexOf(rank);

let playerHasSequenceOfRanks = (playersArray, ranksArray) =>
  ranksArray.every(rank => playerHasOnlyOneCardOfRank(playersArray, rank));

let numberOfRankMaxTimesOccured = array =>
  Math.max(...groupRankOccurances(array));

let numberOfRankMinTimesOccured = array =>
  Math.min(...groupRankOccurances(array));

let numberOfUniqueRanks = array => groupRankOccurances(array).length;

let groupRankOccurances = array => {
  let groupArray = [];
  array.forEach(item => {
    if (groupArray[ranks.indexOf(item)]) groupArray[ranks.indexOf(item)] += 1;
    else groupArray[ranks.indexOf(item)] = 1;
  });
  return groupArray.filter(item => !isNaN(item));
};

let getHighestCard = array => {
  let highestIndex = 0;
  array.forEach(item => {
    if (ranks.indexOf(item) > highestIndex) highestIndex = ranks.indexOf(item);
  });
  return ranks[highestIndex];
};

module.exports = {
  card,
  ranks,
  cardDeck,
  allCardsSameColor,
  playerHasOnlyOneCardOfRank,
  playerHasSequenceOfRanks,
  numberOfRankMaxTimesOccured,
  numberOfRankMinTimesOccured,
  numberOfUniqueRanks,
  getHighestCard
};
