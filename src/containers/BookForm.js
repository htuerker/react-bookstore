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
      <div className='book-form'>
        <h1>ADD NEW BOOK</h1>
        <div>
          <input value={this.state.title} onChange={this.handleChange} placeholder='Book title' />
          <select onChange={this.handleChange} value={this.state.category} >
            <option value='' disabled>Category</option>
            {categories.map((category) => <option key={category} value={category}>{category}</option>)}
          </select>
          <div className='btn' onClick={this.submitBook}>ADD BOOK</div>
        </div>
        </div>
    );
  }
};

export default connect(null, { addBook })(BookForm);
