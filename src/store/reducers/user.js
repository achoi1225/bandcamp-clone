import {LOAD_USER} from '../actions/user';

export default function reducer(state= {}, action) {
    switch(action.type) {
        case  LOAD_USER: {
            return {
                ...state,
                data: action.data
            }
        }

        default: 
            return state;
    }
}