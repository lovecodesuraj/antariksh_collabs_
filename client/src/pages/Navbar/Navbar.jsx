import React from 'react';
import './Navbar.css'; 
import Antariksh_Logo from '../../assets/antariksh-logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
      <img src={Antariksh_Logo} alt="Logo" className="logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="/blog">Blogs</a></li>
        <li><a href="/acitivities">Activities</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
