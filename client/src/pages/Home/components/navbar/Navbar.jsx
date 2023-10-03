import React, { useEffect,useState } from 'react'
import { Link } from "react-scroll";
import "./styles.css";
import Antariksh_Logo from '../../../../assets/antariksh-logo.png'

const Navbar = () => {

    return (
        <div id="navbar">
            <div className="navbar-brand">
                <a href='/'>
                <img src={Antariksh_Logo} alt="Logo" className="logo" />
                </a>
            </div>
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
                    to="EventsPage" spy="true"
                    smooth={true} duration={200}
                    offset={-100}>
                    Events
                </Link>
                <Link
                    className="navbar_link"
                    activeClass="navbar_link_active"
                    to="Members" spy="true"
                    smooth={true} duration={200}
                    offset={-100}>
                    Members
                </Link>
                <Link
                    className="navbar_link"
                    activeClass="navbar_link_active"
                    to="gallery" spy="true"
                    smooth={true} duration={200}
                    offset={-100}>
                    Gallery
                </Link>
                <Link
                    className="navbar_link"
                    activeClass="navbar_link_active"
                    to="about" spy="true"
                    smooth={true} duration={200}
                    offset={-100}>
                    About
                </Link>
            </div>
        </div>
    )
}

export default Navbar