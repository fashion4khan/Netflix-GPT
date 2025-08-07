import React, { useEffect, useState } from "react";
import { Options } from "./constants";

const VideoBackground = ({ movie_id }) => {
  const [movieId, setMovieId] = useState(null);
  const movieTrailor = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movie_id +
        "/videos?language=en-US",
      Options
    );
    const json = await data.json();
    // console.log(json);
    const trailer = json.results[0];
    setMovieId(trailer.key);
    console.log(trailer);
  };
  useEffect(() => {
    movieTrailor();
  }, []);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${movieId}?autoplay=1&mute=1`} // mute is required for autoplay to work without interaction
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
