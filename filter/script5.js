// 1. Filter by Length:
// Write a function that uses the filter method to return an array of strings from an array of strings, keeping only those with a length greater than a specified value.
const words = [
  "apple",
  "banana",
  "cherry",
  "date",
  "kiwi",
  "lemon",
  "orange",
  "pear",
  "grape",
  "strawberry",
  "blueberry",
  "mango",
  "watermelon",
  "pineapple",
  "pomegranate",
  "dragonfruit",
  "raspberry",
  "blackberry",
  "peach",
  "plum",
  "fig",
  "avocado",
  "guava",
  "passion fruit",
  "lime",
  "coconut",
  "melon",
  "persimmon",
  "nectarine",
  "apricot",
  "papaya",
  "mulberry",
  "cranberry",
  "raspberry",
  "boysenberry",
  "elderberry",
  "gooseberry",
  "currant",
  "tomato",
  "carrot",
  "cucumber",
  "lettuce",
  "broccoli",
  "spinach",
  "kale",
  "bell pepper",
  "zucchini",
  "onion",
  "garlic",
];

const lengthOf = filterLength(9);

function filterLength(inputL) {
  return words.filter((e) => {
    return e.length > inputL;
  });
}

// console.log(lengthOf);

const bookings = [
  { guest: "Alice", checkIn: "2024-01-15" },
  { guest: "Bob", checkIn: "2024-01-16" },
  { guest: "Charlie", checkIn: "2024-01-18" },
  { guest: "David", checkIn: "2024-01-20" },
  //
  { guest: "Eva", checkIn: "2024-01-22" },
  { guest: "Frank", checkIn: "2024-01-25" },
  { guest: "Grace", checkIn: "2024-01-27" },
  { guest: "Hank", checkIn: "2024-01-30" },
  { guest: "Ivy", checkIn: "2024-02-01" },
  { guest: "Jack", checkIn: "2024-02-05" },
  { guest: "Kelly", checkIn: "2024-02-08" },
  { guest: "Liam", checkIn: "2024-02-10" },
  { guest: "Mia", checkIn: "2024-02-15" },
  { guest: "Nora", checkIn: "2024-02-18" },
  //
  { guest: "Oscar", checkIn: "2024-02-22" },
  { guest: "Penny", checkIn: "2024-02-25" },
  { guest: "Quinn", checkIn: "2024-03-02" },
  { guest: "Ryan", checkIn: "2024-03-05" },
  { guest: "Sofia", checkIn: "2024-03-08" },
  { guest: "Tom", checkIn: "2024-03-10" },
  { guest: "Ursula", checkIn: "2024-03-15" },
  { guest: "Vincent", checkIn: "2024-03-18" },
  { guest: "Wendy", checkIn: "2024-03-22" },
  { guest: "Xavier", checkIn: "2024-03-25" },
  { guest: "Yvonne", checkIn: "2024-03-28" },
  { guest: "Zane", checkIn: "2024-04-02" },
  { guest: "Aaron", checkIn: "2024-04-05" },
  { guest: "Bella", checkIn: "2024-04-08" },
  { guest: "Chris", checkIn: "2024-04-12" },
  { guest: "Diana", checkIn: "2024-04-15" },
];

// 2. Filter by Date Range:
// Write a function that uses the filter method to return an array of objects with a date property within a specified range.

const bookingDate = checkDate("2024-01-21", "2024-02-19");
function checkDate(date1, date2) {
  return bookings.filter((date) => {
    let convertedDate = new Date(date.checkIn);
    date1 = new Date(date1);
    date2 = new Date(date2);
    return convertedDate > date1 && convertedDate < date2;

    // return (
    //   new Date(date) > new Date(date1) && new Date(date1) < new Date(date2)
    // );
  });
}

console.log(bookingDate);

//console.log(bookings[0].checkIn);

const randomObjects = [
  [1, 2],
  ["apple", "banana", "cherry", "date"],
  [true, false, true, false, true, false],
  [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30, city: "New York" },
  ],
  ["red", "green", "blue"],
  [42, "hello", true, "world"],
  [8.7, 6.3, 9.1],
  [null, undefined, NaN],
  [
    [1, 2, 3],
    ["a", "b", "c", "d"],
  ],
  ["dog", "cat", "bird"],
  [100, "one hundred", { key: "value" }, [7, 14, 21, 28]],
  [true, "yes", false],
  ["sun", "moon", "stars", "planets"],
  [5, 10, 15, 20],
  ["water", "fire", "earth", "air", "spirit", "energy"],
  [
    { city: "New York", population: 8378394 },
    {
      city: "Tokyo",
      population: 37435191,
      attractions: ["Tokyo Tower", "Shibuya Crossing"],
    },
  ],
  ["JavaScript", "Python", "Java"],
  [true, true, true, true, true, true, true],
  [null, null, null, null],
];

const finalLength = filterArray(5);
function filterArray(myLength) {
  return randomObjects.filter((object) => {
    return object.length > myLength;
  });
}
// console.log(finalLength);
// console.log(randomObjects[6].length);
