
// dispatcher(action creator) that sets the application state 
// with location selected from user search

let selectFromLocationSearch = (location) => {
  console.log('getting inside action creator');
  return {
    type: 'LOCATION_SELECTED',
    payload: location
  }
}

export { selectFromLocationSearch };
