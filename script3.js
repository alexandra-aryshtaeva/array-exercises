const randomWords = [
  "apple",
  "banana",
  "level",
  "orange",
  "madam",
  "kiwi",
  "civic",
  "grape",
  "radar",
  "strawberry",
  "noon",
  "watermelon",
  "deed",
  "mango",
  "rotor",
];

// 1.Filter Palindromes:
// Write a function that uses the filter method to return an array of words from an array of strings, keeping only those that are palindromes.

// const wordTest = isPalindrome();

// function isPalindrome() {
//   return randomWords.filter((e) => {
//     if
//   });
// }

// console.log(wordTest);

const people = [
  { name: "John", age: 25, city: "New York" },

  { name: "Alice", age: 30, city: "San Francisco" },
  { name: "Bob", age: 28, city: "Los Angeles" },
  { name: "Eve", age: 22, city: "Chicago" },
  { name: "Charlie", age: 35, city: "Seattle" },
];

const names = pickName();

function pickName() {
  return people.map((person) => {
    return person.name;
  });
}

console.log(names);
