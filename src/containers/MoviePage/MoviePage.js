import React, { Component } from 'react';
import axios from 'axios'
import queryString from 'query-string'

import Movie from '../../components/Movie/Movie'
import RelatedMovies from '../../components/RelatedMovies/RelatedMovies'
import MovieDescription from '../../components/MovieDescription/MovieDescription'

import classes from './MoviePage.module.css';

class MoviePage extends Component {
  state = {
    movieId: null,
    movie: null
  }

  componentDidMount() {
    const values = queryString.parse(this.props.location.search)

    axios.get(`/api/movies/${values.f}`)
      .then(res => this.setState({ movie: res.data }))
      .catch(err => console.log(err))

    this.setState({ movieId: values.f })
  }

  render() {
    let movie
    if (this.state.movie) {
      movie = (
        <>
          <div id="movie" className={classes.movie + " flex flex-col mr-2"}>
            <Movie movie={this.state.movie} />
            <MovieDescription movie={this.state.movie} />
          </div>
          <div id="related" className={classes.related + " flex-1 w-full mr-4"}>
            <RelatedMovies movies={["a", "b", "c", "d", "e", "f"]} />
          </div>
        </>
      )
    } else {
      movie = "Loading"
    }

    return (
      <div className={classes.content + " xl:flex justify-center h-full w-full m-4"}>
        {movie}
      </div>
    );
  }
}

export default MoviePage;