import mongoose from "mongoose";

const imageSchema=mongoose.Schema({
     createdBy:String,
     picture:String,
     date:String,
     name: String,
     forGallery: { type: Boolean, default: true}
});

const Image=mongoose.model("Image",imageSchema);

export default Image;
