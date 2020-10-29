import { HIDE_ROLE_FORM, SHOW_ROLE_FORM } from '../actions/ui-role-form';

export default function reducer(state = { formVisible: false }, action) {
    switch(action.type) {
        case HIDE_ROLE_FORM: {
            return {
                ...state,
                formVisible: false,
            };
        }

        case SHOW_ROLE_FORM: {
            return {
                ...state,
                formVisible: true,
            };
        }

        default:
            return state;
    }
}