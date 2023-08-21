import React, { useEffect, useState } from 'react'
import "./styles.css"
import { useDispatch, useSelector } from 'react-redux';
import { fetchGallery, fetchTotalPageCount } from '../../actions/gallery';
import { Pagination } from '@mui/material';



const Gallery = () => {
    const dispatch = useDispatch();
    const { images, fetchingImages, totalPageCount } = useSelector(state => state.gallery);
    const [currentPage, setCurrentPage] = useState(1);

    const handleChange = (e, value) => {
        setCurrentPage(value);
    }

    useEffect(() => {
        dispatch(fetchTotalPageCount());
        dispatch(fetchGallery({ page: currentPage }));
    }, [currentPage])
    return (
        <>   <div className="gallery" id="gallery">

            <div className="gallery_container">
                {!fetchingImages ?
                    images.map(image => <>
                        <div className="gallery-container w-1">
                            <div className="gallery-item">
                                <div className="image" style={{backgroundImage:`url("${image.picture})`}}>
                                    <img src={image.picture} />
                                </div>
                                {/* <div className="text">{image.description}</div> */}
                            </div>
                        </div>
                    </>)
                    : "fetching"
                }
            </div>
            <Pagination
                count={totalPageCount}
                color="secondary"
                page={currentPage}
                onChange={handleChange}
            />
        </div>
        </>
    )
}

export default Gallery