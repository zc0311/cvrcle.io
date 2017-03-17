
// location reducer returns new application state if the action
// 'LOCATION_SELECTED' was taken

// const locations = [];

// const LocationReducer = (state = [], action) => {
//   if (action.type === 'ADD_ENTRY') {
//     let locations = [];
//     console.log('Payload returned from LocationReducer is: ', action.payload);
//     console.log('Locations saved', locations);
//     locations.push(action.payload);
//     return locations;
//   } 
//   return state;
// }

// export default LocationReducer;

const SessionReducer = (state={}, action) => {
  console.log('in SessionReducer')
  if (action.type === 'SAVE_SESSION') {
    return action.payload;
  }
  console.log("initial state is: ", state)
  return state;
}

export default SessionReducer;

