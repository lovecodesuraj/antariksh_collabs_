import axios from "axios";

<<<<<<< HEAD
// const API=axios.create({baseURL:"https://medverseserver.onrender.com"});
const API=axios.create({baseURL:"https://antariksh-server-7z3o.onrender.com"});
// const API=axios.create({baseURL:"http://localhost:5000"});

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('key')){
        req.headers.authorization= `${localStorage.getItem('key')}`
    }
    return req;
})

//gallery
export const uploadImages=(data)=>API.post(`/api/gallery/uploadImages`,data);
export const fetchGallery=({page})=>API.get(`/api/gallery?page=${page}`);
export const fetchTotalPageCount=()=>API.get(`/api/gallery/pageCount`);
export const deleteImage=(data)=>API.delete(`/api/gallery/delete?_id=${data._id}`);
=======
// const API=axios.create({baseURL:"https://astrons-server.onrender.com/"});
const API=axios.create({baseURL:"http://localhost:5000"});



//gallery
export const uploadImages=(data)=>API.post(`/gallery/uploadImages`,data);
export const fetchGallery=({page})=>API.get(`/gallery?page=${page}`);
export const fetchTotalPageCount=()=>API.get(`/gallery/pageCount`);
export const deleteImage=(data)=>API.delete(`gallery/delete?_id=${data._id}`);


//contact
export const saveContactMessage=(data)=>API.post(`gallery/saveContactMessage`,data);
>>>>>>> 350daabe1eea233f6a400f3dbe28097c07bb7ae5
