class thisBook {
  constructor() {
    const storedBooks = this.getStoredBooks();
  }

  getStoredBooks() {
    return JSON.parse(localStorage.getItem('Added books'));
  }

  updateStoredBooks(books) {
    localStorage.setItem('Added books', JSON.stringify(books));
  }
  
  addNewBook(bookTitle, bookAuthor) {
    const storedBooks = this.getStoredBooks();
    const newBook = {
      title: bookTitle,
      author: bookAuthor,
    };
    storedBooks = storedBooks.concat(newBook);
    this.updateStoredBooks(storedBooks);
    this.displayBooks();
  }
  
  removeBook(i) {
    const storedBooks = this.getStoredBooks();
    storedBooks.splice(i, 1);
    this.updateStoredBooks(storedBooks);
    this.displayBooks();
  }

  createBookListHTML(books) {
    const bookListHTML = books
      .map((book) => {
        return `
        <div class= "booklist">
        <p>"${book.title}" by "${book.author}"</p>
        <button onClick="thisBook.removeBook(${books.indexOf(book)})">Remove</button>
        </div>
        `;
      })
      .join('');
    return bookListHTML;
  }

  displayBooks() {
    const listOfBooks = document.querySelector('.container');
    const storedBooks = this.getStoredBooks();
    const bookListHTML = this.createBookListHTML(storedBooks);
    listOfBooks.innerHTML = bookListHTML;
  }
}

export default thisBook;
