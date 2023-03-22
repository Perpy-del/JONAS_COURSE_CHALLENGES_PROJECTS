// WORKING ON MY SOLUTION

// Create an arrow function called calcAverage to calculate th
const calcAverage = (a, b, c) => (a + b + c) / 3;

// // Testing and returning result to the console
console.log(calcAverage(44, 23, 71));

// Using the function to calculate the averga for both the Dolphins and the Koalas

// TEST DATA 1 - Dolphins score 44, 23, 71, Koalas score 85, 54, 41
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(85, 54, 41);

// Logging the results of the average score of both team to the console
// console.log(scoreDolphins, scoreKoalas);

// TEST DATA 2 - Dolphins score 85, 54, 41, Koalas score 23, 34, 27
const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

// Logging the results of the average score of both team to the console
console.log(scoreDolphins, scoreKoalas);

/* Create a function called checkWinner that takes in the average of each team as parameters and log the winner to the console */
const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas}) 🏆`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins}) 🏆`);
  } else {
    console.log("No team wins 😥");
  }
};

checkWinner(scoreDolphins, scoreKoalas); // Result for TEST 1: No team wins 😥 and TEST 2: Dolphins win (60 vs. 28) 🏆

// ====================================================== //
// FOLLOWING JONAS' SOLUTION

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// // Test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win 🏆 (${avgDolphins} vs ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win 🏆 (${avgKoalas} vs ${avgDolphins})`);
//   } else {
//     console.log("No team wins...");
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);
// Test 1 logs No team wins... and Test 2 logs Dolphins win 🏆 (60 vs 28)

// Test 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);
