export const addBook = book => (dispatch) => {
  dispatch({ type: 'ADD_BOOK', book })
}
