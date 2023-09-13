import axios from "axios"
import Image from "../models/gallery.js";
import dotenv from "dotenv";
dotenv.config();

export const fetchGallery = async (req, res) => {
   const {page}=req.query;
     try {
        const perPage=8;
        const images=await Image.find().skip((page-1)*perPage).limit(perPage);
        res.status(200).json({images});
     } catch (error) {
        res.status(400).json({error});
     }
}

export const uploadImages = async (req, res) => {
    const { body } = req;
   //  console.log(body.length);
    try {
       const response = await Image.create(body[0]);
      //  console.log({response});
       res.status(201).json({ message: `${body.length} pictures are uploaded by ${body[0].createdBy}` });
    } catch (error) {
        res.status(400).json({ error });
        console.log({error});
    }
}

export const fetchPageCount=async(req,res)=>{
   try {
      const totalImages=await Image.count();
      let pageCount=totalImages/8;
      pageCount=pageCount>1?Math.ceil(pageCount):1;
      res.status(200).json({pageCount});
   } catch (error) {
      console.log({error});
      res.status(400).json({error});
   }
}

export const deleteImage = async (req, res) => {
   const {_id}=req.query;
   console.log({_id})
     try {
        await Image.findByIdAndDelete(_id);
        res.status(200);
     } catch (error) {
        res.status(400).json({error});
     }
}


export const saveContactMessage = async (req, res) => {
   const {name:Name,email:Email,message:Message}=req.body;
   const data={Name,Email,Message}
   try {
      const response=await fetch(process.env.GOOGLE_SPREADSHEET_URL,{
         method:"POST",
         body:data
          });
      res.status(200);      
     } catch (error) {
        res.status(400).json({error});
     }
}


//https://script.google.com/macros/s/AKfycbwhzJ_oEm_O_pH74lKeuE9XDWCQi2gfTedgWR546L078JVKeBGeN1zJ32LOo6vHJ1-JNg/exec