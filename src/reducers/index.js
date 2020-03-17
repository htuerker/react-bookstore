import { combineReducers } from 'redux';
import bookReducer from './book.reducer';
import filterReducer from './filter.reducer';

export default combineReducers({ books: bookReducer, filter: filterReducer });
