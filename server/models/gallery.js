import mongoose from "mongoose";

const imageSchema=mongoose.Schema({

     createdBy:String,
     picture:String,
     date:String,
});

const Image=mongoose.model("Image",imageSchema);

export default Image;
