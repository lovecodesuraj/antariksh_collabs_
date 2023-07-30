import * as api from "../API/index";


export const makeAnnouncement=(Data)=>async(dispatch)=>{
    try {
        // dispatch({type:"UPLOADING_IMAGES"});
        const {data}=await api.makeAnnouncement(Data);
        // dispatch({type:"UPLOADING_IMAGES_FINISHED"});
        console.log({data});
    } catch (error) {
        console.log({error});        
    }
}



