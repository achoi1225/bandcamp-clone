import { baseUrl } from '../../config';
// import { errorNotifications } from "../error-notifications.js";

export const TOKEN_KEY = "songcamp/authentication/TOKEN";
export const USER_ID = "songcamp/authentication/USER_ID";
export const USER_NAME = "songcamp/authentication/USER_NAME";
export const SET_TOKEN = "songcamp/authentication/SET_TOKEN";
export const REMOVE_TOKEN = "songcamp/authentication/REMOVE_TOKEN";

export const setToken = (token) => ({
    type: SET_TOKEN,
    token
})

export const removeToken = () => ({
    type: REMOVE_TOKEN,
})

export const loadToken = () => async (dispatch) => {
    const token = window.localStorage.getItem(TOKEN_KEY);
    if(token) {
        dispatch(setToken(token));
    };
};


// SIGNUP ============================================================================
export const signup = ({email, password, userName, artist}) => async (dispatch) => {

    try{
        const response = await fetch(`${baseUrl}/users`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ email, password, userName, artist})
        });
    
        if(!response.ok) {
            throw response;
        }
    
        const { token, user: { id } } = await response.json();
        
        console.log('sign up successful!!!!');

        window.localStorage.setItem(TOKEN_KEY, token);
        window.localStorage.setItem(USER_ID, id);
        window.localStorage.setItem(USER_NAME, userName);
        
        dispatch(setToken(token));

    } catch(err) {
        console.log(err);
        // errorNotifications(err);
    }
}


// LOGIN ============================================================================
export const login = (email, password) => async (dispatch) => {

    try {
        const response = await fetch(`${baseUrl}/users/token`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
    
        if(!response.ok) {
            throw response;
        }

        const { token, users: { id, userName } } = await response.json();

        window.localStorage.setItem(TOKEN_KEY, token);
        window.localStorage.setItem(USER_ID, id);
        window.localStorage.setItem(USER_NAME, userName);

        dispatch(setToken(token));

    } catch(err) {
        console.log(err);
        // errorNotifications(err);
    }
}


// LOGOUT ============================================================================
export const logout = () => async (dispatch, getState) => {
    const { authentication: { token }} = getState();
    const response = await fetch(`${baseUrl}/users/token`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
    });

    if(response.ok) {
        window.localStorage.removeItem(TOKEN_KEY);
        dispatch(removeToken());
    }
}
