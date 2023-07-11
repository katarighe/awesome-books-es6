class thisBook {
  constructor() {
    this.storedBooks = this.getStoredBooks();
  }

  getStoredBooks() {
    return JSON.parse(localStorage.getItem('Addedbooks')) || [];
  }

  updateStoredBooks(books) {
    localStorage.setItem('Addedbooks', JSON.stringify(books));
  }

  addNewBook(bookTitle, bookAuthor) {
    const bookStore = JSON.parse(localStorage.getItem('Addedbooks')) || [];
    const newBook = { title: bookTitle, author: bookAuthor };
    bookStore.push(newBook);
    this.updateStoredBooks(bookStore);
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