import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import { Container, Header, Card, Message, Segment, Form } from 'semantic-ui-react';
import ContributorEntry from '../components/ContributorEntry.jsx';
import GoogleMap from '../components/map.jsx';
import AddNewEntry from '../components/AddNewEntry.jsx';
import Navbar from '../components/navbar.jsx';
import rootReducer from '../reducers/reducers_index';
import { connect, Provider } from 'react-redux';
import { bindActionCreators } from 'redux';
import store from '../store.js';
import { updateLocations } from '../actions/actions_index';

class Itinerary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      newEntry: false
    };

    this.newEntryAdded = this.newEntryAdded.bind(this);
    this.getUserEntries = this.getUserEntries.bind(this);
  }

  getUserEntries() {
    console.log('get entries 1', this.props.storeLocations)
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
        this.props.updateLocations(data)
        console.log('get entries 2', this.props.storeLocations)    
      })
      .catch((err) => {
        console.log(err);
      })
  }

  componentDidMount() {
    this.getUserEntries();
  }

  componentWillUnmount() {
    // this.serverRequest.abort();
  }

  newEntryAdded() {
    console.log('inside of add new entry');
    this.setState({
      newEntry: !this.state.newEntry
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="map-view">
            {this.state.entries.length ?
              <GoogleMap
                locations={this.state.entries}
              /> : ''}
          </div>
          <div className="add-entry">
            <AddNewEntry
              data={''}
              newEntryAdded={this.newEntryAdded}
            />
          </div>
          <div className="entries">
            <div>
              <Card.Group className="existing-entries">
                {this.state.entries.length ?
                  (this.state.entries.map((entryData, i) => (
                    <ContributorEntry key={i} {...entryData} />))) :
                  <div className="text-center">No entries yet!</div>
                }
              </Card.Group>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    storeLocations: state.storeLocations
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateLocations: updateLocations
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary);

