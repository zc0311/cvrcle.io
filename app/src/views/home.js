import React, { Component } from 'react';
import ReactDOM from "react-dom";

import Navbar from '../components/navbar.jsx';

class Logout extends Component {
  constructor() {
    super();
  }

  getUserItineraries() {
    //gets users iterineraries and renders below
  }

  render() {
    return (
      <div>
        <Navbar />
        Home
      </div>
    );
  }
}

export default Logout