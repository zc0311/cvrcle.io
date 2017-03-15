
// location reducer returns new application state if the action
// 'LOCATION_SELECTED' was taken

//testing pull
//testing push

const LocationReducer = (state = null, action) => {
  if (action.type === 'LOCATION_SELECTED') {
    console.log('Payload returned from LocationReducer is: ', action.payload);
    return action.payload;
  };

  return state;
}

export default LocationReducer;
