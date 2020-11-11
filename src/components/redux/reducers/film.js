import { FETCH_FILM_SUCCESS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_FILM_SUCCESS:
      return { ...state, data: action.data };
    default:
      return state;
  }
};
