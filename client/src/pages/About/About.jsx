import React from 'react';
import './About.css';
import AboutAstronautImage from './../../assets/about-astronaut.svg';
import AnimatedBackground from '../Home/AnimatedBackground';
function About() {
  return (
    <div className="about page" id='About'>
      <AnimatedBackground/>
      <h1>About Antariksh</h1>
      <div className="about-content">
        <p>
          <span>“The universe is under no obligation to make sense to you.” - Neil deGrasse Tyson.</span> <br />
          <br />
          Still, human minds have never stopped questioning the mysteries of the cosmos. The origin of life or the presence of extraterrestrial beings, the mysteries of dark matter, or parallel universes, humans have always wondered about the answers to these enthralling questions. <span>Antariksh, the astronomy club of NIT Kurukshetra</span>, is one among such explorers, searching answers for the cosmic mysteries, ready to explore what lies within and beyond. <br />
          <br />
          With our <span>stargazing sessions</span>, you can observe the solar system, our <span>astronomical discussions and quizzes</span> will make you wonder over the intricacies of the universe, and our <span>space competitions</span> will put your cosmic knowledge to the test. Antariksh is the place where we never stop questioning, for the universe itself is a web of mysteries, waiting for their answers to be untangled. We are the cosmos’s creation, seeking out the cosmos. <br />
        </p>
        <img className='aboutImage' src={AboutAstronautImage} alt="Astronaut Hanging through planets" />
      </div>
    </div>
  );
}

export default About;
