// add post
// export const addEntry = (entry) => {
//   return {
//     type: 'ADD_ENTRY',
//     payload: post
//   }
// }

// // delete post
// export const deleteEntry = (entry) => {
//   return {
//     type: 'DELETE_ENTRY'
//   }
// }

//saving user session

export const TestSession = (session) => {
  return {
    type: "SAVE_SESSION",
    payload: session
  }
}

export const updateMarkers = (count) => {
  return {
    type: "ENTRY_ADDED",
    count
  }
}

