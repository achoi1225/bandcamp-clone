import { baseUrl } from '../../config';
import { TOKEN_KEY, USER_ID } from './authentication';
export const SET_FOLLOWING = "songcamp/following/SET_FOLLOWING";

export const loadFollowing = (list) => ({
    type: SET_FOLLOWING,
    list
})

export const follow = (id) => async(dispatch) => {
    
    const userId = localStorage.getItem(USER_ID);
    const body = {id};

    try {
        const response = fetch(`${baseUrl}/follows/${userId}`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`
            },
            body: JSON.stringify(body)
        });

        if(!response.ok) {
            throw response;
        }


    } catch(err) {
        console.error(err);
    }
} 

export const getFollowing = () => async(dispatch) => {

    try {

    } catch(err) {
        console.error(err);
    }
} 