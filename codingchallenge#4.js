'use strict';
// MY SOLUTION TO CHALLENGE #4

//   Create an array called bills containing all 10 bill values.
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// Create empty arrays for the tips and the totals
const tips = [];
const totals = [];

// Use the calcTip function to calculate tips and total

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  const bill = bills[i];
  const total = tip + bill;
  tips.push(tip);
  totals.push(total);
}

console.log(tips, totals); /* [
    4.4, 44.25,  26.4,
     88,   7.4, 15.75,
      2,   220,  12.9,
    7.8
  ] [
    26.4, 339.25,  202.4,
     528,   44.4, 120.75,
      12,   1320,   98.9,
    59.8
  ]  */

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage([1, 2, 3, 4, 5])); // logs 3 to the console.
console.log(calcAverage(totals)); // logs 275.19 to the console.
console.log(calcAverage(bills)); // logs 232.3 to the console.
console.log(calcAverage(tips)); // logs 42.89 to the console.
