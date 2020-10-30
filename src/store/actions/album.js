import { baseUrl } from '../../config';
import { TOKEN_KEY } from './authentication';
// import { errorNotifications } from "../error-notifications.js";

export const SET_CURRENT = "songcamp/albums/SET_CURRENT";

export const setCurrent = (current) => ({
    type: SET_CURRENT,
    current
})

export const getOneAlbum = (id) => async (dispatch) => {

    console.log("GET ONE ALBUM");
    try{
        const response = await fetch(`${baseUrl}/albums/${id}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`},
        });
        
        if(!response.ok) {
            throw response;
        }
        
        const album = await response.json();
        
        dispatch(setCurrent(album));

    } catch(err) {
        console.error(err);
        // errorNotifications(err);
    }
}