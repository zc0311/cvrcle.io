import React, { Component } from 'react';
import { render } from 'react-dom';

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 16
    }
  }

  componentDidMount() {
    // create the map, marker and infoWindow after the component has
    // been rendered because we need to manipulate the DOM for Google =(
    this.map = this.createMap()
    this.marker = this.createMarker()
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
      this.props.initialCenter.lat,
      this.props.initialCenter.lng
    )
  }

  createMarker() {
    return new google.maps.Marker({
      position: this.mapCenter(),
      map: this.map
    })
	}

  render() {
    return (
      <div className="google-map" ref="mapCanvas"></div>
    );
  }
}

export default GoogleMap;
