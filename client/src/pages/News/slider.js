import React, { useState,useEffect } from "react";
// import { Link, Router } from "react-router-dom";
import './slider.css'
import { IoIosArrowBack, IoIosArrowForward, IoIosShareAlt } from "react-icons/io";

const Slider = (props) => {

    const [ContentIndex, SetContentIndex] = useState(0);

    const [ArticleArray,SetArticleArray] = useState([])
    
    useEffect(()=>{
        SetArticleArray(props.articles);
        console.log(props.articles);
    },[props.articles])

    const NextContent = () => {
        SetContentIndex(index => {
            if (index === ArticleArray.length - 1) return 0;
            return index + 1;
        })
    }


    const PrevContent = () => {
        SetContentIndex(index => {
            if (index === 0) return ArticleArray.length - 1;
            return index - 1;
        })
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            SetContentIndex(index => (index === ArticleArray.length - 1 ? 0 : index + 1));
        }, 6000);

        return () => clearInterval(intervalId);
    }, [ContentIndex]);

    const copyText = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(window.location.href);
        var tip = document.getElementById('tool');
        tip.style.display = "block";
        setTimeout(()=>{
            tip.style.display = "none"
        },2000);
    }

    return (
            <div className="wrapper">
                <div className="container">

                    {ArticleArray.map((content) => (
                        <a href={content.url} target="_blank" rel="noopener noreferrer" key={content.id} className="Images" style={{ translate: `${ContentIndex * -100}%` }}>
                            <img src={content.imageUrl} alt="News" className="image" />
                            <p className="headline" style={{ color: "white" }}>{content.title}</p>
                            <div className="shadow-box"></div>
                            <div className="share-parent">
                                <div className="tooltip" id="tool">
                                    <p>Link copied !</p>
                                </div>
                                <button className="share-button" id="share-button" onClick={copyText}>
                                    <IoIosShareAlt size={25} color="black" />
                                </button>
                            </div>
                        </a>

                    ))}

                    <button onClick={NextContent} className="arrow-btn" style={{ right: 5 }}><IoIosArrowForward color="white" size={20} /></button>

                    <button onClick={PrevContent} className="arrow-btn" style={{ left: 5 }}><IoIosArrowBack color="white" size={20} /></button>

                    <div className="bottom-content">
                        <div className="small-btn">
                            {ArticleArray.map((_, index) => (
                                <button onClick={() => SetContentIndex(index)} className={ContentIndex === index ? `small-btn-focus` : `small-btn-normal`}></button>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
    )
}

export default Slider;