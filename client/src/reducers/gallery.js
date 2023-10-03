export default (state = { uploadingImages: false, fetchingImages: false, images: [], totalPageCount: 1, }, action) => {
    switch (action.type) {
        case "UPLOADING_IMAGES":
            return { ...state, uploadingImages: true }
    }
    switch (action.type) {
        case "FETCHING_IMAGES":
            return { ...state, fetchingImages: true }
        case "FETCHING_IMAGES_FINISHED":
            return { ...state, fetchingImages: false }
        case "FETCH_IMAGES":
            return { ...state, images: action.payload }
        case "UPLOADING_IMAGES_FINISHED":
            return { ...state, uploadingImages: false }
        case "FETCH_TOTAL_PAGE_COUNT":
            return { ...state, totalPageCount: action.payload }
        case "DELETE_SELECTED_IMAGE":
            return { ...state, images: state.images.filter(image => image._id != action.payload) }
        default:
            return state
    }

}