import { HIDE_SIGNUP_FORM, SHOW_SIGNUP_FORM } from '../actions/ui-signup-form';

export default function reducer(state = { formVisible: false }, action) {
    switch(action.type) {
        case HIDE_SIGNUP_FORM: {
            return {
                ...state,
                formVisible: false,
            };
        }

        case SHOW_SIGNUP_FORM: {
            return {
                ...state,
                formVisible: true,
            };
        }

        default:
            return state;
    }
}