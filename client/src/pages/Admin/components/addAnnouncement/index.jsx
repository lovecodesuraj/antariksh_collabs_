import React, { useState } from 'react'
import { TextField, Button } from "@mui/material";
// import pdfToBase64 from "pdf-to-base64";

const AddAnnouncement = () => {
    const [announcement, setAnnouncement] = useState({
        title: "",
        file: ""
    });
    


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
        const file = e.target.value;
        // const base64="bharat";
        const base64 = await convertToBase64(file);
        console.log({base64});
        setAnnouncement({...announcement,file: base64,createdBy:"luffy" });
    };
    const uploadingAnnouncement = false;

    const handleUpload = () => {

    }

    return (
        <>
            <div className="addImage_wrapper" style={{ backgroundColor: "grey" }}>
                <div className="addImage">
                    <TextField
                        placeholder='title'
                        value={announcement.title}
                        fullWidth
                        onChange={e => { setAnnouncement({ ...announcement, title: e.target.value }) }}
                    />
                    {/* <Input type='file'fullWidth margin='none' /> */}
                    <label
                        id='imageInputLabel'
                        htmlFor="announcementFileInput"
                    > Select file
                        {/* {!images.length?"Select Image" :`${images.length} selected `} */}
                    </label>
                    <input
                        type="file"
                        accept="application/pdf"
                        multiple={false}
                        id='announcementFileInput'
                        hidden
                        // file={announcement.file}
                        // value={announcement.file}
                        onChange={handleChange}
                        // onChange={e => { setAnnouncement({ ...announcement, title: e.target.value }) }}
                    />
                    <Button
                        fullWidth
                        color='primary'
                        // variant={uploadingAnnouncement?"outlined":"contained"}
                        onClick={handleUpload}
                    >
                        {uploadingAnnouncement ? "uploading" : "Add"}
                    </Button>
                </div>
            </div>
        </>
    )
}

export default AddAnnouncement