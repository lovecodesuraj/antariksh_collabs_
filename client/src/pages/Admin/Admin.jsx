import React, { useState } from 'react'
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { uploadImages } from '../../actions/gallery';
import AddImage from './components/addImage';
import AddMember from './components/addImage/addMember/addMember';

const Admin = () => {
  return (
    <>
      <AddImage />
      <AddMember/>
    </>
  )
}

export default Admin