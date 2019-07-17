import { mockBooks } from '../constants';

export default (state = mockBooks, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.book];
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
}
