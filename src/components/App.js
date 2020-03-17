import React from 'react';

import { Route, Router } from 'react-router-dom';
import { historyHelper } from '../helpers';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import PrivateRoute from './PrivateRoute';

const App = () => (
  <div>
    <Router history={historyHelper.history}>
      <div>
        <PrivateRoute exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
      </div>
    </Router>
  </div>
);

export default App;
