import {LOAD} from "../actions/albums";

export default function reducer(state = {}, action) {
  switch (action.type) {
    case LOAD: {
      return {
        ...state,
        albumsList: action.albumsList,
      };
    }

    default:
      return state;
  }
}