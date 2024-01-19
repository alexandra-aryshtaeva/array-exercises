const books = [
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
    genre: "Fiction",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Fiction",
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: "Dystopian Fiction",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Classic",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    genre: "Fantasy",
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    year: 1932,
    genre: "Dystopian Fiction",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    genre: "Classic",
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    year: 1979,
    genre: "Science Fiction",
  },
];

// 1. filter out books that were published before 1960 and belong to the "Fiction" genre

const someBooks = books.filter((book) => {
  return book.year <= 1960 && book.genre === "Fiction";
});

// console.log(someBooks);

const countries = [
  "Argentina",
  "Brazil",
  "Canada",
  "Denmark",
  "Egypt",
  "France",
  "Germany",
  "India",
  "Japan",
  "Kenya",
  "Mexico",
  "Netherlands",
  "Oman",
  "Peru",
  "Qatar",
  "Russia",
  "Spain",
  "Thailand",
  "Ukraine",
  "Vietnam",
];

// 2. filter countries that dont have the lettter p

// const countriesWithoutP = countries.filter((c) => {
//   const includingCOuntry = c.includes("p");
//   return !includingCOuntry;
// });

// console.log(countriesWithoutP);

// 3. filter countries with a substring inside the input

const finalCountry = filterCountries("an");

function filterCountries(letters) {
  return countries.filter((country) => {
    country = country.toLowerCase();
    return country.includes(letters);
  });
}

// console.log(finalCountry);

// 4. Filter by Index:
// Write a function that uses the filter method to return an array containing only elements at specified indices.

// const indexList = chooseIndex(0);

// function chooseIndex(number) {
//   return countries.findIndex((i) => {
//     return number === i;
//   });
// }
// console.log(indexList);

const findCountry = countries.filter((index) => {
    return index > 5;) (
});

console.log(findCountry);
