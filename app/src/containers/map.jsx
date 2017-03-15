import React, { Component } from 'react';

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 15
    }
  }

  componentDidMount() {
    // create the map, marker and infoWindow after the component has
    // been rendered because we need to manipulate the DOM for Google =(
    this.map = this.createMap()
    this.marker = this.createMarker()
  }

  createMap() {
    let map = new google.maps.Map(this.refs.mapCanvas, {
      zoom: this.state.zoom,
      center: {lat: 33.9759, lng: -118.3907}
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
