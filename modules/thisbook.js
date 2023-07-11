/* eslint arrow-body-style: ["error", "always"] */
class thisBook {
  constructor() {
    this.storedBooks = this.getStoredBooks();
  }

  getStoredBooks = () => {
    return JSON.parse(localStorage.getItem('Addedbooks')) || [];
  }

  updateStoredBooks = (books) => {
    localStorage.setItem('Addedbooks', JSON.stringify(books));
  }

  addNewBook = (bookTitle, bookAuthor) => {
    const bookStore = JSON.parse(localStorage.getItem('Addedbooks')) || [];
    const newBook = { title: bookTitle, author: bookAuthor };
    bookStore.push(newBook);
    this.updateStoredBooks(bookStore);
    this.displayBooks();
  }

  removeBook = (i) => {
    this.storedBooks.splice(i, 1);
    this.updateStoredBooks(this.storedBooks);
    this.displayBooks();
  }

  createBookListHTML = (books) => {
    let bookListHTML = '';
    for (let i = 0; i < books.length; i += 1) {
      const { title, author } = books[i];
      bookListHTML += `
      <div class= "booklist">
      <p>"${title}" by "${author}"</p>
      <button class="remove-button" data-index="${i}">Remove</button>
      </div>
      `;
    }
    return bookListHTML;
  };

  displayBooks = () => {
    const listOfBooks = document.querySelector('.container');
    const storedBooks = this.getStoredBooks();
    const bookListHTML = this.createBookListHTML(storedBooks);
    listOfBooks.innerHTML = `
      <ul class="book-ul">${bookListHTML}</ul>
    `;

    const removeButtons = document.querySelectorAll('.remove-button');
    removeButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const index = parseInt(button.dataset.index, 10);
        this.removeBook(index);
      });
    });
  };
}

export default thisBook;