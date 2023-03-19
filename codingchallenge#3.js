// MY SOLUTION TO CHALLENGE 3

/* Create an object with properties of Mark and John for their full name, mass
and height */

const markDetails = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return (this.BMI = this.mass / this.height ** 2);
  },
};

const johnDetails = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return (this.BMI = this.mass / this.height ** 2);
  },
};

markDetails.calcBMI();
johnDetails.calcBMI();
console.log(markDetails, johnDetails);

// Log to the console who has the higher BMI
if (markDetails.BMI > johnDetails.BMI) {
  console.log(
    `${markDetails.fullName}'s BMI (${markDetails.BMI}) is higher than John's (${johnDetails.BMI})`
  );
} else if (johnDetails.BMI > markDetails.BMI) {
  console.log(
    `${johnDetails.fullName}'s BMI (${markDetails.BMI}) is higher than Mark's (${johnDetails.BMI})`
  );
}
