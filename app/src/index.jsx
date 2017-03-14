
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SampleCard from './components/SampleCard.jsx';
import $ from 'jquery';
import axios from "axios";
import { Container, Header, Card, Message, Segment, Form } from 'semantic-ui-react';

import GoogleMap from './components/map.jsx';
import LocationSearchBar from './components/locationSearchBar.jsx';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialCenter: { 
        lat: 33.9759, 
        lng: -118.3907 
      }
    };
  }

  componentDidMount() {

  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    return (
      <Container text fluid>
        <Header as='h1' textAlign='center'>Cvrcle.io</Header>
        <SampleCard header='Herro Friend!' />
        <LocationSearchBar />
        <GoogleMap initialCenter={this.state.initialCenter} />
      </Container>
    );
  }
}



ReactDOM.render(
  <AppContainer />, document.getElementById('appRoot'));
  