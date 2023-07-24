import React, { useState } from 'react'
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { uploadImages } from '../../../../actions/gallery';
import { MuiFileInput } from 'mui-file-input'

import "./styles.css";

const AddImage = () => {
    const dispatch = useDispatch();
    const [images, setImages] = useState([]);

    const { uploadingImages } = useSelector(state => state.gallery);


    const handleUpload = () => {
        dispatch(uploadImages(images));
    }

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    const handleChange = async (e) => {
        const files = e.target.files;
        console.log(files.length)
        for (var i = 0; i < files.length; i++) {
            const base64 = await convertToBase64(files[i]);
            // console.log({base64})
            setImages([...images, { createdBy: "luffy", picture: base64 }]);
        }
    };



    return (
        <>
            <div className="addImage_wrapper">
                <div className="addImage">
                   <label 
                   id='imageInputLabel'
                   htmlFor="imageInput" 
                   >
                    {!images.length?"Select Image" :`${images.length} selected `}
                   </label>
                    <input
                        type="file"
                        accept="image/*"
                        multiple={true}
                        id='imageInput'
                        hidden
                        onChange={handleChange}
                    />
                    <Button
                        fullWidth
                        color='primary'
                        variant={uploadingImages?"outlined":"contained"}
                        onClick={handleUpload}
                    >{uploadingImages ? "uploading" : "Add"}</Button>
                </div>
            </div>

        </>
    )
}

export default AddImage