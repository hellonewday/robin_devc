const {
  FETCH_FILMS,
  FETCH_FILMS_SUCCESS,
  FETCH_FILM,
  FETCH_FILM_SUCCESS,
  SEARCH_FILMS,
  SEARCH_FILM_SUCCESS,
} = require("./types");

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

export const fetchFilm = (id) => {
  return {
    type: FETCH_FILM,
    id,
  };
};

export const receiveFilm = (data) => {
  return {
    type: FETCH_FILM_SUCCESS,
    data,
  };
};

export const searchFilms = (query) => {
  return {
    type: SEARCH_FILMS,
    query,
  };
};

export const queryFilms = (data) => {
  return {
    type: SEARCH_FILM_SUCCESS,
    data,
  };
};
