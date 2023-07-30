import React, { useState } from 'react'
import {Button} from "@mui/material";
import {useDispatch,useSelector} from "react-redux";
import { uploadImages } from '../../actions/gallery';
import AddImage from './components/addImage';
import AddAnnouncement from './components/addAnnouncement';

const Admin = () => {
  


    return (
        <>
        <AddImage />
        <AddAnnouncement />
     </>
  )
}

export default Admin