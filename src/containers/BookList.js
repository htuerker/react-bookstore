import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';
import CategoryFilter from './CategoryFilter';
import { getBooks, removeBook } from '../actions';

const BookList = ({ books, removeBook }) => (
  <div>
    <CategoryFilter />
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>TITLE</th>
          <th>CATEGORY</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
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

const mapStateToProps = (state) => ({ books: getBooks(state.books, state.filter) });

export default connect(mapStateToProps, { removeBook })(BookList);
