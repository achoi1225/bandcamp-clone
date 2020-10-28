import { HIDE_LOGIN_FORM, SHOW_LOGIN_FORM } from '../actions/ui-login-form';

export default function reducer(state = { formVisible: false }, action) {
    switch(action.type) {
        case HIDE_LOGIN_FORM: {
            return {
                ...state,
                formVisible: false,
            };
        }

        case SHOW_LOGIN_FORM: {
            return {
                ...state,
                formVisible: true,
            };
        }

        default:
            return state;
    }
}