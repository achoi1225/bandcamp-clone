import { baseUrl } from '../../config';
import { TOKEN_KEY } from './authentication';
import { USER_ID } from './authentication';

export const LOAD_USER = "songcamp/user/LOAD_USER";

export const loadUser = (data) => ({
    type: LOAD_USER,
    data
})


// GET USER DATA
export const getUser = () => async (dispatch, getState) => {
    console.log("IN GET USER!!!")
    const {
        authentication: { token },
    } = getState();

    const id = localStorage.getItem(USER_ID);

    console.log("ID!! ", id);
    
    try{
        const response = await fetch(`${baseUrl}/users/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }   
        );

        if(!response) {
            throw response;
        }

        const data = await response.json();
        // console.log("FROM FETCH!!", data.user);
        dispatch(loadUser(data.user));

    } catch(err) {
        console.error(err);
    }
    console.log("DISPATCHING LOAD USER!!!");

}


// UPLOAD PHOTO
export const uploadPhoto = (data) => async (dispatch, getState) => {
    const {
        authentication: { token },
    } = getState();

    const userId = localStorage.getItem(USER_ID);

    try{
        const response = await fetch(`${baseUrl}/users/${userId}/photos`,
            {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: data,
            }   
        );

        if(!response) {
            throw response;
        }

        const { updatedUser } = await response.json();
        dispatch(getUser());
        return updatedUser.imgUrl;

    } catch(err) {
        console.error(err);
    }

    console.log("PHOTO UPLOAD SUCCESSFUL!!!");
}


// DELETE PHOTO
export const deletePhoto = () => async (dispatch, getState) => {
    const {
        authentication: { token },
    } = getState();

    const body = { imgUrl: null };

    const userId = localStorage.getItem(USER_ID);

    try{
        const response = await fetch(`${baseUrl}/users/${userId}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(body),
            }   
        );

        if(response.status === 401) {
            window.location.href = "/log-in";
            return;
        }

        if(!response) {
            throw response;
        }

        const { updatedUser } = await response.json();
        dispatch(getUser());
        return updatedUser.imgUrl;

    } catch(err) {
        console.error(err);
    }
}


export const editBio = (data) => async (dispatch, getState) => {

    const {
        authentication: { token },
    } = getState();

    const userId = localStorage.getItem(USER_ID);

    try{
        const response = await fetch(`${baseUrl}/users/${userId}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify(data),
                }   
            );

            if(response.status === 401) {
                window.location.href = "/log-in";
                return;
            }

            if(!response) {
                throw response;
            }

            const { updatedUser } = await response.json();
            dispatch(getUser(updatedUser));
            return updatedUser.bio;

    } catch(err) {
        console.error(err);
    }   
}