import express from "express";

import { fetchGallery } from "../controllers/gallery.js";

const router=express.Router();

router.get("/",fetchGallery);

export default router;
