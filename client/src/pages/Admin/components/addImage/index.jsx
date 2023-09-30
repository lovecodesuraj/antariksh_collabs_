import React, { useState } from 'react'
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { uploadImages } from '../../../../actions/gallery';

import "./styles.css";

const AddImage = () => {
    const dispatch = useDispatch();
    const [images, setImages] = useState([]);
    const [name, setName] = useState("");
    const [forGallery, setForGallery] = useState(true);
    const { uploadingImages } = useSelector(state => state.gallery);


    const handleUpload = () => {
        dispatch(uploadImages(images));
        setImages([]);
        setName("");
        setForGallery(true);
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
        const newImages = [];
        for (var i = 0; i < files.length; i++) {
            const base64 = await convertToBase64(files[i]);
            newImages.push({ createdBy: "admin", picture: base64, name: name, forGallery: forGallery })
        }
        setImages([...images, newImages]);
    };

    const handleNameChange = async (e)=>{
        setName(e.target.value);
    }

    const handleChangeForGallery = async (e)=>{
        setForGallery(e.target.checked)
    }

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
                    <input type="text" id='imageName' name='imageName' onChange={handleNameChange}/>
                    <label htmlFor="forGallery">For Gallery?</label><input type="checkbox" name="forGallery" id="forGallery" onChange={handleChangeForGallery} defaultChecked={true}/>
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