export const addBook = book => {
  return {
    type: 'ADD_BOOK',
    book
  }
}

export const removeBook = id => {
  return {
    type: 'REMOVE_BOOK',
    id
  }
}
