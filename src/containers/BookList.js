import React from 'react';
import Book from '../components/Book';

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

const BookList = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>TITLE</th>
        </tr>
      </thead>
      <tbody>
        { books.map((book) =>
          <Book id={book.id} title={book.title} />
        )}
      </tbody>
    </table>
  )
}

export default BookList;
