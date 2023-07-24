export default (state = { uploadingImages: false,fetchingImages:false, images: [] }, action) => {
    switch (action.type) {
        case "UPLOADING_IMAGES":
            return { ...state, uploadingImages: true }
    }
    switch (action.type) {
        case "FETCHING_IMAGES" :
            return {...state,fetchingImages:true}
        case "FETCHING_IMAGES_FINISHED" :
            return {...state,fetchingImages:false}
        case "FETCH_IMAGES" :
            return {...state,images:action.payload}
        case "UPLOADING_IMAGES_FINISHED":
            return { ...state, uploadingImages: false }
        default:
            return state
    }

}