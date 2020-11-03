import { baseUrl } from '../../config';
import { TOKEN_KEY, USER_ID } from './authentication';

export const LOAD_FOLLOWING = "songcamp/following/LOAD_FOLLOWING";

export const loadFollowing = (list) => ({
    type: LOAD_FOLLOWING,
    list
})


// GET list of all artists the user is following
export const getFollowing = (userId) => async (dispatch) => {

    console.log('IN GET FOLLOWING!!!')
    try {
        const response = await fetch(`${baseUrl}/follows/${userId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`,
            }
        });

        if(!response.ok) {
            throw response;
        }

        const list = await response.json();

        console.log("FOLLOWING LIST!!!! ", list);

        dispatch(loadFollowing(list));

    } catch(err) {
        console.error(err);
    }


} 



// Create a following
export const follow = (followingId) => async (dispatch) => {
    
    const userId = localStorage.getItem(USER_ID);
    const body = { followingId } ;

    try {
        const response = await fetch(`${baseUrl}/follows/${userId}`, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`,
            },
        });

        if(!response.ok) {
            throw response;
        }

        const following = await response.json();
        console.log("add follow successful!!!! ", following);
        dispatch(getFollowing(userId));

    } catch(err) {
        console.error(err);
    }
} 