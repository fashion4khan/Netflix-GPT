import React from 'react'
import { IMG_CDN_URL } from './constants'

const MovieCard = ({ poster_path }) => {
  return (
    <div className='w-44 bg-black mr-10'>
      <img alt="" src={IMG_CDN_URL + poster_path} />
    </div>
  );
};


export default MovieCard