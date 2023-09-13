import { Link } from "react-router-dom";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col, Button } from "reactstrap";
// import Image from "next/image";
import classes from "../../styles/hero.module.css";
import classNames from "../../styles/subtitle.module.css";

const Hero = () => {
  return (
    <section id="home" className={` ${classes.hero} `}>

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
