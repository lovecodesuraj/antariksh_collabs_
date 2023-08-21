import React, { useEffect } from 'react'
import { Link } from "react-scroll";
import "./styles.css";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate=useNavigate();
    useEffect(()=>{
        
    },[])
    return (
        <div id="navbar">
            <div id="navbar_nav_items">

                <Link
                    className="navbar_link"
                    activeClass="navbar_link_active"
                    to="home" spy="true"
                    smooth={true} duration={200}
                    offset={-100}
                    
                    >
                    Home
                </Link>
                <Link
                    className="navbar_link"
                    activeClass="navbar_link_active"
                    to="blogs" spy="true"
                    smooth={true} duration={200}
                    offset={-100}>
                    Blogs
                </Link>
                <Link
                    className="navbar_link"
                    activeClass="navbar_link_active"
                    to="gallery" spy="true"
                    smooth={true} duration={200}
                    offset={-100}>
                    Gallery
                </Link>
            </div>
        </div>
    )
}

export default Navbar