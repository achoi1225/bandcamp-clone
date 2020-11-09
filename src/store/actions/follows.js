import { baseUrl } from '../../config';
import { TOKEN_KEY, USER_ID } from './authentication';

const userId = localStorage.getItem(USER_ID);
const token = localStorage.getItem(TOKEN_KEY);

export const LOAD_FOLLOWING = "songcamp/following/LOAD_FOLLOWING";

export const loadFollowing = (list) => ({
    type: LOAD_FOLLOWING,
    list
})


// GET list of all artists the user is following
export const getFollowing = () => async (dispatch) => {

    console.log('IN GET FOLLOWING!!!')
    try {
        const response = await fetch(`${baseUrl}/follows`, {
            headers: {
                Authorization: `Bearer ${token}`,
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
    
    // const userId = localStorage.getItem(USER_ID);
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


//Delete a follow
export const deleteFollow = (id) => async (dispatch, getState) => {

    console.log("INSIDE DELETE FOLLOW!!", id)
    const {
        authentication: { token },
    } = getState();

    try {
        const response = await fetch(`${baseUrl}/follows/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            },
        });
    
        if(response.status === 401) {
            window.location.href = "/log-in";
            return;
        }
    
        if(!response.ok) {
            throw response;
        }

        // await response.json();
        dispatch(getFollowing());

    } catch(err) {
        if(err.status >= 400 && err.status < 600) {
            const errorJSON = await err.json();
            // const errorsContainer = document.querySelector(".errors-container");

            // const errorsHtml = [
            //     `<div class="alert alert-danger">
            //         Something went wrong. Please try again.
            //     </div>`
            // ]

            const { errors } = errorJSON;

            if(errors && Array.isArray(errors)) {
                // errorsHtml = errors.map(
                //     (message) => 
                //     `<div class="alert alert-danger">
                //         ${ message }
                //     </div>`
                // )

                console.log("ERRORS!!", errors)
            }

            // errorsContainer.innerHTML = errorsHtml.join("");
        } else {
            alert(
                "Something went wrong. Please check your internet connection and try again!"
            )
        }
    }

}