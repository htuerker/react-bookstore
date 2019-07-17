import uuid from 'uuid';

export const addBook = book => {
  book.id = uuid();
  return { type: 'ADD_BOOK', book };
};

export const removeBook = id => ({ type: 'REMOVE_BOOK', id });
