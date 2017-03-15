
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SampleCard from './components/SampleCard.jsx';
import $ from 'jquery';
import axios from "axios";
import { Container, Header, Card, Message, Segment, Form } from 'semantic-ui-react';
import ContributorEntry from './components/ContributorEntry.jsx';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/reducers_index';

import GoogleMap from './containers/map.jsx';
import LocationSearchBar from './containers/locationSearchBar.jsx';

let store = createStore(rootReducer)

class AppContainer extends Component { 
  constructor(props) {
    super(props);
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
          <Provider store={store}>
            <LocationSearchBar />
          </Provider>
          <GoogleMap store={store} />
          <ContributorEntry />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<AppContainer />, document.getElementById('appRoot'));
  