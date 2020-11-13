import { FETCH_FILMS_SUCCESS, FETCH_FILM_SUCCESS } from "../actions/types";

const initState = {
  films: [],
  film: {},
};
export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_FILMS_SUCCESS:
      return { ...state, films: action.data.data };
    case FETCH_FILM_SUCCESS:
      return { ...state, film: action.data.data[0] };
    default:
      return state;
  }
};
