import React from "react";
import MovieList from "./movieList";
import { useSelector } from "react-redux";

const ListContainer = () => {
  const nowPlaying = useSelector((state) => state.movies.nowPlayingMovies);
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  const topRated = useSelector((state) => state.movies.topRatedMovies);
  const upcoming = useSelector((state) => state.movies.upcomingMovies);
  return (
    <div className=" bg-black">
      <div className="-mt-48 relative z-20 pl-10">
        <MovieList title={"Now playing"} movies={nowPlaying} />
        <MovieList title={"Popular"} movies={popularMovies} />
        <MovieList title={"Top Rated Movies"} movies={topRated} />
        <MovieList title={"Upcoming movies"} movies={upcoming} />
      </div>
    </div>
  );
};

export default ListContainer;
