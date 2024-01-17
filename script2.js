const stringArray = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
  "honeydew",
  "kiwi",
  "lemon",
  "mango",
  "nectarine",
  "orange",
  "peach",
  "quince",
  "raspberry",
  "strawberry",
  "tangerine",
  "umeboshi",
  "vanilla",
  "watermelon",
  "xigua",
  "zucchini",
];

// 1. Words with Length:
// Write a function that uses the filter method to return an array of words from an array of strings, keeping only those with a specified length. Example: 5

const stringLenghth = filterLength(10);

function filterLength(number) {
  return stringArray.filter((e) => {
    return e.length === number;
  });
}

console.log(stringLenghth);

const newStringArray = [
  "apple",
  "banana",
  "avocado",
  "blueberry",
  "beet",
  "cherry",
  "carrot",
  "date",
  "dragonfruit",
  "fig",
  "grape",
  "guava",
  "kiwi",
  "kale",
  "lemon",
  "mango",
  "nectarine",
  "orange",
  "olive",
  "pear",
  "quince",
  "raspberry",
  "strawberry",
  "spinach",
  "tomato",
  "watermelon",
  "walnut",
  "xigua",
  "yellow pepper",
  "zucchini",
];

// 2.Words that Start with a Letter:
// Write a function that uses the filter method to return an array of words from an array of strings, keeping only those that start with a specified letter. Example b

const startString = filterLetter("b");

function filterLetter(string) {
  return newStringArray.filter((e) => {
    return e.charAt(0) === string;
  });
}

//console.log(startString);

const mixedArray = [
  "apple",
  42,
  true,
  "blueberry",
  false,
  "cherry",
  7,
  "date",
  "dragonfruit",
  0,
  "grape",
  "guava",
  99,
  "kale",
  "lemon",
  "mango",
  false,
  "orange",
  "olive",
  true,
  "quince",
  "raspberry",
  "strawberry",
  123,
  "tomato",
  "watermelon",
  "walnut",
  "xigua",
  "yellow pepper",
  "zucchini",
];

// 3.Filter by Type:
//Write a function that uses the filter method to return an array containing only elements of a specified type (e.g., string, number) from a mixed-type array. Ex: string

const stringType = filterType("boolean");

function filterType(type) {
  return mixedArray.filter((e) => {
    return typeof e === type;
  });
}

//console.log(stringType);
//
const duplicates = [
  3,
  7,
  2,
  8,
  3,
  "apple",
  "banana",
  "orange",
  "banana",
  "kiwi",
  4,
  1,
  "true",
  "apple",
  "mango",
  "cherry",
  5,
  2,
  "cherry",
  "grape",
];

// 4.Filter Unique Elements:
// Write a function that uses the filter method to return an array containing only unique elements from an array (remove duplicates).

const uniques = duplicates.filter(filterDuplicates);

function filterDuplicates(element, index, array) {
  const foundIndex = array.findIndex((x) => x === element);
  // findIndex(3 === 3)
  if (index === foundIndex) {
    return true;
  }

  return false;
  // return element
}

// console.log(uniques);

//
const numbersArray = [
  4, 5, 23, 8, 14, 42, 17, 36, 9, 28, 10, 56, 3, 20, 7, 41, 12, 31, 25, 18, 49,
];

// 5. Filter by Range:
// Write a function that uses the filter method to return an array of numbers within a specified range.

const result = filterByRange(5, 9);

function filterByRange(start, end) {
  return numbersArray.filter((e) => {
    return e <= end && e >= start;
  });
}
//console.log(result);
