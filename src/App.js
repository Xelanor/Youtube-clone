import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './containers/Layout/Header/Header'
import Sidebar from './containers/Layout/Sidebar/Sidebar'
import Homepage from './containers/Homepage/Homepage'
import MoviePage from './containers/MoviePage/MoviePage'

class App extends Component {
  state = {}
  render() {
    return (
      <Router>
        <Header />
        <div className="flex pt-16 h-full w-full">
          <Sidebar />
          <Route path="/" exact component={Homepage} />
          <Route path="/izle" component={MoviePage} />
        </div>
      </Router>
    );
  }
}

export default App;