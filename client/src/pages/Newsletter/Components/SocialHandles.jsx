import Styles from "./SocialHandles.module.css";
import viewButton from "../assets/viewButton.png";
import likeButton from "../assets/likeButton.png";
import downloadButton from "../assets/downloadButton.png";
import {getNewsletter as getNewsletterApi} from "./api.js";
import React, { useState } from 'react';

function SocialHandles({currentUser}) {

  const [likes,setLikes] = useState(parseInt(getNewsletterApi().likes, 10));
  const [downloads,setDownloads] = useState(parseInt(getNewsletterApi().downloads, 10));
  const [views,setViews] = useState(parseInt(getNewsletterApi().views, 10));
  const [isLike, setIsLike] = useState(false);


  const onClickLike = () => {
  
  if(currentUser.hasLikedNewsletter){
    return;
  }

  setLikes(likes + (isLike? -1 : 1));
  setIsLike(!isLike);
  
  //  logic to revert the value of hasLikedNewsletter
}


  const onClickDownload = () => {
    setDownloads(downloads+1);
  }


  return (
    <div className={Styles.container}>

      <div className={Styles.logos}>
      <img className={Styles.logo} src={likeButton} alt="like button" onClick={onClickLike}/>         
      <img className={Styles.logo} src={viewButton} alt="comment button" />
      <a href={getNewsletterApi().downloadLink} target="_blank" rel="noreferrer"><img className={Styles.logo} src={downloadButton} alt="download button" onClick={onClickDownload}/></a>
      </div>

      <div className={Styles.counts}>
      <span className={Styles.count}>{likes}</span>
      <span className={Styles.count}>{views}</span>
      <span className={Styles.count}>{downloads}</span>
      </div>

    </div>
  );
}

export default SocialHandles;
