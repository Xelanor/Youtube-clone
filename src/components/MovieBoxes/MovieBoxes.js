import React from 'react';

import MovieBox from './MovieBox/MovieBox'

import classes from './MovieBoxes.module.css'

const MovieBoxes = (props) => {
  let data = props.movies
  let movies = data.map(movie => {
    return <MovieBox />
  })
  return (
    <div className="flex flex-wrap justify-center">
      {movies}
    </div>
  );
}

export default MovieBoxes;