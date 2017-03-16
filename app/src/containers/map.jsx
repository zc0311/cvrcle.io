import React, { Component } from 'react';
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
      locations: this.props.locationInputs
    }
  }

  componentDidMount() {
    // create the map, marker and infoWindow after the component has
    // been rendered because we need to manipulate the DOM for Google =(
    this.map = this.createMap()
  }

  createMap() {
    let mapOptions = {
      zoom: this.state.zoom,
      center: this.mapCenter()
    }
    return new google.maps.Map(this.refs.mapCanvas, mapOptions)
  }

  mapCenter() {
    return new google.maps.LatLng(
      this.state.center.lat,
      this.state.center.lng
    )
  }

  addMarkers(inputs) {
    this.props.entriesUpdated.forEach((location) => {
      let center = new google.maps.LatLng(
        location.lat, 
        location.lng
      )
      return new google.maps.Marker({
        position: center,
        map: this.map
      })
    })
  }

  // appStateLocations(locationInputs) {
  //   console.log('getting into appStateLocations');
  //   this.props.locationInputs.forEach((location) => {
  //     let center = new google.maps.LatLng(
  //       location.lat, 
  //       location.lng
  //     )
  //     return new google.maps.Marker({
  //       position: center,
  //       map: this.map
  //     })
  //   })  
  // }

  render() {
    console.log('inside of map render');
    if (!this.props.locationInput) {
      return (
        <div className="google-map" ref="mapCanvas"></div>
      );
    } else {
      return (
        <div className="google-map" ref="mapCanvas">{
          this.props.locationInput.forEach((location) => {
            console.log('getting into making markers')
            let center = new google.maps.LatLng(
              location.lat, 
              location.lng
            )
            return new google.maps.Marker({
              position: center,
              map: this.map
            })
          })  
        }
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  console.log('inside of map state to props', state.locationInput);
  return {
    locationInput: state.locationInput
  }
}

export default connect(mapStateToProps)(GoogleMap);

