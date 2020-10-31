import { baseUrl } from '../../config';
import { TOKEN_KEY } from './authentication';

export const LOAD_USER = "songcamp/user/LOAD_USER";

export const loadUser = (data) => ({
    type: LOAD_USER,
    data
})

export const getUser = (id) => async (dispatch) => {
    console.log("INSIDE FETCH!!!")
    try{
        const response = await fetch(`${baseUrl}/users/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`
                }
            }   
        );

        if(!response) {
            throw response;
        }

        const data = await response.json();
        console.log("FROM FETCH!!", data.user);
        dispatch(loadUser(data.user));

    } catch(err) {
        console.error(err);
    }

    console.log("GET USER SUCCESSFUL!!!");


}