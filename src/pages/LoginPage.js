import React, { useState } from 'react';

import { authService } from '../services';

const LoginPage = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    authService.login(email, password);
    history.push('/');
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <label>
        Username or email:
        <input
          type="text"
          name="name"
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  );
};

export default LoginPage;
