import thisBook from './thisBook.js';

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  const title = document.querySelector('.title');
  const author = document.querySelector('.author');
  e.preventDefault();
  thisBook.addNewBook(title.value, author.value);
});

thisBook.displayBooks();

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
