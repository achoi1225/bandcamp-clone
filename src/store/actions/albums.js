import { baseUrl } from '../../config';
import { TOKEN_KEY } from './authentication';
import { Redirect } from 'react-router-dom'
// import { errorNotifications } from "../error-notifications.js";

export const LOAD = "songcamp/albums/LOAD";

export const load = (albums) => ({
    type: LOAD,
    albums
})

export const getAlbums = () => async (dispatch) => {

    try{
        const response = await fetch(`${baseUrl}/albums`, {
            headers: { Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`},
        });

        if(!response.ok) {
            throw response;
        }
    
        const albumsList = await response.json();
        
        dispatch(load(albumsList));

    } catch(err) {
        console.error(err);
        // errorNotifications(err);
    }
}