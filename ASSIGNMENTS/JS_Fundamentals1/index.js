// LECTURE: Values and Variables
// Declare variables country, continent and population
const country = 'Nigeria';

const continent = 'Africa';

let population = 211.4;

// Log their values to the console
console.log(country, continent, population); // Nigeria Africa 211.4

// LECTURE: Data Types
// Declare a variable called isIsland. The variable should be a Boolean value.
let isIsland = false;

// Declare a variable called language and don't assign it any value.
let language;

// Log the types of all variable to the console.
console.log(typeof isIsland); // boolean
console.log(typeof population); // number
console.log(typeof country); // string
console.log(typeof language); // undefined

// LECTURE: let, const and var
// set the value of language to the language spoken where you live.
language = 'mandarin';
console.log(language); // Yoruba

// LECTURE: Basic Operators

// If your country split in half, and each half would contain half the population,
// then how many people would live in each half?

let halfPopulation = population / 2;
console.log(halfPopulation); // 105.7

// increase the population of your country by 1 and log the result to the console.

population++;
console.log(population); // 212.4

// Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million
// people speak portuguese

// const description =
//   country +
//   ' is in ' +
//   continent +
//   ', and its ' +
//   population +
//   ' million people speak ' +
//   language;

// LECTURE: Strings and Template Literals
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description); // Nigeria is in Africa, and its 212.4 million people speak Yoruba

// LECTURE: Taking Decisions: if / else Statements
const avgPopulation = 33;

// if (population > avgPopulation) {
//   console.log(`${country}'s population is above average`);
// } else {
//   console.log(
//     `${country}'s population is ${avgPopulation - population} below average`
//   );
// }
// Nigeria's population is above average

// After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original
// population = 13;
// if (population > avgPopulation) {
//   console.log(`${country}'s population is above average`);
// } else {
//   console.log(
//     `${country}'s population is ${
//       avgPopulation - population
//     } million below average`
//   );
// }
// Nigeria's population is 20 million below average

population = 20;
// if (population > avgPopulation) {
//   console.log(`${country}'s population is above average`);
// } else {
//   console.log(
//     `${country}'s population is ${
//       avgPopulation - population
//     } million below average`
//   );
// }
// Nigeria's population is above average

// LECTURE: Type Conversion and Coercion

// Predict the result of these 5 operations without executing them:

console.log('9' - '5'); // Strings are converted to numbers using the subtract operator and precedence for subtraction is left to right. Hence I guess 4.

console.log('19' - '13' + '17'); // Strings are converted to numbers with subtraction and subtract operator takes precedence over add operator. Hence we get 6 from the first operator from left to right, then it is concatenated together with the number 17 as a string plus a number would return a string.
// Hence I guess 617

console.log('19' - '13' + 17); // Strings are converted to numbers with subtraction and subtract operator takes precedence over add operator. Hence I guess 23.

console.log('123' < 57); // Every other logical operator will convert string into number and hence I guess this will return false.

console.log(5 + 6 + '4' + 9 - 4 - 2); // I guess 144

// All my guesses were right apart from the last one which was `1143`. Learnt that I should calculate the subtraction since it takes precedence over addition, then add the rest starting left to right.

// LECTURE: Equality Operators: == vs. ===

// variable based on a prompt input called numNeighbours
// const numNeighbours = Number(
//   prompt('How many neighbour countries does your country have?')
// );

// if (numNeighbours === 1) {
//   console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//   console.log('More than 1 border');
// } else {
//   console.log('No borders');
// }

// Tested and verified
// After changing the equality to strict equality, 1 returns No borders

// But after converting the value to a number, it returned Only 1 border.

// === is preferred to == because of its strict equality. It ensures that we do not encounter errors in our code as both the datatype and the values are equal.

// LECTURE: Logical Operators

population = 40;
if (language === 'english' && population < 50 && !isIsland) {
  console.log(`You should live in ${country} 😊`);
} else {
  console.log(`${country} does not meet your criteria ☹`);
}
// Nigeria does not meet your criteria ☹
// You should live in Nigeria � After change the values

// LECTURE: The switch Statement

switch (language) {
  case 'chinese':
  case 'mandarin':
    {
      console.log('MOST number of native speakers!');
    }
    break;
  case 'spanish':
    {
      console.log('2nd place in number of native speakers');
    }
    break;
  case 'english':
    {
      console.log('3rd place');
    }
    break;
  case 'hindi':
    {
      console.log('Number 4');
    }
    break;
  case 'arabic': {
    console.log('5th most spoken language');
  }
  default: {
    console.log('Great language too :D');
  }
}

// LECTURE: The Conditional (Ternary) Operator

console.log(
  `${country}'s population is ${population > 33 ? 'above' : 'below'} average`
);
// Nigeria's population is above average
// ==========================================================================================================================================================================================
