import React from "react";
import Header from "./header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./mainContainer";
import ListContainer from "./listContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRated";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTsearch from "./GPTsearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const SearchShow = useSelector((store) => store.gpt.showGPTsearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {SearchShow ? (
        <GPTsearch />
      ) : (
        <>
          <MainContainer />
          <ListContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
