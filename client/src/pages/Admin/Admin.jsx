import React, { useState } from 'react'
import {Button} from "@mui/material";
import {useDispatch,useSelector} from "react-redux";
import { uploadImages } from '../../actions/gallery';
import AddImage from './components/addImage';

const Admin = () => {
  


    return (
        <>
        <AddImage />
     </>
  )
}

export default Admin