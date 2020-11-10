const { FETCH_FILMS, FETCH_FILMS_SUCCESS } = require("./types");

export const fetchFilms = () => {
  return {
    type: FETCH_FILMS,
  };
};

export const receiveFilms = (data) => {
  return {
    type: FETCH_FILMS_SUCCESS,
    data,
  };
};
