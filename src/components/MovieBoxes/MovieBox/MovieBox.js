import React from 'react';
import { Link } from 'react-router-dom'

import classes from './MovieBox.module.css'

const MovieBox = (props) => {
  return (
    <div className={classes.movieBox + " mr-1 mb-6"}>
      <Link to="/izle?f=123asdf235123">
        <div className="w-full">
          <img className="w-full" src="https://i.ytimg.com/vi/TcMBFSGVi1c/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCfjWZT0nq_NRhPPPiJMeyDpO1zNw" />
        </div>
        <div className={classes.movieTitle + " flex mt-2 mb-1 text-white text-base font-medium movie-desc"}>
          Avengers: End Game Avengers: End Game Avengers: End Game
        </div>
        <div className="flex text-clone4 text-xs font-normal">
          2018
        </div>
        <div className="flex text-clone4 text-xs font-normal">
          120 Görüntülenme
        </div>
      </Link>
    </div>
  );
}

export default MovieBox;