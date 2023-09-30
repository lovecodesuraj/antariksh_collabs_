import React from 'react'
import "./styles.css";
import BlogPost from '../Blogpost/BlogPost'

const Blog = () => {
    return (
        <>
            <div className="blog_wrapper">
                {/* <div className="blog">
 
                </div> */}
                <BlogPost/>

            </div>
        </>
    )
}

export default Blog