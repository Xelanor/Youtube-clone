import React, { Component } from 'react';
import queryString from 'query-string'

import Movie from '../../components/Movie/Movie'
import RelatedMovies from '../../components/RelatedMovies/RelatedMovies'

import classes from './MoviePage.module.css';

class MoviePage extends Component {
  state = {
    movieId: null
  }

  componentDidMount() {
    const values = queryString.parse(this.props.location.search)
    this.setState({ movieId: values.f })
  }

  render() {
    return (
      <div className={classes.content + " xl:flex justify-center h-full w-full m-4"}>
        <div id="movie" className={classes.movie + " flex flex-col mr-2"}>
          <Movie />
          <div className="flex flex-col">
            <div className={classes.movieTitle + " flex mt-2 mb-1 text-white text-lg font-medium movie-desc"}>
              Avengers: End Game Avengers: End Game Avengers: End Game
            </div>
            <div className="flex text-clone4 text-sm font-normal">
              2018
            </div>
            <div className="flex text-clone4 text-sm font-normal">
              120 Görüntülenme
            </div>
          </div>
        </div>
        <div id="related" className={classes.related + " flex-1 w-full mr-4"}>
          <div className="text-white mb-2 text-2xl font-medium">
            Öneriler
            </div>
          <RelatedMovies movies={["a", "b", "c", "d", "e", "f"]} />
        </div>
      </div>
    );
  }
}

export default MoviePage;