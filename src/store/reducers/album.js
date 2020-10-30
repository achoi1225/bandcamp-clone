import {SET_CURRENT} from "../actions/album";

export default function reducer(state = {}, action) {
  switch (action.type) {
    case SET_CURRENT: {
      return {
        ...state,
        current: action.current,
      };
    }

    default:
      return state;
  }
}