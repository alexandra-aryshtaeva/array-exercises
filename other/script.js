// Exercise 1: Sum of Array Elements
// Write a function that calculates and returns the sum of all elements in an array.

const sumResult = sumNumbers(1, 5, 4, 4, 6);

function sumNumbers(...value) {
  return value.reduce((sum, num) => {
    return sum + num;
  }, 0);
}
// console.log(sumResult);
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

const colors = ["red", "blue", "green", "red", "blue", "red", "green"];

const numberOfColors = countColors("red");

// function countColors(color) {
//   let count = 0;
//   if (color) {
//     return (count += 1);
//   } else {
//     return (count += 0);
//   }
// }

function countColors(color) {
  return colors.reduce((count, item) => {
    if (color === item) {
      count += 1;
    }

    return count;

    // console.log(item);
    // if (!total[item]) {
    //   total[item] = 0;
    // }
    // total[item]++;
    // return total;
  }, 0);
}
console.log(numberOfColors);
// console.log(numColors);
