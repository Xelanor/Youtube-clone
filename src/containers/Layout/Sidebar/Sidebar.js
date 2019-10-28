import React, { Component } from 'react';

import classes from './Sidebar.module.css'

class Sidebar extends Component {
  state = {}
  render() {
    return (
      <sidebar className={classes.sidebar + " fixed l-0 h-full"} style={{ backgroundColor: "rgb(49, 48, 48)" }}>
        Sidebar
      </sidebar>
    );
  }
}

export default Sidebar;