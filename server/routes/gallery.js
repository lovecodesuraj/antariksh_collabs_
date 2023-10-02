import express from "express";
import mongoose from "mongoose";

import { fetchGallery,deleteImage,uploadImages,fetchPageCount, fetchImage} from "../controllers/gallery.js";

const router=express.Router();

// temp starts---->>>
main()
.then(()=> {
    console.log("connection successfull");
})
.catch((err)=> {
    console.log(err);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon"); // it will wait for the promise
}



router.get("/",fetchGallery);
router.get("/pageCount",fetchPageCount);
router.get("/image",fetchImage);
router.post("/uploadImages",uploadImages);
router.delete('/delete',deleteImage);


// temp ends--->>>

export default router;
