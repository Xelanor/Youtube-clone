import React from 'react';
import { Link } from 'react-router-dom'

import classes from './MovieBox.module.css'

const MovieBox = (props) => {
  return (
    <div className={classes.movieBox + " mr-1 mb-6"}>
      <Link to={`/izle?f=${props.movie._id}`}>
        <div className="w-full">
          <img className="w-full" src={props.movie.thumbnail} />
        </div>
        <div className={classes.movieTitle + " flex mt-2 mb-1 text-white text-base font-medium movie-desc"}>
          {props.movie.title}
        </div>
        <div className="flex text-clone4 text-xs font-normal">
          {props.movie.year}
        </div>
        <div className="flex text-clone4 text-xs font-normal">
          {props.movie.views} görüntülenmme
        </div>
      </Link>
    </div>
  );
}

export default MovieBox;