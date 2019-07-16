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
          <th>CATEGORY</th>
        </tr>
      </thead>
      <tbody>
        { books.map((book) =>
          <Book key={book.id} id={book.id} title={book.title} category={book.category} />
        )}
      </tbody>
    </table>
  )
}

const mapStateToProps = (state) => {
  return { books: state.books }
}

export default connect(mapStateToProps)(BookList);
