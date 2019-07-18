import React from 'react';
import BookList from '../containers/BookList';
import BookForm from '../containers/BookForm';
import Navbar from './Navbar';

const App = () => (
  <div>
    <Navbar />
    <div className='container'>
      <BookList />
      <BookForm />
    </div>
  </div>
);

export default App;
