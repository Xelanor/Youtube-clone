import React, { Component } from 'react';
import queryString from 'query-string'

import Movie from '../../components/Movie/Movie'
import RelatedMovies from '../../components/RelatedMovies/RelatedMovies'
import MovieDescription from '../../components/MovieDescription/MovieDescription'

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
          <MovieDescription />
        </div>
        <div id="related" className={classes.related + " flex-1 w-full mr-4"}>
          <RelatedMovies movies={["a", "b", "c", "d", "e", "f"]} />
        </div>
      </div>
    );
  }
}

export default MoviePage;