import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import classes from './Header.module.css'

class Header extends Component {
  state = {}
  render() {
    return (
      <header className="flex flex-row fixed w-full t-0 l-0 h-16 bg-clone3 z-50" style={{ backgroundColor: "rgb(49, 48, 48)" }}>
        <div id="logo" className="flex flex-row pb-1 relative text-clone text-4xl font-semibold">
          Youtube
        </div>
        <div id="main-header" className="w-full flex flex-row relative">
          <div id="search" className="flex flex-row">
            <form>
              <input
                type="text"
                className={classes.searchbox + " outline-none bg-purple-white shadow text-clone2 rounded-full border border-solid border-gray-400 p-1 pl-4 pr-64 focus:border-tekno"}
                placeholder="Dizi veya Film ara..."
              />
              <button type="submit">
                <i className="fa fa-search ml-1 p-2 text-clone"></i>
              </button>
            </form>
          </div>
        </div>
        <div id="secondary-header" className="flex flex-row pr-8">
          <Link to="/login" className="inline-block text-base whitespace-no-wrap px-4 py-2 mr-4 leading-none border rounded-lg bg-clone2 text-white border-white hover:border-tekno hover:text-tekno hover:bg-transparent mt-2 lg:mt-0">Giriş</Link>
          <Link to="/register" className="inline-block text-base whitespace-no-wrap px-4 py-2 leading-none border rounded-lg bg-clone text-white border-white hover:border-tekno hover:text-tekno hover:bg-transparent mt-2 lg:mt-0">Kayıt Ol</Link>
        </div>
      </header>
    );
  }
}

export default Header;