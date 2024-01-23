// Exercise 1: Sum of Array Elements
// Write a function that calculates and returns the sum of all elements in an array.

const sumResult = sumNumbers(1, 5, 4, 4, 6);

function sumNumbers(...value) {
  return value.reduce((sum, num) => {
    return sum + num;
  }, 0);
}

// const sumResult = sumNumbers(1, 5, "apple", "0", 6);

// function sumNumbers(...value) {
//   return value.reduce((sum, num) => {
//     console.log(num);

//     return sum + (num == "number");
//   }, 0);
// }

// console.log(sumResult);

// Exercise 2: Find Maximum Number
// Write a function that finds and returns the maximum number in an array.

const maximumNumber = findMaximumNumber(1, 5, 4, 4, 6);

function findMaximumNumber(...numbers) {
  return numbers.sort((numberA, numberB) => {
    return numberB - numberA;
  })[0];
}

// console.log(maximumNumber);

// Exercise 3: Reverse Array
// Write a function that reverses the order of elements in an array.

const fruits = ["apple", "banana", "cherry", "date"];
// const fruit = fruits.reverse();
// console.log(fruit);

const finalFruits = reverseFruit();

function reverseFruit() {
  let newFruits = [];
  for (let i = fruits.length - 1; i >= 0; i--) {
    newFruits.push(fruits[i]);
  }
  return newFruits;
}

// console.log(finalFruits);

const colors = ["red", "blue", "green", "red", "yellow", "red", "green"];

function countColors() {
  let count = 0;
  for (let i = 0; i <= colors.length - 1; i++) {
    console.log(i);
    return (count += count[i]);
  }
}

// Example usage:

// console.log(countColors("red")); // Output: 3
