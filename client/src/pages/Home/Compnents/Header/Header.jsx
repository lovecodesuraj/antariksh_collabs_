import React from "react";
import logo from './Antariksh_logo.png';
import './Header.css';


const Header = () => {
    return ( 
        <div className="header">
        <img src={logo} alt="Antariksh logo" className="logo" />
        
        <nav className='navbar'>
            <ul className='menu'>
              <li className='page' title='Home' id='home'>Earth Station</li>
              <li className='page' title='Gallery'>Cosmic Captures</li>
              <li className='page' title='Blogs'>Blogs</li>
              <li className='page' title='Activities'>Activities</li>
              <li className='page' title='About'>About</li>
            </ul>
        </nav>
      </div> 
     );
}
 
export default Header;





