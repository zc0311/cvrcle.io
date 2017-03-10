
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SampleCard from './components/SampleCard.jsx';
import $ from 'jquery';
import axios from "axios";
import { Container, Header, Card, Message, Segment, Form } from 'semantic-ui-react';


class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
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
      </Container>
    );
  }
}



ReactDOM.render(
  <AppContainer />, document.getElementById('appRoot'));
  