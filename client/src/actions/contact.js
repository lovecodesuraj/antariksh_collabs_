import * as api from "../API/index";
export const saveContactMessage = (data) => async (dispatch) => {
    try {
        dispatch({ type: "SAVING_MESSAGE" });
        const { response } = await api.saveContactMessage(data);
        console.log({response});
        dispatch({ type: "MESSAGE_SAVED" });
    } catch (error) {
        console.log("error h mere bhaii");
    }
}