import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import { Container, Header, Card, Message, Segment, Form } from 'semantic-ui-react';
import ContributorEntry from '../ContributorEntry.jsx';
import GoogleMap from '../map.jsx';
import AddNewEntry from '../AddNewEntry.jsx';
import NavBar from '../NavBar/NavBar.js';

class Itinerary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      newEntry: false,
      markers: []
    };

    this.newEntryAdded = this.newEntryAdded.bind(this);
    this.getUserEntries = this.getUserEntries.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);

    this.itinID = '1'
  }

  getUserEntries() {
    axios.get('http://arcane-shore-51156.herokuapp.com/entries?itinID=' + this.itinID)
      .then((res) => {
        let filteredEntries = [];
        res.data.forEach((entry) => {
          filteredEntries.push(entry);
        })
        return filteredEntries
      })
      .then((data) => {
        this.setState({ entries: data })
        if (data.length) {
          this.createMarkers(data);
        } else {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
              let pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };
              map.setCenter(pos);
            });
          }
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  componentWillMount() {
    this.getUserEntries();
  }

  createMarkers(data) {
    // grabs existing locations from database and renders them onto the map
    data.forEach((location) => {
      let center = {
        lat: location.lat,
        lng: location.lng
      }
      let marker = new google.maps.Marker({
        position: center,
        map: window.map
      })
      this.state.markers.push(marker);
      window.markerBounds.extend(center);
    })

    //resets map bounds
    window.map.fitBounds(window.markerBounds);
  }


  newEntryAdded(newLocation) {
    let tmp = this.state.entries
    tmp.push(newLocation)
    this.setState({
      entries: tmp
    })

    let center = {
      lat: newLocation.lat,
      lng: newLocation.lng
    }
    window.markerBounds.extend(center)
    window.map.fitBounds(window.markerBounds);

    let marker = new google.maps.Marker({
      position: center,
      map: window.map
    })
    this.state.markers.push(marker);
    return marker;
  }

  deleteEntry(entry) {
    event.preventDefault();
    event.stopPropagation();
    let arr = this.state.entries
    arr.forEach((item, i) => {
      if (item.id === entry.id) {
        arr.splice(i, 1);
        this.state.markers[i].setMap(null);
        axios.delete(`http://arcane-shore-51156.herokuapp.com/entries?id=${entry.id}&itinID=${this.itinID}`)
          .then((res) => {
            console.log('fkjdks', res)
          })
          .then(() => (
            this.setState({
              entries: arr
            }))
          )
          .catch(err => console.log(err))
      }
    })

    // window.map.fitBounds(window.markerBounds);    
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="map-view">
            <GoogleMap locations={this.state.entries} />
          </div>
          <div className="add-entry">
            <AddNewEntry className="add-entry" data={''} newEntryAdded={this.newEntryAdded} />
          </div>
          <div className="entries">
            <div>
              <Card.Group className="existing-entries">
                {this.state.entries.length ?
                  (this.state.entries.map((entryData, i) => (
                    <ContributorEntry key={i} {...entryData} deleteEntry={this.deleteEntry} />))) :
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

export default Itinerary

