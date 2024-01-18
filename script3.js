const randomWords = [
  "apple",
  "banana",
  "Level",
  "orange",
  "madam",
  "kiwi",
  "Civic",
  "grape",
  "radar",
  "Strawberry",
  "noon",
  "Watermelon",
  "deed",
  "mango",
  "rotor",
];
// let i = newWord.length - 1; i > 0; i--

// 1.Filter Palindromes:
// Write a function that uses the filter method to return an array of words from an array of strings, keeping only those that are palindromes.

function isPalindrome(word) {
  let lowerCaseWord = word.toLowerCase();

  //new word its the reversed word which technaclly doesnt exists yet
  let newWord = "";
  // so we take the "old word" LowerCaseWord and we put it on loop
  // the loop satrts at the end of the word and finishes at the beggining
  // each cycle of the loop returns a letter[i] (index[i])
  //  and where the letters[i] will go?
  for (let i = lowerCaseWord.length - 1; i >= 0; i--) {
    // the letters are going to this new variable
    //ex: (mango) something like this is happening:
    //newWord += o
    //newWord += og
    //newWord += ogn
    //newWord += ogna
    //newWord += ognam

    newWord += lowerCaseWord[i];
  }
  // outside the loop this how we verify if its a palindrome,
  // the lowerCaseWord is the input that the user puts
  // the newWord is the reversed word
  //to be apalindrom the reversed word and the inputed word have to be the same
  return newWord === lowerCaseWord;
}

const wordTest = randomWords.filter(isPalindrome);

//console.log(wordTest);

//
const people = [
  { name: "John", age: 25, city: "New York" },

  { name: "Alice", age: 30, city: "San Francisco" },
  { name: "Bob", age: 28, city: "Los Angeles" },
  { name: "Eve", age: 22, city: "Chicago" },
  { name: "Charlie", age: 35, city: "Seattle" },
];

// If i just want the property i cant use filter to return the property it will only return objects

// const names = pickName("name");

// function pickName(property) {
//   return people.map((person) => {

//     if (property === "name") {
//       return person.name;
//     } else if (property === "age") {
//       return person.age;
//     } else if (property === "city") {
//       return person.city;
//     } else return false;
//   });
// }

const names = pickName("city");

function pickName(property) {
  return people.map((person) => {
    const newPerson = {};

    newPerson[property] = person[property];

    return newPerson;
  });
}

console.log(names);
