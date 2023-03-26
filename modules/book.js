const showBookList = (books, bookList) => {
  bookList.innerHTML = '';

  books.forEach((b, index) => {
    bookList.innerHTML += `
        <tr class="p-2 align-middle">
          <td>"${b.title}" by ${b.author}</td>
          <td><button class="btn btn-danger float float-end" type="button" id="remove${index}">Remove</button></td>
        </tr>
    `;
  });

  books.forEach((b, index) => {
    document.getElementById(`remove${index}`).addEventListener('click', () => {
      books.splice(index, 1);
      localStorage.setItem('books', JSON.stringify(books));
      showBookList(books, bookList);
    });
  });
};

const addBook = (bookForm, books, bookList) => {
  books.push({ title: bookForm.title.value, author: bookForm.author.value });
  localStorage.setItem('books', JSON.stringify(books));
  bookForm.reset();
  showBookList(books, bookList);
};

export { showBookList, addBook };
