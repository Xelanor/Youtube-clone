import React from 'react';

import classes from './Movie.module.css'

const Movie = (props) => {
  return (
    <div className={classes.wrapper}>
      <iframe
        className="down"
        allow="autoplay"
        allowfullscreen="true"
        src="https://www.youtube.com/embed/TcMBFSGVi1c"
        allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen"
        msallowfullscreen="msallowfullscreen"
        oallowfullscreen="oallowfullscreen"
        webkitallowfullscreen="webkitallowfullscreen">
      </iframe>
    </div>
  );
}

export default Movie;