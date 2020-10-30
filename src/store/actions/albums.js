import { baseUrl } from '../../config';
import { TOKEN_KEY } from './authentication';
// import { errorNotifications } from "../error-notifications.js";

export const LOAD = "songcamp/albums/LOAD";

export const load = (list) => ({
    type: LOAD,
    list
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


// export const getOneAlbum = (id) => async (dispatch) => {

//     try{
//         const response = await fetch(`${baseUrl}/albums/${id}`, {
//             headers: { Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`},
//         });

//         if(!response.ok) {
//             throw response;
//         }
    
//         const album = await response.json();
        
//         dispatch(load(album));

//     } catch(err) {
//         console.error(err);
//         // errorNotifications(err);
//     }
// }