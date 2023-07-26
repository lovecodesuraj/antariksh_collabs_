import mongoose from "mongoose";
import Image from "../models/gallery.js";

export const fetchGallery = async (req, res) => {
   const {page}=req.query;
   // console.log({page})
     try {
        const perPage=4;
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
      let pageCount=totalImages/4;
      pageCount=pageCount>1?Math.round(pageCount):1;
      res.status(200).json({pageCount});
   } catch (error) {
      console.log({error});
      res.status(400).json({error});
   }
}
