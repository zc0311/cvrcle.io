import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { createStore } from 'redux';
// import rootReducer from '../reducers/reducers_index';

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: { 
        lat: 33.9759, 
        lng: -118.3907 
      },
      zoom: 13,
      locations: this.props.locations
    }
  }

  componentDidMount() {
    // create the map, marker and infoWindow after the component has
    // been rendered because we need to manipulate the DOM for Google =(
    this.map = this.createMap();
  }

  createMap() {
    // instantiates the map
    let map = new google.maps.Map(this.refs.mapCanvas, {
      zoom: this.state.zoom,
      center: this.mapCenter()
    });
    let markerBounds = new google.maps.LatLngBounds();

    // grabs location and centers map if no locations already save
    if (this.props.locations.length === 0) {
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

    // adds markers onto the page
    this.props.locations.forEach((location) => {
      console.log('loc-lat', location.lat);
      console.log('loc-lng', location.lng);      
      let center = {
        lat: location.lat,
        lng: location.lng
      }
      new google.maps.Marker({
        position: center,
        map: map
      })
      markerBounds.extend(center);
    })

    //resets map bounds
    map.fitBounds(markerBounds);
  }

  mapCenter() {
    return new google.maps.LatLng(
      this.state.center.lat,
      this.state.center.lng
    )
  }

  render() {
    return (
      <div className="google-map" ref="mapCanvas"></div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('inside of map state to props', state.locationInput);
  return {
    locationInput: state.locationInput
  }
}

export default connect(mapStateToProps)(GoogleMap);

