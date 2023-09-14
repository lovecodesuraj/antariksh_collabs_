import React, { useEffect } from 'react'
// import {Button} from "@mui/material";
// import {useDispatch,useSelector} from "react-redux";
// import { uploadImages } from '../../actions/gallery';
import AddImage from './components/addImage';
// import AddAnnouncement from './components/addAnnouncement';
// import {adminKey} from "../../../credentials";

const Admin = () => {
     const queryParameters=new URLSearchParams(window.location.search);
     const key=queryParameters.get("key");  
     key==="faultedstar" ? localStorage.setItem("key",key) : localStorage.clear();
     useEffect(()=>{
      console.log("faultedstar");
     },[])
    return (
    <>
        {key==="faultedstar" 
        ?<AddImage />
        :""
        }
    </>
    
  )
}

export default Admin