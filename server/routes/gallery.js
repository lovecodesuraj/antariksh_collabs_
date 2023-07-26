import express from "express";

import { fetchGallery,uploadImages,fetchPageCount} from "../controllers/gallery.js";

const router=express.Router();

router.get("/",fetchGallery);
router.get("/pageCount",fetchPageCount);
router.post("/uploadImages",uploadImages);

export default router;
