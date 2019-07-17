const mock = [
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
    title: 'Turkish History',
    category: 'History',
  },
  {
    id: 4,
    title: 'The Pink Chicken',
    category: 'Kids',
  },
  {
    id: 5,
    title: 'Napoleon',
    category: 'History',
  },
];

export default (state = mock, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.book];
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
}
