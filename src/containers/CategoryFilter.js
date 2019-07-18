import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filters } from '../constants';
import { changeFilter } from '../actions';

const CategoryFilter = ({ current, changeFilter }) => (
  <select value={current} onChange={event => changeFilter(event.target.value)}>
    {filters.map(filter => <option key={filter} value={filter}>{filter}</option>)}
  </select>
);

CategoryFilter.propTypes = {
  current: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ current: state.filter });

export default connect(mapStateToProps, { changeFilter })(CategoryFilter);
