









import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
      <img src="logo.jpg" alt="Logo" className="logo" />
        {/*  i don't know but logo is not showing*/}
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">Gallery</a></li>
        <li><a href="/services">Blogs</a></li>
        <li><a href="/contact">Activities</a></li>
        <li><a href="/contact">About</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
