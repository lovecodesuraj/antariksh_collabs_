import mongoose from "mongoose";
import Image from "../models/gallery.js";

export const fetchGallery = async (req, res) => {
   const {page}=req.query;
     try {
        const perPage=8;
        const images=await Image.find({forGallery: true}).skip((page-1)*perPage).limit(perPage);
        res.status(200).json({images});
     } catch (error) {
      console.log(error)
        res.status(400).json({error});
      }
}
export const fetchImage = async (req, res) => {
   try{
      const {imageId} = req.query;
      const image = await Image.findById(imageId);
      if (!image) {
         return res.status(404).json({'message':'Image not found'});
      }
      const fileExtension = image.picture.split(';')[0].split('/')[1];
      res.setHeader('Content-Type', `image/${fileExtension}`); // Adjust the content type based on your image format
      console.log('File extension:', fileExtension);
console.log('Content-Type header:', res.get('Content-Type'));

      // console.log(fileExtension, res.header())
      return res.send(Buffer.from(image.picture));
   } catch(error){
      return res.status(400).json({error});
   }
}
export const uploadImages = async (req, res) => {
    const { body } = req;
   //  console.log(body.length);
    try {
      const images = await Promise.all(body.map(async image => await Image.create(image)));

      //  console.log({response});
       res.status(201).json({ message: `${body.length} pictures are uploaded by ${body[0].createdBy}`, images:images.map(image => {image.picture = undefined; return image}) });
    } catch (error) {
        res.status(400).json({ error });
        console.log({error});
    }
}

export const fetchPageCount=async(req,res)=>{
   try {
      const totalImages=await Image.find({forGallery: true}).count();
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
