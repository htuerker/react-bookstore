import React from 'react';
import Navbar from '../components/Navbar';
import BookForm from '../containers/BookForm';
import BookList from '../containers/BookList';
import { authService } from '../services';

const HomePage = ({ history }) => {
  const handleLogout = (event) => {
    event.preventDefault();
    authService.logout();
    history.push('/');
  };

  return (
    <div>
      <Navbar handleLogout={handleLogout} />
      <div className="container">
        <BookList />
        <BookForm />
      </div>
    </div>
  );
};

export default HomePage;
