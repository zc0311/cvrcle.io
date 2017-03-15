
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SampleCard from './components/SampleCard.jsx';
import $ from 'jquery';
import axios from "axios";
import { Container, Header, Card, Message, Segment, Form } from 'semantic-ui-react';
import ContributorEntry from './components/ContributorEntry.jsx';

import GoogleMap from './containers/map.jsx';
import LocationSearchBar from './containers/locationSearchBar.jsx';

class AppContainer extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      initialCenter: { 
        lat: 33.9759, 
        lng: -118.3907 
      },
      entries: []
    };

    this.getEntries = this.getEntries.bind(this);

    this.getEntries();
  }

  getEntries() {
    axios.get('http://localhost:4000/posts/')
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
        <div className="container">
          <h1 className="text-center">Cvrcle</h1>
          <GoogleMap initialCenter={this.state.initialCenter} />
          {this.state.entries.map((entryData, i) => (
            <ContributorEntry key={i} {...entryData} />
          ))}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<AppContainer />, document.getElementById('appRoot'));
  