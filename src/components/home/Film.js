import { DialogContent } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilm } from "../redux/actions/films";
import { createSelector } from "reselect";
import { Rating } from "@material-ui/lab";
const Film = ({ id }) => {
  const [rate, setRate] = useState(0);
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
  const handleChangeRate = (event, newValue) => {
    console.log(newValue);
    setRate(newValue);
  };
  return (
    <DialogContent>
      <div>
        {film.film.titles ? (
          <div>
            <h1>{film.film.titles}</h1>
            <p>{review}</p>
            <Rating
              name="simple-controlled"
              value={rate}
              onChange={handleChangeRate}
            />
          </div>
        ) : (
          "Loading"
        )}
      </div>
    </DialogContent>
  );
};

export default Film;
