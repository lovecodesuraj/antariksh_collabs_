import mongoose from "mongoose";
import Image from "../models/gallery.js";

export const fetchGallery = async (req, res) => {
     try {
        const images=await Image.find();
        res.status(200).json({images});
     } catch (error) {
        res.status(400).json({error});
     }
}

export const uploadImages = async (req, res) => {
    const { body } = req;
    console.log(body.length);
    try {
       const response = await Image.create(body[0]);
       console.log({response});
       res.status(201).json({ message: `${body.length} pictures are uploaded by ${body[0].createdBy}` });
    } catch (error) {
        res.status(400).json({ error });
        console.log({error});
    }
}

