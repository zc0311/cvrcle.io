import React, { Component } from 'react';
import { Navbar, NavbarHeader, Nav } from 'react-bootstrap';
import { Link } from 'react-router'

class Navb extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
            <li>
              <Link to='/home'>
                <span style={{color: '#4885ed'}}>C</span>
                <span style={{color: '#db3236'}}>V</span>
                <span style={{color: '#f4c20d'}}>R</span>
                <span style={{color: '#4885ed'}}>C</span>
                <span style={{color: '#3cba54'}}>L</span>
                <span style={{color: '#db3236'}}>E</span>
              </Link>
            </li>
        </Navbar.Header>
        <Nav>
          <li><Link to="/logout">Logout</Link></li>
        </Nav>
      </Navbar>
    );
  }
}

export default Navb;