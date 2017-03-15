
// dispatcher(action creator) that sets the application state 
// with location selected from user search

let selectFromLocationSearch = (location) => {
  return {
    type: 'LOCATION_SELECTED',
    payload: location
  }
}

export { selectFromLocationSearch };
