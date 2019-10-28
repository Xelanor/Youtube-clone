import React from 'react';
import { Link } from 'react-router-dom'

import classes from './RelatedMovie.module.css'

const RelatedMovie = (props) => {
  return (
    <div className={classes.movieBox + " flex mr-1 mb-2"}>
      <Link to="/izle?f=123asdf235123">
        <div className="flex flex-row">
          <img className={classes.Image} src="https://i.ytimg.com/vi/TcMBFSGVi1c/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCfjWZT0nq_NRhPPPiJMeyDpO1zNw" />
          <div className="flex flex-col ml-2 mr-4">
            <div className={classes.movieTitle + " mb-1 text-white text-base font-medium movie-desc"}>
              Avengers: End Game Avengers: End Game Avengers: End Game
              </div>
            <div className="flex text-clone4 text-xs font-normal">
              2018
              </div>
            <div className="flex text-clone4 text-xs font-normal">
              120 Görüntülenme
              </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default RelatedMovie;