// Sample array of book objects
const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Animal Farm", author: "George Orwell" },
];

// Function to get titles of books by a specific author
function getBooksByAuthor(authorName) {
  // Filter the books array to get books by the specified author
  const filteredBooks = books.filter((book) => book.author === authorName);

  // Map the filtered books to get only the titles
  const titles = filteredBooks.map((book) => book.title);

  return titles;
}

// Test the function
const orwellBooks = getBooksByAuthor("George Orwell");
console.log(orwellBooks); // Expected output: ["1984", "Animal Farm"]
