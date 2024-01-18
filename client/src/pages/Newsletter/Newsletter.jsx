import Classes from "./Newsletter.module.css";
import astronaut from "./assets/Astronaut.png";
import PDFContainer from "./Components/PDFContainer";
import Comments from "./Components/Comments";
import SocialHandles from "./Components/SocialHandles";
import React from 'react'


function Newsletter() {
  
  const currentUser = {
                       userId: "1",
                       username: "John",
                       hasLikedNewsletter: false,
                     }

  return (
    <div id='newsletter' className={Classes.container}>
      
      <h1>
        <span className={Classes.first}> <span className={Classes.firstletter}>T</span>HE</span>{" "}
        <span className={Classes.second}>COSMIC</span>{" "}
        <span className={Classes.third}>EXPRESS</span>
      </h1>
      
      <div className={Classes["grid-container"]}>
        <PDFContainer/>
        <div className={Classes.commentContainer}>
          <SocialHandles currentUser={currentUser}/>
          <Comments currentUser={currentUser}/>
        </div>
        <div className={Classes.astroContainer}>
          <img src={astronaut} alt="an astronaut" />
        </div>
      </div>
    </div>
  );
}

export default Newsletter;



