import React from "react";
import MovieCard from "./movieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="text-white">
      <h1 className="font-bold text-2xl m-4">{title}</h1>
      <div className="flex overflow-x-scroll m-1">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} poster_path={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
