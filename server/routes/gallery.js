import express from "express";

import { fetchGallery,uploadImages} from "../controllers/gallery.js";

const router=express.Router();

router.get("/",fetchGallery);
router.post("/uploadImages",uploadImages);

export default router;
