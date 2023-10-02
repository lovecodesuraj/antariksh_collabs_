import express from "express";
import mongoose from "mongoose";

import { fetchGallery,deleteImage,uploadImages,fetchPageCount, fetchImage} from "../controllers/gallery.js";

const router=express.Router();
router.get("/",fetchGallery);
router.get("/pageCount",fetchPageCount);
router.get("/image",fetchImage);
router.post("/uploadImages",uploadImages);
router.delete('/delete',deleteImage);




export default router;
