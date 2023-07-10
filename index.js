class thisBook {
    constructor() {
      if (localStorage.getItem('Added books') === null) {
        localStorage.setItem('Added books', JSON.stringify([]));
      }
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
      storedBooks.push(newBook);
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
      const bookListHTML = books.map((book) => {
        return `
        <div class= "booklist">
        <p>"${book.title}" by "${book.author}"</p>
        <button onClick="thisBook.removeBook(${books.indexOf(book)})">Remove</button>
        </div>
        `;
      }).join('');
      return bookListHTML;
    }
  
    displayBooks() {
      const listOfBooks = document.querySelector('.container');
      const storedBooks = this.getStoredBooks();
      const bookListHTML = this.createBookListHTML(storedBooks);
      listOfBooks.innerHTML = bookListHTML;
    }
  }
  
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    const title = document.querySelector('.title');
    const author = document.querySelector('.author');
    e.preventDefault();
    thisBook.addNewBook(title.value, author.value);
  });
  
  thisBook.displayBooks();
  
  const date = new Date();
  document.getElementById('time').innerHTML = date;
  
  const pages = document.querySelectorAll('.nav-link');
  const booklist = document.querySelector('.book-section');
  const formSection = document.querySelector('.form-section');
  const contactSection = document.querySelector('.contact-container');
  const removeForm = document.querySelector('.kform');
  const heading = document.querySelector('.heading');
  
  formSection.classList.add('active');
  booklist.classList.add('non-active');
  contactSection.classList.add('non-active');
  removeForm.classList.add('non-active');
  
  pages.forEach((page) => {
    page.addEventListener('click', (e) => {
      booklist.classList.remove('active');
      formSection.classList.remove('active');
      contactSection.classList.remove('active');
      removeForm.classList.remove('active');
  
      if (e.target.classList.contains('booklist-2')) {
        booklist.classList.add('active');
        formSection.classList.remove('active');
        removeForm.classList.add('non-active');
      } else if (e.target.classList.contains('form-section')) {
        formSection.classList.add('active');
        booklist.classList.add('non-active');
        contactSection.classList.add('non-active');
        removeForm.classList.add('active');
        heading.classList.add('non-active');
      } else if (e.target.classList.contains('contact-section')) {
        contactSection.classList.add('active');
        booklist.classList.add('non-active');
        formSection.classList.add('non-active');
        removeForm.classList.add('non-active');
        heading.classList.add('non-active');
      }
    });
  });
  