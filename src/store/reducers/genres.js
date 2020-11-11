import {LOAD_GENRES} from "../actions/genres";

export default function reducer(state={}, action){
    switch (action.type) {
        case LOAD_GENRES: {
            return {
                ...state,
                list: action.list
            }
        }

        default:
            return state;
    }
}