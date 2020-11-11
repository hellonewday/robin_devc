import { DialogContent } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilm } from "../redux/actions/films";

const Film = ({ id }) => {
  const film = useSelector((state) => state.film);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFilm(id));
  }, [dispatch]);
  return (
    <DialogContent>
      <h1>Hello World, {id}</h1>
      <h1>{film ? "Done" : "Loading"}</h1>
    </DialogContent>
  );
};

export default Film;
