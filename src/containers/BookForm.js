import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { bookActions } from '../actions';
import { categories } from '../constants';

const BookForm = ({ addBook }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const submitBook = (event) => {
    event.preventDefault();
    addBook({ title, category });
    setTitle('');
    setCategory('');
  };
  return (
    <div className="book-form">
      <h1>ADD NEW BOOK</h1>
      <form onSubmit={e => submitBook(e)}>
        <input
          name="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Book title"
        />
        <select
          name="category"
          onChange={e => setCategory(e.target.value)}
          value={category}
        >
          <option value="" disabled>Category</option>
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <button type="submit" className="btn">ADD BOOK</button>
      </form>
    </div>
  );
};

BookForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

const mapStateToProps = null;
const mapDispatchToProps = { addBook: bookActions.addBook };

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);
