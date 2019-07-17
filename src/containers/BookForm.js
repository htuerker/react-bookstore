import React from 'react';
import { connect } from 'react-redux';
import { addBook } from '../actions';
import { categories } from '../constants';

class BookForm extends React.Component {
  state = {
    title: '',
    category: '',
  }

  submitBook = (event) => {
    event.preventDefault();
    const book = this.state;
    this.props.addBook(book);
    this.setState({
      title: '',
    })
  }

  handleChange = (event) => {
    switch (event.target.tagName) {
      case 'INPUT':
      this.setState({ title: event.target.value });
      break;
      case 'SELECT':
      this.setState({ category: event.target.value });
      break;
      default:
    }
  }

  render() {
    return (
      <div>
        <input value={this.state.title} onChange={this.handleChange} />
        <select onChange={this.handleChange} value={this.state.category}>
          <option value='' disabled>Choose category</option>
          {categories.map((category) => <option key={category} value={category}>{category}</option>)}
        </select>
        <button onClick={this.submitBook}>Add Book</button>
      </div>
    );
  }
};

export default connect(null, { addBook })(BookForm);
