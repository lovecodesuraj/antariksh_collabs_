import React, { useEffect, useState } from 'react'
import "./styles.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchGallery,fetchTotalPageCount } from '../../actions/gallery';
import { Pagination } from '@mui/material';



const Gallery = () => {
    const dispatch = useDispatch();
    const { images,fetchingImages } = useSelector(state => state.gallery);
   const [currentPage,setCurrentPage]=useState(1);
   
    const handleChange=(e,value)=>{
        setCurrentPage(value);
    }

    useEffect(() => {
        dispatch(fetchGallery());
        dispatch(fetchTotalPageCount());
        dispatch(fetchGallery({page:currentPage}));
    }, [currentPage])
    return (
        <>
            <div class="gallery">
                { !fetchingImages?
                    images.map(image => <>
                        <figure class="thumb">
                            <a href="#">
                                <img src={image.picture} alt="A Photo" />
                            </a>
                        </figure>
                    </>)
                    : "fetching"
            }
            </div>
             <Pagination
             count={10} 
             color="secondary"
             page={currentPage}
             onChange={handleChange}
             />
        </>
    )
}

export default Gallery