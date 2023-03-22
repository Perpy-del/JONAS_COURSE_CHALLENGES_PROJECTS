// MY SOLUTION TO CHALLENGE #2

/* Create a function called calcTip that takes in any bill
 value as an input and returns the corresponding tip */
// function calcTip(billValue) {
//   let tip;
//   if (billValue >= 50 && billValue <= 300) {
//     tip = (15 / 100) * billValue;
//   } else {
//     tip = (20 / 100) * billValue;
//   }
//   return tip;
// }

// // Test the function using a bill value of 100
// console.log(calcTip(100)); // logs 15 to the console

// /* Create an array called bills containing the test data
// (125, 555 and 44) */
// const bills = [125, 555, 44];

// /* Create an array called tips containing the tip value for
// each bill calculated from the function created above */

// /* using the function, calculate the tip value for each bill
// and assign each to a variable tip1, tip2, tip3 respectively */
// const tip1 = calcTip(125);
// const tip2 = calcTip(555);
// const tip3 = calcTip(44);

// // log each to the console to test that the function works
// console.log(tip1, tip2, tip3); // 18.75 111 8.8

// let tipValues = [tip1, tip2, tip3];
// // Log the array to the console
// console.log(tipValues);  // [ 18.75, 111, 8.8 ]

// /* Finally, create an array called total containing the total
// values (bill + tip) */

// let total = [];
// for (i = 0; i < tipValues.length; i++) {
//   tipBills = tipValues[i] + bills[i];
//   total.push(tipBills);
// }

// console.log(total);  // [ 143.75, 666, 52.8 ]

// JONAS'S SOLUTION

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// Using the arrow function instead
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals); // [ 125, 555, 44 ] [ 18.75, 111, 8.8 ] [ 143.75, 666, 52.8 ]
