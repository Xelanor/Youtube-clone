import React, { Component } from 'react';

import MovieBoxes from '../../components/MovieBoxes/MovieBoxes'

import classes from './Homepage.module.css'

class Homepage extends Component {
  state = {}
  render() {
    return (
      <content className={classes.content + " w-full"}>
        <div className="flex my-4 text-white text-xl font-normal justify-center">
          Yeni Filmler
        </div>
        <MovieBoxes movies={["a", "b", "c", "d", "e", "f"]} />
        <div className="flex my-4 text-white text-xl font-normal justify-center">
          Yeni Filmler
        </div>
        <MovieBoxes movies={["a", "b", "c", "d", "e", "f"]} />
        <div className="flex my-4 text-white text-xl font-normal justify-center">
          Yeni Filmler
        </div>
        <MovieBoxes movies={["a", "b", "c", "d", "e", "f"]} />
      </content>
    );
  }
}

export default Homepage;