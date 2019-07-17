import React from 'react';
import BookList from '../containers/BookList';
import BookForm from '../containers/BookForm';
import Navbar from './Navbar';

const App = () => (
  <div>
    <Navbar />
    <BookList />
    <BookForm />
  </div>
);

export default App;
