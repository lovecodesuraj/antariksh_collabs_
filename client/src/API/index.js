import axios from "axios";

// const API=axios.create({baseURL:"https://medverseserver.onrender.com"});
const API=axios.create({baseURL:"http://localhost:5000"});

// API.interceptors.request.use((req)=>{
//     if(localStorage.getItem('profile')){
//         req.headers.authorization= `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
//     }
//     return req;
// })

//gallery
export const uploadImages=(data)=>API.post(`/gallery/uploadImages`,data);
export const fetchGallery=({page})=>API.get(`/gallery/ page=${page}`);