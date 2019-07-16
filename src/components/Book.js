import React from 'react';

const Book = ({id, title}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
    </tr>
  )
}

export default Book;
