// importing libraries
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import { Container, Header, Card, Message, Segment, Form } from 'semantic-ui-react';

import ContributorEntry from './components/ContributorEntry.jsx';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Router, Route, Switch } from 'react-router'

import { Provider } from 'react-redux';
import { createStore } from 'redux';

// importing components and files
import GoogleMap from './containers/map.jsx';
import AddNewEntry from './components/AddNewEntry.jsx';
import rootReducer from './reducers/reducers_index';

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

  // TODO: modify request to get only relevant itinerary (match itinID)
  getEntries() {
    axios.get('http://localhost:3000/entries')
      .then((res) => {
        let filteredEntries = [];
        res.data.forEach((entry) => {
          if (entry.itinID === 1) {
            filteredEntries.push(entry);
          }
        })
        return filteredEntries
      })
      .then((data) => {
        this.setState({
          entries: data
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  componentDidMount() {
    this.getEntries();

  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    // console.log('app store', store.getState());
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
          <div className="map-view">
            {this.state.entries.length ?
              <GoogleMap store={store} locations={this.state.entries} /> :
              ''
            }
          </div>
          <div className="add-entry">
            <AddNewEntry data={''} />
          </div>
          <div className="entries">
            <div className="ui two cards">
              <Card.Group className="existing-entries">
                {this.state.entries.length ?
                  (this.state.entries.map((entryData, i) => (
                    <ContributorEntry key={i} {...entryData} />))) :
                  "No entries yet!"
                }
              </Card.Group>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<AppContainer />, document.getElementById('appRoot'));
