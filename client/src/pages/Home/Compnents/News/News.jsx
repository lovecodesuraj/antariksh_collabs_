import React from "react";
import './News.css';
import astronaut from './astronaut.png';

const News = () => {
    return ( 
      <div className="news">
        <div className="newsBox">
          Latest News
        </div>
        <div className="newsBox">
          NewsLetter
        </div>
        <img src={astronaut} alt="astronaut" className="astronaut"/>
      </div>
     );
}
 
export default News;
