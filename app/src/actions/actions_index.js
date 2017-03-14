
// dispatcher(action creator) that sets the application state 
// with location selected from user search

let selectFromLocationSearch = (locationCoordinates) => {
  return {
    type: 'LOCATION_SELECTED',
    payload: locationCoordinates
  }
}
