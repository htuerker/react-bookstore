import React from 'react';

const styles = {
  nav: {
    backgroundColor: 'red',
  }
  
}

const Navbar = () => (
  <div style={styles.nav}>
    <div>
      <h1 className='logo'>BookStore CMS</h1>
      <p className='mock-link-1'>Books</p>
      <p className='mock-link-2'>Categories</p>
    </div>
    <div>
      <p className='mock-link-3'>User</p>
    </div>
  </div>
);

export default Navbar;
