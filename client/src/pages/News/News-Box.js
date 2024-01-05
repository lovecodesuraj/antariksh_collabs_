import React, { useEffect, useState } from "react";
import { IoIosShareAlt } from "react-icons/io";
import Slider from "./slider";
import './NewsBox.css';
import './slider.css';

const NewsBox = () => {

    const [NewsArray, SetNewsArray] = useState([]);

    useEffect(() => {
        const getNews = async () => {
            try {
                const response = await fetch("https://api.spaceflightnewsapi.net/v3/articles", {
                    method: "GET"
                })

                const data = await response.json()

                SetNewsArray(data)
                // console.log(data.slice(0,4))

            }
            catch (error) {
                console.log("Error occured", error)
            }

        }

        getNews()
    }, [])

    const copyText = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(window.location.href);
        var tip = document.getElementById('tool');
        tip.style.display = "block";
        setTimeout(() => {
            tip.style.display = "none"
        }, 2000);
    }


    return (
        <div className="news-outer-box">

            <div className="news-wrapper">
                <Slider articles={NewsArray.slice(0, 4)} />

                {NewsArray.slice(4, 8).map((element) => {
                    return (
                        <div className="single-wrapper">

                            <div className="container">
                                <a href={element.url} target="_blank" rel="noopener noreferrer" key={element.id} className="Images">
                                    <img src={element.imageUrl} alt="News" className="image" />
                                    <p className="headline single-headline" style={{ color: "white" }}>{element.title}</p>
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
                            </div>
                        </div>
                    )
                })}
                <Slider articles={NewsArray.slice(8, NewsArray.length + 1)} />
            </div>
        </div>
    )
}

export default NewsBox;