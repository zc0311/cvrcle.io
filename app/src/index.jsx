import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SampleCard from './components/SampleCard.jsx';
import $ from 'jquery';
import axios from "axios";
import { Container, Header, Card, Message, Segment, Form } from 'semantic-ui-react';
import ContributorEntry from './components/ContributorEntry.jsx';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Router, Route, Switch } from 'react-router'
import Routes from './views/Main/routes.js';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/reducers_index';

import GoogleMap from './containers/map.jsx';
import LocationSearchBar from './containers/locationSearchBar.jsx';

let store = createStore(rootReducer)

class AppContainer extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      entries: []
    };

    this.getEntries = this.getEntries.bind(this);

    this.getEntries();

    Routes();
  }

  getEntries() {
    axios.get('http://localhost:3000/entries')
      .then((res) => {
        this.setState({
          entries: res.data
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  componentDidMount() {

  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    return (
      <div>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand><a href="#">Cvrcle</a></Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem eventKey={1} href="#">Itineraries</NavItem>
              <NavItem className="logout" eventKey={2} href="#">Logout</NavItem>
            </Nav>
          </Navbar>
        <div className="container">
          <Provider store={store}>
            <LocationSearchBar />
          </Provider>
          <GoogleMap store={store} />
          <ContributorEntry />
          {this.state.entries.map((entryData, i) => (
            <ContributorEntry key={i} {...entryData} />
          ))}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<AppContainer />, document.getElementById('appRoot'));
  