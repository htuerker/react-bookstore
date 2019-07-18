import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Book = ({ id, title, category, percentage = 0, removeBook }) => (
  <tr className="book">
    <td className="left">
      <p className="category">{category}</p>
      <p className="title">{title}</p>
      <p className="author">Author</p>
      <div>
        <p>Comments</p>
        <p onClick={() => removeBook(id)}>Remove</p>
        <p>Edit</p>
      </div>
    </td>
    <td className="right">
      <div>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </div>
      <div>
        <p>CURRENT CHAPTER</p>
        <p>Chapter Name</p>
        <p className="btn">UPDATE PROGRESS</p>
      </div>
    </td>
  </tr>
);

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
