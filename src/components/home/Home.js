import React from "react";
import FilmList from "./FilmList";
import SearchContainer from "./SearchContainer";

const Home = () => {
  return (
    <div>
      <SearchContainer />
      <FilmList />
    </div>
  );
};

export default Home;
