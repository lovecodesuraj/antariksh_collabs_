import axios from "axios";

// const API=axios.create({baseURL:"https://medverseserver.onrender.com"});
// const API=axios.create({baseURL:"http://localhost:5000"});
const API=axios.create({baseURL:"/"});

// API.interceptors.request.use((req)=>{
//     if(localStorage.getItem('profile')){
//         req.headers.authorization= `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
//     }
//     return req;
// })

//gallery
export const uploadImages=(data)=>API.post(`/api/gallery/uploadImages`,data);
export const fetchGallery=({page})=>API.get(`/api/gallery?page=${page}`);
export const fetchTotalPageCount=()=>API.get(`/api/gallery/pageCount`);
export const deleteImage=(data)=>API.delete(`/api/gallery/delete?_id=${data._id}`);
