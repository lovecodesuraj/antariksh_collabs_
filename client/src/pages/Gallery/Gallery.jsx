import React, { useEffect, useState } from 'react'
import "./styles.css"
import { useDispatch, useSelector } from 'react-redux';
import { deleteImage, fetchGallery, fetchTotalPageCount } from '../../actions/gallery';
import { Pagination, CircularProgress, IconButton,Button } from '@mui/material';
import DeleteIcon from "@mui/icons-material/DeleteOutline"
// import { Button } from 'react-scroll';



const Gallery = () => {
    const dispatch = useDispatch();
    const { images, fetchingImages, totalPageCount } = useSelector(state => state.gallery);
    const [currentPage, setCurrentPage] = useState(1);
    const user = localStorage.getItem('user');
    const handleChange = (e, value) => {
        setCurrentPage(value);
    }
    const deleteIt=(_id)=>{
        dispatch(deleteImage({_id}));
    }

    useEffect(() => {
        dispatch(fetchTotalPageCount());
        dispatch(fetchGallery({ page: currentPage }));
    }, [currentPage])
    return (
        <>   <div className="gallery" id="gallery">

            <div className="gallery_container">
                {!fetchingImages ?
                    images.map(image => 
                        <div key={image._id} className="gallery-container">
                            <div className="gallery-item">
                                <div className="gallery_item_image" style={{ backgroundImage: `url(${image.picture})` }}>
                                    <Button
                                     size="small" 
                                     style={{backgroundColor:"white"}}
                                     onClick={()=>{dispatch(deleteImage({_id:image._id}))}}
                                     >
                                        <DeleteIcon/>
                                    </Button>

                                </div>
                            </div>
                        </div>
                    )
                    : <div className="fetching_images"><CircularProgress /></div>
                }
            </div>
            <Pagination
                style={{ margin: "30px 0" }}
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