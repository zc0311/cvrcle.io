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

export const TestSession = (session) => {
  return {
    type: "SAVE_SESSION",
    payload: session
  }
}

