/* Loop over the game.scored array anf print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowshi")
2. Use a loop to calculate the average odd and log it to the console 
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
 Odd of victory Bayern Munich: 1.33
 Odd of draw: 3.25
 Odd of victory Barrussia Dortmund: 6.5
Get the team names directory from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the games objects have the same property names

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
     {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
     }
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Barrussia Dortmund',
  players: [
    [
      'Neuwe',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kinnish',
      'Goretzka',
      'Conan',
      'Nuller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakini',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:8',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Loop over the game.scored array anf print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowshi")

const players = game.scored;
for (const [i, player] of players.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}
/*
Goal 1: Lewandowski
Goal 2: Gnarby
Goal 3: Lewandowski
Goal 4: Hummels
*/

// Use a loop to calculate the average odd and log it to the console
// MY SOLUTION:
// const odds = Object.values(game.odds);
// let sum = 0;
// for (let odd of odds) {
//     sum += odd;
// }
// const oddsAverage = sum / odds.length;
// console.log(oddsAverage);

// JONAS SOLUTION:
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
  average += odd;
}
average /= odds.length;
console.log(average);
// 3.6933333333333334

/* Print the 3 odds to the console, but in a nice formatted way, exactly like this:
 Odd of victory Bayern Munich: 1.33
 Odd of draw: 3.25
 Odd of victory Barrussia Dortmund: 6.5 */

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

/*
BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
     {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
     }
*/
// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
// { Lewandowski: 2, Gnarby: 1, Hummels: 1 }

const mostOccuringChar = str => {
  const strEntries = {};
  for (const char of str) {
    strEntries[char] ? strEntries[char]++ : (strEntries[char] = 1);
  }

  let maxEntries = 0;
  let mostOccuringLetter = '';
  for (const char in strEntries) {
    if (strEntries[char] > maxEntries) {
      maxEntries = strEntries[char];
      mostOccuringLetter = char;
    }
  }

  return mostOccuringLetter;
};
const result = mostOccuringChar('peerpetual');

console.log(result);
