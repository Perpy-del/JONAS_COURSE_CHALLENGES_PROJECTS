// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the x days? Answer: index + 1

// 2? Breaking up into sub-problems
// - Transform array to string
// - Transform each element to string with C
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// -Log string to console

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

// Convert to the string format
console.log(`... ${data1[0]}C ... ${data1[1]}C ... ${data1[2]}C ... `);
// Logs ... 17C ... 21C ... 23C ... to the console.

// We need to write a function instead of the above because we might need it
// for large data sets. Creating a function makes it dynamic.

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}C in ${i + 1} days ... `;
  }
  console.log('...' + str);
};
printForecast(data1); // ...17C in 1 days ... 21C in 2 days ... 23C in 3 days ...
