const login = (username, password) => {
  const user = { username, password }
  localStorage.setItem('user', JSON.stringify(user));
  return user;
};

const logout = () => {
  localStorage.removeItem('user');
};

export default { login, logout };
