import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import CategoryFilter from './CategoryFilter';
import { removeBook } from '../actions';
import { getBooks } from '../reducers/book';

const BookList = ({ books, removeBook }) => (
  <div className='book-list'>
    <CategoryFilter />
    <table>
      <tbody>
        {books.map(book => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            category={book.category}
            removeBook={removeBook}
          />
        ))}
      </tbody>
    </table>
  </div>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })).isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ books: getBooks(state.books, state.filter) });

export default connect(mapStateToProps, { removeBook })(BookList);
