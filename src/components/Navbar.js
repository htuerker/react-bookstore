import React from 'react';

const Navbar = ({ handleLogout }) => (
  <div className="nav">
    <div className="container">
      <div>
        <h1 className="logo">Bookstore CMS</h1>
        <p className="mock-link">BOOKS</p>
        <p className="mock-link">CATEGORIES</p>
        <p className="mock-link" onClick={e => handleLogout(e)}>LOGOUT</p>
      </div>
      <div>
        <img
          className="avatar"
          src="https://img.icons8.com/material/4ac144/256/user-male.png"
          alt=""
        />
      </div>
    </div>
  </div>
);

export default Navbar;
