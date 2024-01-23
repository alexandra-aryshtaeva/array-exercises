// Exercise 1: Sum of Array Elements
// Write a function that calculates and returns the sum of all elements in an array.

const sumResult = sumNumbers(1, 5, "apple", "0", 6);

function sumNumbers(...value) {
  return value.reduce((sum, num) => {
    console.log(num);

    return sum + (num == "number");
  }, 0);
}
// console.log(sumResult);
