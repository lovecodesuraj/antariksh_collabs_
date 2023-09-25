import React from 'react'
import './Home.css'
import Instagram from '../../assets/Instagram.svg'
import Email from '../../assets/Email.svg'

const Home = () => {
  const redirect = to => {
    // if(to === 'instagram')  window.location.href = 'https://www.instagram.com/antariksh_nitkkr'
    // else if(to === 'mail')  window.location.href = 'mailto:antarikshnitkkr@gmail.com'
  }
  return (
    <div id="home" className='Home page'>
      <h1 className='landing-heading'>Welcome to Discover The Cosmos</h1>
      <p className='landing-paragraph'>Unveil the wonders of the universe with our website. Delve into the mysteries of celestial phenomena, explore the intricacies of distant galaxies, and witness the awe-inspiring beauty of our cosmos
      <div className="landing-buttons">
        <div className="button-box">
          <a href='https://www.instagram.com/antariksh_nitkkr' className="find-more-button" onClick={redirect('instagram')}>
            <span className="button-icon">
              <img src={Instagram} alt=""/> &nbsp;
              FIND MORE
            </span>
          </a>
        </div>
        <div className="button-box">
          <a href='mailto:antarikshnitkkr@gmail.com' className="contact-button" onClick={redirect('mail')}>
            <span className="button-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="white"/>
            </svg>&nbsp;
              CONTACT US
            </span>
          </a>
        </div>
      </div>
      </p>
    </div>
  )
}

export default Home