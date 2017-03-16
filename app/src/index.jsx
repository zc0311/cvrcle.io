
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

let store = createStore(rootReducer)

class AppContainer extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      entries: []
    };

    // this.getEntries = this.getEntries.bind(this);

    // this.getEntries();
  }

  // getEntries() {
  //   axios.get('http://localhost:4000/posts/')
  //     .then((res) => {
  //       this.setState({
  //         entries: res.data
  //       })
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // }

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
          <div className="entry-col-1">
            <ContributorEntry />
            {this.state.entries.map((entryData, i) => (
              <ContributorEntry key={i} {...entryData} />
            ))}
          </div>
          <div className="entry-col-2">
            <GoogleMap store={store} />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<AppContainer />, document.getElementById('appRoot'));
  