const randomNumbers = [
  54, 23, 78, 91, 12, 45, 67, 8, 33, 55, 89, 2, 77, 36, 19, 60, 42, 5, 71, 94,
  26, 48, 14, 70, 3, 81, 17, 39, 62, 98,
];

// 1.Even Numbers:
// Write a function that uses the filter method to return an array of only the even numbers from an array of numbers.

const evenNumbers = randomNumbers.filter(filterEven);

function filterEven(num) {
  return num % 2 == 0;
}

// console.log(evenNumbers);

// 2.Odd Numbers:
// Write a function that uses the filter method to return an array of only the odd numbers from an array of numbers.

const oddNumbers = randomNumbers.filter(filterOdd);

function filterOdd(num) {
  return num % 2 !== 0;
}

// console.log(oddNumbers);

// 3.Positive Numbers:
// Write a function that uses the filter method to return an array of only the positive numbers from an array of numbers.

const positiveNumbers = randomNumbers.filter(filterPositive);

function filterPositive(num) {
  return num > 0;
}

// console.log(positiveNumbers);

// 4.Negative Numbers:
// Write a function that uses the filter method to return an array of only the negative numbers from an array of numbers.

const negativeNumbers = randomNumbers.filter(filterNegative);

function filterNegative(num) {
  return num < 0;
}
console.log(negativeNumbers);
