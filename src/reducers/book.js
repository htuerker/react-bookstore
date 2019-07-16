const books = [
  {
    id: 1,
    title: 'book 1',
  },
  {
    id: 2,
    title: 'book 2',
  },
  {
    id: 3,
    title: 'book 3',
  }
];

let id = 4;

export default (state = books, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      const book = action.book;
      book.id = id++;
      return [...state, book];
    case 'REMOVE_BOOK':
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
}
