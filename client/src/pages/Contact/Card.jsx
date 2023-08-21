import React from "react";
import './Card.css';


const Card = (props) =>{
    let bannerColor;
    let iconColor;

    if (props.year == 'Finals'){
        bannerColor = 'linear-gradient(rgb(215, 25, 215),rgb(100, 0, 100))';
        iconColor = 'rgb(134, 0, 134)' ;
    }
    else if(props.year == 'Pre-Finals'){
        bannerColor = 'linear-gradient(rgb(237, 124, 143),rgb(203, 63, 86))';
        iconColor = 'rgb(212, 62, 87)';
    }
    else{
        bannerColor = 'linear-gradient(rgb(27, 164, 249),rgb(10, 98, 180))';
        iconColor = 'rgb(23, 94, 170)';
    }

    return(
        <>
        <div className="mainCard">
                <p className="year" style={{background : bannerColor}}>{props.year}</p>
                <div className="photo" ><img className="profilePic" id="finalround" style={{borderColor: iconColor}} src={props.photo} /></div>
                <h2 className="name">{props.name}</h2>
                <div className="info">
                    <div>
                        <h4 className="post">{props.post}</h4>
                        <h6 className="branch">{props.branch}</h6>
                    </div>
                    <div className="heavenlybody" style={{backgroundImage : `url(${props.gif})`}}></div>
                </div>
           
                <div className="icons">
                    <a href="https://www.youtube.com/watch?v=LD4eKYSsA2Q">
                    <div className="linkin bring-forward" style={{backgroundColor : iconColor}}></div>
                    </a>
                    <a href="">
                    <div className="gmail bring-forward" style={{backgroundColor : iconColor}}></div>
                    </a>
                    <a href="">

                    <div className="github bring-forward" style={{backgroundColor : iconColor}}></div>
                    </a>
                    <a href="">
                    <div className="insta bring-forward" style={{backgroundColor : iconColor}}></div>
                    </a>
                </div>
        </div>
        </>
    );
};

export default Card;