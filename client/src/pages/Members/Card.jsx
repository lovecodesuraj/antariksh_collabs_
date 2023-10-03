import React from "react";
import './Card.css';



const Card = (props) => {
    let bannerColor;
    let iconColor;
    const defaultUrl = "client/src/assets/members/unknown.jpg";


    if (props.year === 'Finals') {
        bannerColor = 'linear-gradient(rgb(55 56 67), rgb(26 27 57))';
        iconColor = 'rgb(55 56 67)';
    }
    else if (props.year === 'Pre-Finals') {
        bannerColor = 'linear-gradient(rgb(237, 124, 143),rgb(203, 63, 86))';
        iconColor = 'rgb(212, 62, 87)';
    }
    else {
        bannerColor = 'linear-gradient(rgb(27, 164, 249),rgb(10, 98, 180))';
        iconColor = 'rgb(23, 94, 170)';
    }

    // const [showIcons, setShowIcons] = useState(false);

    return (
        <>
            <div className="mainCard">
                {/* <div
                    // className="mainCard"
                    onMouseEnter={() => setShowIcons(true)} // Show icons on mouse enter
                    onMouseLeave={() => setShowIcons(false)} // Hide icons on mouse leave
                > */}
                <div className="photo" >
                    <p className="year" style={{ background: bannerColor }}>{props.year}</p>
                    <img className="profilePic" id="finalround" style={{ borderColor: iconColor }} src={props.photo || defaultUrl} alt="" />
                </div>
                <h2 className="name">{props.name}</h2>
                <hr className="hr"/>
                <div className="info">
                    <h4 className="post">{props.post}</h4>
                    <br />
                    <h4 className="branch">{props.branch}</h4>
                </div>
                {/* <div className="icons-container">
                        <div
                            className={`icons ${showIcons ? "visible" : ""}`}
                        >
                            <a href="https://www.youtube.com/watch?v=LD4eKYSsA2Q">
                                <div className="linkin bring-forward"></div>
                            </a>
                            <a href="">
                                <div className="gmail bring-forward"></div>
                            </a>
                            <a href="">
                                <div className="github bring-forward"></div>
                            </a>
                            <a href="">
                                <div className="insta bring-forward"></div>
                            </a>
                        </div>
                    </div> 
                </div>*/}
            </div>
        </>
    );
};

export default Card;