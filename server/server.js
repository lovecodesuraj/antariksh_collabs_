import { config } from "dotenv";
config();
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import galleryRoutes from "./routes/gallery.js"; 
import path, {dirname} from "path"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app=express();

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(express.static(path.resolve(__dirname,'../client/build')))

app.use(cors());
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
       next();
 });

//  app.get("/",(req,res)=>{
//     res.send("server is running...");
// })

//routes
app.use("/api/gallery",galleryRoutes);

// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'../client/build/index.html'));
// })


//database connection 
const PORT = process.env.PORT || 5000 ; 
mongoose.set("strictQuery", false);
mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{app.listen(PORT , ()=>{console.log(`sever is running at port ${PORT}`)})})
.catch((err)=>{console.log(err)});


