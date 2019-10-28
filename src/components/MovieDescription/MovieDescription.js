import React from 'react';

const MovieDescription = (props) => {
  return (
    <div className="flex flex-col">
      <div className="flex mt-2 mb-1 text-white text-lg font-medium movie-desc">
        Avengers: End Game Avengers: End Game Avengers: End Game
      </div>
      <div className="flex text-clone4 text-sm font-normal">
        2018
      </div>
      <div className="flex text-clone4 text-sm font-normal">
        120 Görüntülenme
      </div>
    </div>
  );
}

export default MovieDescription;