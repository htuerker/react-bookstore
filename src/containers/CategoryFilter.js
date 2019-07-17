import React from 'react';
import { connect } from 'react-redux';
import { categories } from '../constants';
import { changeFilter } from '../actions';

const CategoryFilter = ({ current, changeFilter }) => (
  <select value={current} onChange={changeFilter}>
    <option value='All' disabled>All</option>
    {categories.map((category) => <option key={category} value={category}>{category}</option>)}
  </select>
)

const mapStateToProps = (state) => ({ current: state.filter});

const mapDispatchToProps = (dispatch) => ({ changeFilter: (filter) => dispatch(changeFilter(filter)) });

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter);
