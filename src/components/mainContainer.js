import React from "react";
import VideoTitle from "./videoTitle";
import VideoBackground from "./videoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies || movies.length === 0) return;

  const mainMovie = movies[0];
//   console.log(mainMovie);

  const { original_title, overview ,id} = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movie_id = {id}/>
    </div>
  );
};

export default MainContainer;
