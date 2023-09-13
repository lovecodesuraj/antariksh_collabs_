import express from "express";

import { fetchGallery,deleteImage,uploadImages,fetchPageCount} from "../controllers/gallery.js";

const router=express.Router();

router.get("/",fetchGallery);
router.get("/pageCount",fetchPageCount);
router.post("/uploadImages",uploadImages);
router.delete('/delete',deleteImage);

export default router;
