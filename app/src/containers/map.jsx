import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers/reducers_index';

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
    // this.addMarkers = this.addMarkers.bind(this);
  }

  componentDidMount() {
    // create the map, marker and infoWindow after the component has
    // been rendered because we need to manipulate the DOM for Google =(
    this.map = this.createMap();
    // this.addMarkers(this.props.locations);
  }

  createMap() {
    let map = new google.maps.Map(this.refs.mapCanvas, {
      zoom: this.state.zoom,
      center: this.mapCenter()
    });
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        map.setCenter(pos);
        return new google.maps.Marker({
          position: pos,
          map: map
        })
      });
    }
    this.props.locations.forEach((location) => {
      console.log('location', location.lat);
      console.log('location', location.lng);      
      // let center = new google.maps.LatLng(
      //   location.lat, 
      //   location.lng
      // )
      let center = {
        lat: location.lat,
        lng: location.lng
      }
      return new google.maps.Marker({
        position: center,
        map: map
      })
    })
  }

  mapCenter() {
    return new google.maps.LatLng(
      this.state.center.lat,
      this.state.center.lng
    )
  }

  // addMarkers(inputs) {
  //   inputs.forEach((location) => {
  //     console.log('location', location.lat);
  //     console.log('location', location.lng);      
  //     // let center = new google.maps.LatLng(
  //     //   location.lat, 
  //     //   location.lng
  //     // )
  //     let center = {
  //       lat: location.lat,
  //       lng: location.lng
  //     }
  //     return new google.maps.Marker({
  //       position: center,
  //       map: this.map
  //     })
  //   })
  // }

  render() {
    // this.addMarkers(this.state.locations)
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

