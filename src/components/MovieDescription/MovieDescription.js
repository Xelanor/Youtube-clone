import React from 'react';

const MovieDescription = (props) => {
  return (
    <div className="flex flex-col">
      <div className="flex mt-2 mb-1 text-white text-lg font-medium movie-desc">
        {props.movie.title}
      </div>
      <div className="flex text-clone4 text-sm font-normal">
        {props.movie.year}
      </div>
      <div className="flex text-clone4 text-sm font-normal">
        {props.movie.views} Görüntülenme
      </div>
    </div>
  );
}

export default MovieDescription;