import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './containers/Layout/Header/Header'
import Sidebar from './containers/Layout/Sidebar/Sidebar'
import Homepage from './containers/Homepage/Homepage'

class App extends Component {
  state = {}
  render() {
    return (
      <Router>
        <Header />
        <div className="flex pt-16 h-full w-full">
          <Sidebar />
          <Homepage />
        </div>
      </Router>
    );
  }
}

export default App;