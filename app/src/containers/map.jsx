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


  render() {
    if (!this.props.locationInputs) {
      return (
        <div className="google-map" ref="mapCanvas"></div>
      );
    } else {
      return (
        <div className="google-map" ref="mapCanvas">{
          this.props.locationInputs.forEach((location) => {
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
  return {
    locationInputs: state.locationInput
  }
}

export default connect(mapStateToProps)(GoogleMap);

