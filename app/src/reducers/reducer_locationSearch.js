
// location reducer returns new application state if the action
// 'LOCATION_SELECTED' was taken

const LocationReducer = (state = null, action) => {
  if (action.type === 'LOCATION_SELECTED') {
    return action.payload;
  };

  return state;
}

export default LocationReducer;
