import {LOAD_FOLLOWING} from "../actions/follows";

export default function reducer(state={}, action){
    switch (action.type) {
        case LOAD_FOLLOWING: {
            return {
                ...state,
                list: action.list
            }
        }

        default:
            return state;
    }
}