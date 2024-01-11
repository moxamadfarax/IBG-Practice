// Using ES6 class syntax
class Book {
  // Constructor method to initialize properties
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  // Method to display book details
  displayDetails() {
    console.log(`"${this.title}" by ${this.author}, ${this.pages} pages.`);
  }

  // Method to check if the book has more than a certain number of pages
  isLengthy(minPages = 300) {
    return this.pages > minPages;
  }
}

// Usage:

// Creating a new book instance
const myBook = new Book("The Great Gatsby", "F. Scott Fitzgerald", 218);

// Displaying book details
myBook.displayDetails(); // Outputs: "The Great Gatsby" by F. Scott Fitzgerald, 218 pages.

// Checking if the book is lengthy
console.log(myBook.isLengthy()); // Outputs: false
console.log(myBook.isLengthy(200)); // Outputs: true

// Exporting the class
export default Book;
