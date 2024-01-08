<<<<<<< HEAD
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
=======
import { Link } from "react-router-dom";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col, Button } from "reactstrap";
// import Image from "next/image";
import classes from "../../styles/hero.module.css";
import classNames from "../../styles/subtitle.module.css";

const Hero = () => {
  return (
    <section id="home" className={` ${classes.hero} `}>
>>>>>>> 350daabe1eea233f6a400f3dbe28097c07bb7ae5

      {/* desktop / large screen view */}
      <Container id="hero-section " className="md:flex hidden" style={{flexDirection:"column"}}>
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3">&apos;bhaii logo</h2>
              <h5 className="mb-4">welcome welcome well come </h5>
              <p id="about-me">
                Unveil the wonders of the universe with our website. Delve into the mysteries of celestial phenomena, explore the intricacies of distant galaxies, and witness the awe-inspiring beauty of our cosmos
              </p>
            </div>
            <div className="mt-5 flex place-content-center md:block">
              <div className="relative inline-flex group">
                <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r animate-pulse hover:animate-none from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                <a
                  href="/#contact"
                  className="relative text-sm sm:text-md md:text-lg text-center items-center justify-center px-8 py-4  font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  <span className="block">Join Us 🎉</span>
                </a>
              </div>
            </div>
      </Container>

      {/* mobile / small screen view */}

      <Container id="hero-section" className="md:hidden">
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <div className="flex flex-col items-center justify-center">
                <h2 className="mt-3 mb-3">
                  <span className={`${classNames.section__subtitle}`} >Hello ! </span>
                  I&apos; Bhaii logo</h2>
                <h5 className="mb-4">weilcom welcomw well come</h5>
                <p id="about-me" className="text-center">
                Unveil the wonders of the universe with our website. Delve into the mysteries of celestial phenomena, explore the intricacies of distant galaxies, and witness the awe-inspiring beauty of our cosmos
                </p>
              </div>

            </div>
            <div className="mt-5 flex flex-col items-center justify-center">
              <div className="relative inline-flex group">
                <div className="absolute w-full transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r animate-pulse hover:animate-none from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                <a
                  href="#contact"
                  className="relative w-full text-sm sm:text-md md:text-lg text-center items-center justify-center px-8 py-4  font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  <span className="block">Join Us🎉</span>
                </a>
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Hero;
