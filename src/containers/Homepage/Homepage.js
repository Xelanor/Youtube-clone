import React, { Component } from 'react';
import axios from 'axios'

import MovieBoxes from '../../components/MovieBoxes/MovieBoxes'

import classes from './Homepage.module.css'

class Homepage extends Component {
  state = {
    movies: null
  }

  componentDidMount() {
    axios.get('/api/movies')
      .then(res => this.setState({ movies: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    let page
    if (this.state.movies) {
      page = (
        <>
          <div className="flex my-4 text-white text-xl font-normal justify-center">
            Yeni Filmler
          </div>
          <MovieBoxes movies={this.state.movies} />
          <div className="flex my-4 text-white text-xl font-normal justify-center">
            Yeni Filmler
          </div>
          <MovieBoxes movies={["a", "b", "c", "d", "e", "f"]} />
          <div className="flex my-4 text-white text-xl font-normal justify-center">
            Yeni Filmler
          </div>
          <MovieBoxes movies={["a", "b", "c", "d", "e", "f"]} />
        </>
      );
    } else {
      page = "loading"
    }
    return (
      <content className={classes.content + " w-full"}>
        {page}
      </content>
    );
  }
}

export default Homepage;