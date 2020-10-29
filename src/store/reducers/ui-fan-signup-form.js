import { HIDE_FAN_SIGNUP_FORM, SHOW_FAN_SIGNUP_FORM } from '../actions/ui-fan-signup-form';

export default function reducer(state = { formVisible: false }, action) {
    switch(action.type) {
        case HIDE_FAN_SIGNUP_FORM: {
            return {
                ...state,
                formVisible: false,
            };
        }

        case SHOW_FAN_SIGNUP_FORM: {
            return {
                ...state,
                formVisible: true,
            };
        }

        default:
            return state;
    }
}