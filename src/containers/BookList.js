import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions';

const BookList = ({ books, removeBook }) => (
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
);

const mapStateToProps = (state) => ({ books: state.books });

export default connect(mapStateToProps, { removeBook })(BookList);
