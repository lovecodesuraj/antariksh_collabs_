import mongoose from "mongoose";

// const imageSchema=mongoose.Schema({
//      createdBy:String,
//      picture:String,
//      date:String,
//      name: String,
//      forGallery: { type: Boolean, default: true}
// });

// const Image=mongoose.model("Image",imageSchema);
const imageSchema = new mongoose.Schema({
     title :{
         type : String ,
         required : true
     } ,
     image : {
         type : String
     } ,
     price : {
         type : Number ,
         min : 1 , 
         default : 10
     }
 });
const Image=mongoose.model("Image",imageSchema);

export default Image;
