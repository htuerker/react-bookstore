import React from 'react';
import BookList from './BookList';
import BookForm from './BookForm';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BookList />
        <BookForm />
      </div>
    )
  }
}
