import { showBookList, addBook } from './modules/book.js';

const bookForm = document.querySelector('#bookForm');
const bookList = document.querySelector('#bookList');
let books;

if (localStorage.getItem('books') !== null) {
  books = JSON.parse(localStorage.getItem('books'));
} else {
  books = [];
}

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = bookForm.title.value;
  const author = bookForm.author.value;
  if (title !== '' && author !== '') {
    addBook(bookForm, books, bookList);
  }
});

showBookList(books, bookList);

// version 3
const listLink = document.querySelector('#list');
const addLink = document.querySelector('#add');
const contactLink = document.querySelector('#contact');
const bookListComponent = document.querySelector('#bookListComponent');
const addBookComponent = document.querySelector('#addBookComponent');
const contactComponent = document.querySelector('#contactComponent');

const hide = (element, link) => {
  element.classList.remove('display-block');
  element.classList.add('display-none');
  link.classList.remove('active');
};

const show = (element, link) => {
  element.classList.remove('display-none');
  element.classList.add('display-block');
  link.classList.add('active');
};

[listLink, addLink, contactLink].forEach((l) => {
  l.addEventListener('click', () => {
    if (l.id === 'list') {
      show(bookListComponent, listLink);
      hide(addBookComponent, addLink);
      hide(contactComponent, contactLink);
    } else if (l.id === 'add') {
      show(addBookComponent, addLink);
      hide(bookListComponent, listLink);
      hide(contactComponent, contactLink);
    } else {
      show(contactComponent, contactLink);
      hide(addBookComponent, addLink);
      hide(bookListComponent, listLink);
    }
  });
});
