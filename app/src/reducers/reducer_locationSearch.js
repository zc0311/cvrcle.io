
// location reducer returns new application state if the action
// 'LOCATION_SELECTED' was taken


const LocationReducer = (state = [], action) => {
  if (action.type === 'LOCATION_SELECTED') {
    let locations = [];
    console.log('Payload returned from LocationReducer is: ', action.payload);
    console.log('Locations saved', locations);
    locations.push(action.payload);
    return locations;
  } 
  return state;
}

export default LocationReducer;
