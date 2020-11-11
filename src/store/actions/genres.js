import { baseUrl } from '../../config';

export const LOAD_GENRES = "songcamp/genres/LOAD_GENRES";

export const loadGenres = (list) => ({
    type: LOAD_GENRES,
    list
})


// GET list of all artists the user is following
export const getGenres = () => async (dispatch) => {

    console.log('IN GET GENRES!!!')
    try {
        const response = await fetch(`${baseUrl}/genres`);

        if(!response.ok) {
            throw response;
        }

        const { genres } = await response.json();

        dispatch(loadGenres(genres));

    } catch(err) {
        console.error(err);
    }
} 