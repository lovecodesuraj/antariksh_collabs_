import React, { useEffect, useState } from 'react'
import {Button} from "@mui/material";
import {useDispatch,useSelector} from "react-redux";
import { uploadImages } from '../../actions/gallery';
import AddImage from './components/addImage';
import AddAnnouncement from './components/addAnnouncement';
import {adminKey} from "./keys"

const Admin = () => {
     const queryParameters=new URLSearchParams(window.location.search);
     const key=queryParameters.get("key");  
     key==adminKey ? localStorage.setItem("key",key) : localStorage.clear();
     useEffect(()=>{

     },[])
    return (
    <>
        {key==adminKey 
        ?<AddImage />
        :``
        }
    </>
    
  )
}

export default Admin