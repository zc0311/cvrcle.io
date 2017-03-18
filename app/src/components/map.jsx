import React, { Component } from 'react';
// import store from '../store.js';
import { connect } from 'react-redux';

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: { 
        lat: 33.9759, 
        lng: -118.3907 
      },
      zoom: 13,
    }
  }

  componentDidMount() {
    // create the map, marker and infoWindow after the component has
    // been rendered because we need to manipulate the DOM for Google =(
    this.createMap();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
    this.loadMap();
    this.forceUpdate()
    }
  }

  createMap() {
    // instantiates the map
    window.map = new google.maps.Map(this.refs.mapCanvas, {
      zoom: this.state.zoom,
      center: this.mapCenter()
    });
    window.markerBounds = new google.maps.LatLngBounds();

    // grabs location and centers map if no locations already saved
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

    // grabs existing locations from database and renders them onto the map
    this.props.locations.forEach((location) => {
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
    // this.createMap();
    return (
      <div className="google-map" ref="mapCanvas"></div>
    );
  }
}

// export default GoogleMap;

const mapStateToProps = (state) => {
  return {
    storeLocations: state.storeLocations
  }
}

export default connect(mapStateToProps)(GoogleMap);
