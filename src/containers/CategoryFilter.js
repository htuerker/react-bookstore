import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { filters } from '../constants';
import { filterActions } from '../actions';

const CategoryFilter = ({ current, changeFilter }) => (
  <div>
    <span>Category Filter: </span>
    <select value={current} onChange={event => changeFilter(event.target.value)}>
      {filters.map(filter => <option key={filter} value={filter}>{filter}</option>)}
    </select>
  </div>
);

CategoryFilter.propTypes = {
  current: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ current: state.filter });
const mapDispatchToProps = { changeFilter: filterActions.changeFilter }

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter);
