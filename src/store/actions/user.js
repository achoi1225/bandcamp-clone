import { baseUrl } from '../../config';
import { TOKEN_KEY } from './authentication';
import { USER_ID } from './authentication';

export const LOAD_USER = "songcamp/user/LOAD_USER";

export const loadUser = (data) => ({
    type: LOAD_USER,
    data
})

export const getUser = (id) => async (dispatch, getState) => {
    // console.log("INSIDE FETCH!!!")
    const {
        authentication: { token },
    } = getState();

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

    console.log("GET USER SUCCESSFUL!!!");
}


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
            console.log("FAIL!!!")
            throw response;
        }

        const updated = await response.json();
        console.log("UPDATED USER!!", updated);
        // dispatch(getUser(updated.updatedUser));

    } catch(err) {
        console.error(err);
    }

    console.log("PHOTO UPLOAD SUCCESSFUL!!!");
}
