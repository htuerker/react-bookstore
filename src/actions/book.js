import uuid from 'uuid';

const addBook = (book) => {
  book.id = uuid();
  return { type: 'ADD_BOOK', book };
};

const removeBook = id => ({ type: 'REMOVE_BOOK', id });

export default { addBook, removeBook };
