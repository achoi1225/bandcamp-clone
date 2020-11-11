import { HIDE_ARTIST_SIGNUP_FORM, SHOW_ARTIST_SIGNUP_FORM } from '../actions/ui-artist-signup-form';

export default function reducer(state = { formVisible: false }, action) {
    switch(action.type) {
        case HIDE_ARTIST_SIGNUP_FORM: {
            return {
                ...state,
                formVisible: false,
            };
        }

        case SHOW_ARTIST_SIGNUP_FORM: {
            return {
                ...state,
                formVisible: true,
            };
        }

        default:
            return state;
    }
}