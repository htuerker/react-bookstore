const books = [
  {
    id: 1,
    title: 'El Zorro Fuerte',
    category: 'Action',
  },
  {
    id: 2,
    title: 'Stephen King Book',
    category: 'Horror',
  },
  {
    id: 3,
    title: 'Turkish history for dummies',
    category: 'History',
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
