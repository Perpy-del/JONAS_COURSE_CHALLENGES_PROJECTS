# JONAS FULL COURSE ON UDEMY

Creating a github page and storing most of the information I gained throughout the course especially the challenges and projects all in one place for review purposes.

## Coding Challenge #1

There are two gymnastics team, the Dolphins and the Koalas! Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team only wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

### Requirements

- Create an arrow function `calcAverage` to calculate the average of 3 scores.

- Use the function to calculate the average for both teams.

- Create a function `checkWinner` that takes the average score of each team as parameters (`avgDolphins` and `avgKoalas`), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas wim (30 vs. 13)".

- Use the `checkWinner` function to determine the winner for both DATA 1 and DATA 2.

- Ignore draws this time.

### Test Cases

- TEST DATA 1: Doliphins score 44, 23 and 71. Koalas score 65. 54 and 49.

- TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27.

### Solution to Coding Challenge #1

You can find the solution to this challenge [here](./codingchallenge%231.js).

## Coding Challenge #2

Steven is building his tip calculator, using this rule: Tip 15% of the bill value if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

### Requirements

- Write a function `calcTip` that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above. Use the function type you like the most. Test the function using a bill value of 100.

- And now let's use arrays! So create an array `bills` containing the test data below

- Create an array `tips` containing the tip value for each bill, calculated from the function you created before.

- BONUS: Create an array `total` containing the total values, so the bill + tip.

### Test Case

TEST DATA: 125, 555 and 44.

### Solution to Coding Challenge #2

You can find the solution to the challenge [here](./codingchallenge%232.js).

## Coding Challenge #3

Mark and John are comparing their BMIs! Let us use objects to implement the calculations. Note: BMI = mass /height \*_ 2 = mass / (height _ height). (mass is kg and height is in meters).

### Requirements

- For each of them, create an object with properties for their full name, mass, and height. (Mark Miller and John Smith)

- Create a `calcBMI` method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.

- Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)"

### Test Case

TEST DATA: Mark's weight is 78 kg and is 1.69 m tall. John weight is 92 kg and is 1.95 m tall.

### Solution to Coding Challenge #3

You can find the solution to the coding challenge [here](./codingchallenge%233.js).

## Coding Challenge #4

Improving the tip calculator created earlier using loops.

### Requirements

- Create an array `bills` containing all 10 test bill values.

- Create empty arrays for the tips and the totals (`tips` and `totals`).

- Use the `calcTip` function we wrote before (no need to repeat) to calculate tips and total calues (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations.

### Test Case

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52.

### BONUS:

Write a function `calcAverage` which takes an array called `arr` as an argument. This function calculates the average of all numbers in the given array.

### Solution to Coding Challenge #4

You can find the solution to the coding challenge [here](./codingchallenge%234.js).
