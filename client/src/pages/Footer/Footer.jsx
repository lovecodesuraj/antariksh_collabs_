import React from 'react'
import './Footer.css'
import Logo from '../../assets/antariksh-logo.png'
import Instagram from '../../assets/Instagram.svg'
import Twitter from '../../assets/Twitter.svg'
import LinkedIn from '../../assets/LinkedIn.svg'
import Email from '../../assets/Email.svg'

import { Link } from 'react-router-dom'
function Footer() {
    return (
        <div id="Footer">
            <div className="footer-main">
                <ul className="footer-row-cont">
                    <li>
                        <div className="footer-logo">
                            <a href="/" target="_blank"><img className="icon" src={Logo} alt=""/></a>
                        </div>
                        <div className="social-medias">
                            <div className="text">Social Media</div>
                            <div className="icons">
                                <a href="https://www.instagram.com/antariksh_nitkkr/" target="_blank"><img src={Instagram} alt=""/></a>
                                {/* <a href="https://twitter.com/antariksh_nitkkr" target="_blank"><img src={Twitter} alt=""/></a> */}
                                <a href="https://in.linkedin.com/antariksh_nitkkr" target="_blank"><img src={LinkedIn} alt=""/></a>
                                <a href="mailto:antariksh_nitkkr@gmail.com" target="_blank"><img src={Email} alt=""/></a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="links-heading">Club</div>
                        <ul>
                            <div className="footer-links"><a href="#About">About Us</a></div>
                            <div className="footer-links"><a href="#EventsPage">Our Events</a></div>
                            <div className="footer-links"><a href="#Members">Members</a></div>
                        </ul>
                    </li>
                    <li>
                        <div className="links-heading">Get Help</div>
                        <ul>
                            <div className="footer-links"><a href="#">FAQs</a></div>
                            <div className="footer-links"><a href="/">Antariksh</a></div>
                            <div className="footer-links"><a href="mailto:antariksh_nitkkr@gmail.com">Message</a></div>
                        </ul>
                    </li>
                    <li>
                        <div className="links-heading">Others</div>
                        <ul>
                            <div className="footer-links"><a href="#Gallery">Gallery</a></div>
                            <div className="footer-links"><a href="#">Affiliate Program</a></div>
                            <div className="footer-links"><a href="#">Support Details</a></div>
                        </ul>
                    </li>
                </ul>
            </div>
            <hr />
            <div className="footer-end">
                Made with ❤️ by Antariksh    
            </div>
        </div>
    )
}

export default Footer
