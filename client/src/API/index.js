import axios from "axios";

const API=axios.create({baseURL:"https://astrons-server.onrender.com/"});
// const API=axios.create({baseURL:"http://localhost:5000"});



//gallery
export const uploadImages=(data)=>API.post(`/gallery/uploadImages`,data);
export const fetchGallery=({page})=>API.get(`/gallery?page=${page}`);
export const fetchTotalPageCount=()=>API.get(`/gallery/pageCount`);
export const deleteImage=(data)=>API.delete(`gallery/delete?_id=${data._id}`);


//contact
export const saveContactMessage=(data)=>API.post(`gallery/saveContactMessage`,data);
