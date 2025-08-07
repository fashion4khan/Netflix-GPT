import React from "react";
import Header from "./header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./mainContainer";
import ListContainer from "./listContainer";

const Browse = () => {
  useNowPlayingMovies();
  return(
    <div>
        <Header />
        <MainContainer />
        <ListContainer />
    </div>
  );
};

export default Browse;
