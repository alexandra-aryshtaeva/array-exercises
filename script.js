const randomNumbers = [
  54, 23, 78, 91, 12, 45, 67, 8, 33, 55, 89, 2, 77, 36, 19, 60, 42, 5, 71, 94,
  26, 48, 14, 70, 3, 81, 17, 39, 62, 98,
];

//   Even Numbers:
// Write a function that uses the filter method to return an array of only the even numbers from an array of numbers.
randomNumbers.filter(filterEven);
function filterEven(num) {
  if (num / 2 === 0) {
    return;
  }
}
