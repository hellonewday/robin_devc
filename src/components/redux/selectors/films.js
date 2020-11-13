import { createSelector } from "reselect";

const films = (state) => state.films;

export const getFilmsFromState = createSelector([films], (films) =>
  films.films.sort((film1, film2) => {
    return film2.rates - film1.rates;
  })
);
