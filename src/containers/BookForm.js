import React from 'react';
import { connect } from 'react-redux';
import { addBook } from '../actions';

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

class BookForm extends React.Component {
  state = {
    title: '',
    category: '',
  }

  submitBook = () => {
    const book = { title: 'hello' };
    this.props.addBook(book);
  }

  handleChange = (event) => {
    console.log(event.target.constructor);
    this.setState({ title: event.target.value });
  }

  render() {
    return (
      <div>
        <input value={this.state.title} onChange={this.handleChange} />
        <input value={this.state.category} onChange={this.handleChange} />
        <button onClick={this.submitBook}>Add Book</button>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return { addBook };
}

export default connect(mapDispatchToProps)(BookForm);
