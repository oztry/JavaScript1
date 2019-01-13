const { readFile } = require("fs");
const { promisify } = require("util");

const readFromFile = promisify(readFile);

let daysOfWeek = {
  0: "sunday",
  1: "monday",
  2: "tuesday",
  3: "wednesday",
  4: "thursday",
  5: "friday",
  6: "saturday"
};

async function readJson() {
  return await readFromFile("Data.json");
}

function MainRecord(index, id, cost, detailsOfPayment) {
  (this.index = index),
    (this._id = id),
    (this.cost = Number(cost)),
    (this.detailsOfPayment = new DetailsOfPayment(
      detailsOfPayment.Type,
      detailsOfPayment.company,
      detailsOfPayment.date
    ));
}

function DetailsOfPayment(Type, company, date) {
  (this.Type = Type),
    (this.company = company),
    (this.date = new Date(
      date.substring(6),
      date.substring(3, 5),
      date.substring(0, 2)
    ));
}

let convertJson = data => {
  return JSON.parse(data).map(d => {
    return new MainRecord(d.index, d._id, d.cost, d.detailsOfPayent);
  });
};

let MoneySpentInYear = (array, year) => {
  let i = array
    .filter(record => record.detailsOfPayment.date.getYear() + 1900 === year)
    .map(record => record.cost)
    .reduce((a, b) => a + b);
  console.log("i. How much money was spend in 2014? ", i);
};

let CompaniesEarnings = earningsArr => {
  results = {};
  earningsArr.forEach(element => {
    if (results[element.detailsOfPayment.company])
      results[element.detailsOfPayment.company] += element.cost;
    else results[element.detailsOfPayment.company] = element.cost;
  });
  console.log("ii. What company was earning how much? ", results);
};

let TansactionsTypesSpendings = array => {
  results = {};
  array.forEach(element => {
    if (results[element.detailsOfPayment.Type])
      results[element.detailsOfPayment.Type] += element.cost;
    else results[element.detailsOfPayment.Type] = element.cost;
  });
  console.log(
    "iii. What type fn transaction was having what spending’s? ",
    results
  );
};

let SpendingsInEachMonth = array => {
  results = {};
  array.forEach(element => {
    if (results[element.detailsOfPayment.date.getMonth() + 1])
      results[element.detailsOfPayment.date.getMonth() + 1] += element.cost;
    else results[element.detailsOfPayment.date.getMonth() + 1] = element.cost;
  });
  console.log("iv. Values of the spending in each month? ", results);
};

let SpendingsPerDayOfWeek = array => {
  results = {};
  array.forEach(element => {
    if (results[daysOfWeek[element.detailsOfPayment.date.getDay()]])
      results[daysOfWeek[element.detailsOfPayment.date.getDay()]] +=
        element.cost;
    else
      results[daysOfWeek[element.detailsOfPayment.date.getDay()]] =
        element.cost;
  });
  console.log("v. Values of the spending in each day of the week? ", results);
};

readJson()
  .then(data => {
    let records = convertJson(data);
    // records.forEach(record =>
    //   console.log(record.index, record.detailsOfPayment.date.getYear() + 1900)
    // );
    MoneySpentInYear(records, 2014);
    CompaniesEarnings(records);
    TansactionsTypesSpendings(records);
    SpendingsInEachMonth(records);
    SpendingsPerDayOfWeek(records);
  })
  .catch(data => console.log("Something went wrong."));
