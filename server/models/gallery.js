import mongoose from "mongoose";

const gallerySchema=mongoose.Schema({
   image:{
    type:String,
    required:true,
   },
   date:String,
   postedBy:String,
});

const Gallery=mongoose.model("Gallery",gallerySchema);

export default Gallery;
