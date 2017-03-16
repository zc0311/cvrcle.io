// importing libraries
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import { Container, Header, Card, Message, Segment, Form } from 'semantic-ui-react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// importing components and files
import ContributorEntry from './components/ContributorEntry.jsx';
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
          <div className="map-view">
            <GoogleMap store={store} />
          </div>
          <div className="add-entry">
            <AddNewEntry />
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
  