import express from "express";

import { fetchGallery,saveContactMessage,deleteImage,uploadImages,fetchPageCount} from "../controllers/gallery.js";

const router=express.Router();

router.get("/",fetchGallery);
router.get("/pageCount",fetchPageCount);
router.post("/uploadImages",uploadImages);
router.delete('/delete',deleteImage);


router.post("/saveContactMessage",saveContactMessage);

export default router;
