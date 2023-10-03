import React from 'react'
import './Home.css'
import Instagram from '../../assets/Instagram.svg'
import AnimatedBackground from './AnimatedBackground';
// import Email from '../../assets/Email.svg'

const Home = () => {
  const redirect = to => {
    // if(to === 'instagram')  window.location.href = 'https://www.instagram.com/antariksh_nitkkr'
    // else if(to === 'mail')  window.location.href = 'mailto:antariksh_nitkkr@gmail.com'
  }
  return (
    <div id="home" className='Home page'>
      <AnimatedBackground />
      <h1 className='landing-heading'>Welcome to Discover The Cosmos</h1>
      <p className='landing-paragraph'>Unveil the wonders of the universe with our website. Delve into the mysteries of celestial phenomena, explore the intricacies of distant galaxies, and witness the awe-inspiring beauty of our cosmos.
        <div className="landing-buttons">
          <div className="button-box">
            <a href='https://www.instagram.com/antariksh_nitkkr' className="find-more-button" target='_blank' rel="noreferrer" onClick={redirect('instagram')}>
              <span className="button-icon">
                <img src={Instagram} alt="" /> &nbsp;
                FIND MORE
              </span>
            </a>
          </div>
          <div className="button-box">
            <a href='https://t.me/+QbPbS1e682g2NDM1' className="contact-button" target='_blank' rel="noreferrer" onClick={redirect('mail')}>
              <span className="button-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 21C4.45 21 3.979 20.804 3.587 20.412C3.195 20.02 2.99934 19.5493 3 19V5C3 4.45 3.196 3.979 3.588 3.587C3.98 3.195 4.45067 2.99934 5 3H16L21 8V19C21 19.55 20.804 20.021 20.412 20.413C20.02 20.805 19.5493 21.0007 19 21H5ZM7 17H17V15H7V17ZM7 13H17V11H7V13ZM15 9H19L15 5V9ZM7 9H12V7H7V9Z" fill="royalblue"/>
              </svg>&nbsp;
                NEWSLETTERS
              </span>
            </a>
          </div>
        </div>
      </p>
    </div>
  )
}

export default Home