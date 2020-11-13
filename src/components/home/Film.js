import { DialogContent } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilm } from "../redux/actions/films";
import { createSelector } from "reselect";
const Film = ({ id }) => {
  const getFilmFromStore = (state) => state.films;
  const reviewFilm = createSelector([getFilmFromStore], (film) =>
    film.film.releaseYear < 2015 ? "Old movie" : "New movie"
  );
  const film = useSelector(getFilmFromStore);
  const review = useSelector(reviewFilm);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFilm(id));
  }, [dispatch]);

  return (
    <DialogContent>
      <div>
        {film.film.titles ? (
          <div>
            <h1>{film.film.titles}</h1>
            <p>{review}</p>
          </div>
        ) : (
          "Loading"
        )}
      </div>
    </DialogContent>
  );
};

export default Film;
