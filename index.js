// Initialize an empty array to store the library of books
let myLibrary = [];

// Constructor function for creating Book objects
function Book(title, author, pages, read = false) {
  // Assign the values to the object properties
  this.name = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  // Method to return a string with book information based on read status
  this.info = function() {
    if (read == true) {
      return `${title} by ${author}, ${pages}, Read`;
    } else {
      return `${title} by ${author}, ${pages}, not read yet`;
    }
  };
}

// Function to display book information in an alert box
const showInfo = function(book) {
  alert(book.info());
};

// Function to remove a book from the library
const remove = function(book) {
  // Filter the book out of the myLibrary array
  myLibrary = myLibrary.filter(function(value) {
    return value !== book;
  });

  // Log the updated library to the console and re-display the books
  console.log(myLibrary);
  DisplayBooks(myLibrary);
};

// Function to toggle the read status of a book
const toggleRead = function(book) {
  // Remove the book from the library
  myLibrary = myLibrary.filter(function(value) {
    return value !== book;
  });

  // Toggle the 'read' property of the book
  if (book.read == true) {
    book.read = false;
  } else {
    book.read = true;
  }

  // Add the updated book back to the library
  myLibrary.push(book);

  // Log the updated library to the console and re-display the books
  console.log(myLibrary);
  DisplayBooks(myLibrary);
};

// Function to add a new book to the library
function addBookToLibrary() {
  // Get values from the form fields
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const checked = document.getElementById("read").checked; // Check if the 'read' checkbox is checked

  // Create a new book object and add it to the library
  let book = new Book(title, author, pages, checked);
  myLibrary.push(book);

  // Display the updated library
  DisplayBooks(myLibrary);
}

// Function to display the books in the library on the webpage
const DisplayBooks = function(library) {
  // Get the element where the books will be displayed
  const libraryCard = document.getElementById("library");
  libraryCard.innerHTML = ''; // Clear the previous content

  // Loop through the library and create elements for each book
  for (let i = 0; i < library.length; i++) {
    // Create a paragraph element for the book title
    let item = document.createElement('p');
    item.textContent = library[i].name;

    // Create buttons for book info, remove, and toggle read
    const infoButton = document.createElement('button');
    infoButton.onclick = function(event) { showInfo(library[i]); }; // Show book info when clicked
    infoButton.innerHTML = 'show info';

    const removeButton = document.createElement('button');
    removeButton.onclick = function(event) { remove(library[i]); }; // Remove the book when clicked
    removeButton.innerHTML = 'remove';

    const readButton = document.createElement('button');
    readButton.onclick = function(event) { toggleRead(library[i]); }; // Toggle the read status when clicked
    readButton.innerHTML = 'toggle read';

    // Append the book title and buttons to the library display
    libraryCard.appendChild(item);
    libraryCard.appendChild(infoButton);
    libraryCard.appendChild(removeButton);
    libraryCard.appendChild(readButton);
  }
};
