import React from "react";
import './Intro.css';

const Intro = () => {
    return ( 
        <div className="intro">
         <div className="welcome">
         <h1>WELCOME TO DISCOVER THE</h1>
         <h1 id='cosmos'>COSMOS</h1>    
        </div>   
        <div className='intromsgBox'>
        <p className='intromsg'>Unveil the wonders of the universe with our website.</p>
        <p className='intromsg'>Delve into the mysteries of celestial phenomena, explore the intricacies of distant galaxies,</p> 
        <p className='intromsg'> and witness the awe-inspiring beauty of our cosmos</p>
        </div>
    </div>
     );
}
 
export default Intro;