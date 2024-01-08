import express from "express";

import { fetchGallery,deleteImage,uploadImages,fetchPageCount, fetchImage} from "../controllers/gallery.js";
import { adminAuth } from "../middlewares/auth.js";
import { fetchGallery,saveContactMessage,deleteImage,uploadImages,fetchPageCount} from "../controllers/gallery.js";

const router=express.Router();

router.get("/",fetchGallery);
router.get("/pageCount",fetchPageCount);
router.get("/image",fetchImage);


// admin apis
router.use(adminAuth);
router.post("/uploadImages",uploadImages);
router.delete('/delete',deleteImage);


router.post("/saveContactMessage",saveContactMessage);

export default router;
