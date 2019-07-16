import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BookList = ({ books }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>TITLE</th>
        </tr>
      </thead>
        { console.log(books)}
      <tbody>
        { books.map((book) =>
          <Book id={book.id} title={book.title} />
        )}
      </tbody>
    </table>
  )
}

const mapStateToProps = (state) => {
  return { books: state.books }
}

export default connect(mapStateToProps)(BookList);
