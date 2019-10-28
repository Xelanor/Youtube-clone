import React from 'react';

import RelatedMovie from './RelatedMovie/RelatedMovie'

const RelatedMovies = (props) => {

  return (
    <>
      <div className="text-white mb-2 text-2xl font-medium">
        Öneriler
      </div>
      {props.movies.map(movie => {
        return <RelatedMovie />
      })}
    </>
  );
}

export default RelatedMovies;