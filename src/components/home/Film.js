import { DialogContent } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilm } from "../redux/actions/films";
import { createSelector } from "reselect";
import { Rating } from "@material-ui/lab";
import Axios from "axios";
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
    if (!window.localStorage.getItem("id")) {
      alert("You must login to review this movie!");
    } else {
      console.log(newValue);
      console.log(id);
      console.log(window.localStorage.getItem("id"));
      Axios.post(`https://robin-devc.herokuapp.com/films/watched/${id}`, {
        user: window.localStorage.getItem("id"),
        rating: newValue,
      })
        .then((response) => {
          alert(response.data.message);
          setRate(newValue);
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
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
              precision={0.5}
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
