
// location reducer returns new application state if the action
// 'LOCATION_SELECTED' was taken

// export const SessionReducer = (state={}, action) => {
//   if (action.type === 'SAVE_SESSION') {
//     return state;
//   }
//   console.log("initial state is: ", state)
//   return state;
// }


// export default LocationReducer;

export const SessionReducer = (state={}, action) => {
  console.log('in SessionReducer')
  if (action.type === 'SAVE_SESSION') {
    return action.payload;

export const MarkerReducer = (state=[], action) => {
  console.log('MarkerReducer will handle refreshing markers on map')
  console.log(state, action)
  if (action.type === 'ENTRY_ADDED') {
    return count++;

  }
  return 'hi'
}

// export default {
//   SessionReducer,
//   MarkerReducer
// };

