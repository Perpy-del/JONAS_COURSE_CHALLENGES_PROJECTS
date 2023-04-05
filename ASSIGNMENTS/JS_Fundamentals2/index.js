// LECTURE: Functions

// Write a function called describeCountry that takes in three parameters
function describeCountry(country, population, capitalCity) {
  console.log(
    `${country} has ${population} million people and its capital city is ${capitalCity}`
  );
}

// Call the function 3 times with input for 3 different countries.
const country1 = describeCountry('Bahamas', 25, 'Nassau');
const country2 = describeCountry('Nigeria', 211, 'Abuja');
const country3 = describeCountry('Peru', 10, 'Lima');
/* Bahamas has 25 million people and its capital city is Nassau
Nigeria has 211 million people and its capital city is Abuja
Peru has 10 million people and its capital city is Lima */

// LECTURE: Function Declarations vs. Expressions

// Create a function declaration called percentageOfWorld1 that returns the percentage of the world population

let worldPopulation = 7900;
function percentageOfWorld1(popValue) {
  let percentageValue = (popValue / worldPopulation) * 100;
  return percentageValue;
}

const percentageValueNigeria = percentageOfWorld1(211);
const percentageValueChina = percentageOfWorld1(1441);
const percentageValueCanada = percentageOfWorld1(38);
console.log(
  percentageValueNigeria,
  percentageValueChina,
  percentageValueCanada
);

// 2.670886075949367 18.240506329113924 0.4810126582278481
// 2.7, 18.2, 0.5

// Create a function expression that does the exact same thing called percentageOfWorld2

const percentageOfWorld2 = function (popValue) {
  let percentageValue = (popValue / worldPopulation) * 100;
  return percentageValue;
};

const percentChina = percentageOfWorld2(1441);
const percentNigeria = percentageOfWorld2(211);
const percentCanada = percentageOfWorld2(38);

console.log(percentChina, percentNigeria, percentCanada);

// 18.240506329113924 2.670886075949367 0.4810126582278481
// 18.2, 2.7, 0.5

// LECTURE: Arrow Functions
// Recreate the last assignment, but this time create an arrow function called 'percentageOfWorld3'

const percentageOfWorld3 = popValue => {
  let percentageValue = (popValue / worldPopulation) * 100;
  return percentageValue;
};

const percentOfChina = percentageOfWorld2(1441);
const percentOfNigeria = percentageOfWorld2(211);
const percentOfCanada = percentageOfWorld2(38);

console.log(percentOfChina, percentOfNigeria, percentOfCanada);

// 18.240506329113924 2.670886075949367 0.4810126582278481
// 18.2, 2.7, 0.5

// LECTURE: Functions Calling Other Functions

// Create a function called describePopulation that takes in two arguments: 'country' and 'population' and returns a string.

const describePopulation = (country, population) => {
  const percentage = percentageOfWorld1(population).toFixed(2);
  const countryPopulation = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
  console.log(countryPopulation);
};

describePopulation('Nigeria', 211);
describePopulation('China', 1441);
describePopulation('Canada', 38);

/* Nigeria has 211 million people, which is about 2.67% of the world.
China has 1441 million people, which is about 18.24% of the world.
Canada has 38 million people, which is about 0.48% of the world.
*/

// LECTURE: Introduction to Arrays

// Create an array containing 4 population values of 4countries of your choice. Store in a variable called populations.

const populations = [1441, 211, 38, 33];

console.log(populations.length === 4); // true

const percentages = [
  Number(percentageOfWorld1(populations[0]).toFixed(1)),
  Number(percentageOfWorld1(populations[1]).toFixed(1)),
  Number(percentageOfWorld1(populations[2]).toFixed(1)),
  Number(percentageOfWorld1(populations[3]).toFixed(1)),
];

console.log(percentages);
// [ 18.2, 2.7, 0.5, 0.4 ]

// LECTURE: Basic Array Operations (Methods)

// Create an array containing the neighbouring countries of a country of your choice. Store the array in a variable called neighbours.

const neighbours = ['Cuba', 'Romania', 'Philippines'];

// Add a new country called Utopia at the end of the array
neighbours.push('Utopia');
console.log(neighbours); // [ 'Cuba', 'Romania', 'Philippines', 'Utopia' ]

// Remove the new country
neighbours.pop();
console.log(neighbours); // [ 'Cuba', 'Romania', 'Philippines' ]

// if the array does not includes Germany, log to the console
if (!neighbours.includes('Germany')) {
  console.log('Probably not a central European country :D');
}
// 'Probably not a central European country :D'

// Change the name of the neighbouring countries.
neighbours[neighbours.indexOf('Romania')] = 'Sweden';
console.log(neighbours);
// [ 'Cuba', 'Sweden', 'Philippines' ]

// LECTURE: Introduction to Objects
// Create an object called myCountry

// const myCountry = {
//   country: 'United States',
//   capital: 'Washington',
//   language: 'english',
//   population: 38,
//   neighbours: ['Sweden', 'Romania'],
// };
// console.log(myCountry);

// // LECTURE: Dot vs. Bracket Notation

// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
// );
// // United States has 38 million english-speaking people, 2 neighbouring countries and a capital called Washington

// // Increase the country's population by 2 using dot notation
// myCountry.population += 2;
// console.log(myCountry.population);

// // Decrease the country's population by 2 using bracket notation
// myCountry['population'] -= 2;
// console.log(myCountry.population);

// LECTURE: Object Methods
// Add a method called describe to the myCountry object.
const myCountry = {
  country: 'United States',
  capital: 'Washington',
  language: 'english',
  population: 38,
  neighbours: ['Sweden', 'Romania'],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
    // OR
    // this.isIsland = !Boolean(this.neighbours.length);
  },
};

myCountry.describe();
// United States has 38 million english-speaking people, 2 neighbouring countries and a capital called Washington.
myCountry.checkIsland();
console.log(myCountry);

// LECTURE: Iteration: The for Loop
// Exercise 1

for (let voters = 1; voters <= 50; voters++) {
  console.log(`Voter number ${voters} is currently voting`);
}

// LECTURE: Looping Arrays, Breaking and Continuing

const populations1 = [1441, 211, 38, 33];

let percentages2 = [];

for (let i = 0; i < populations1.length; i++) {
  let percentage = Number(percentageOfWorld1(populations1[i]).toFixed(1));
  percentages2.push(percentage);
}
console.log(percentages2);
// [ 18.2, 2.7, 0.5, 0.4 ]

// LECTURE: Looping Backwards and Loops in Loops
const listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia'],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbours: ${listOfNeighbours[i][j]}`);
  }
}

// LECTURE: The while Loop
// Recreate the above with a while loop

const populations2 = [1441, 211, 38, 33];

let percentages3 = [];

let i = 0;
while (i < populations2.length) {
  percentage = Number(percentageOfWorld1(populations2[i]).toFixed(1));
  percentages3.push(percentage);
  i++;
}
console.log(percentages3);
// [ 18.2, 2.7, 0.5, 0.4 ]
