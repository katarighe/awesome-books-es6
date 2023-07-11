class thisBook {
  constructor() {
    this.storedBooks = this.getStoredBooks();
  }

  getStoredBooks() {
    return JSON.parse(localStorage.getItem('Added books'));
  }

  updateStoredBooks(books) {
    localStorage.setItem('Added books', JSON.stringify(books));
  }

  addNewBook(bookTitle, bookAuthor) {
    const newBook = { title: bookTitle, author: bookAuthor };
    this.storedBooks = [...this.storedBooks, newBook];
    this.updateStoredBooks(this.storedBooks);
    this.displayBooks();
  }

  removeBook(i) {
    this.storedBooks.splice(i, 1);
    this.updateStoredBooks(this.storedBooks);
    this.displayBooks();
  }

  createBookListHTML(books) {
    return books.map((book) => `
      <div class= "booklist">
        <p>"${book.title}" by "${book.author}"</p>
        <button onClick="thisBook.removeBook(${books.indexOf(book)})">Remove</button>
      </div>
    `).join('');
  }

  displayBooks() {
    const listOfBooks = document.querySelector('.container');
    const bookListHTML = this.createBookListHTML(this.storedBooks);
    listOfBooks.innerHTML = bookListHTML;
  }
}

export default thisBook;
