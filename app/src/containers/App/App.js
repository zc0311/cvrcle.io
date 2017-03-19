// this time for realises

//import axios from "axios";
//import { Card, Image } from 'semantic-ui-react';
//import AuthLock from './components/AuthLock.jsx'
// import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router'
// import Home from './views/home.js';
// import Login from './views/login.js'
// import Itinerary from './views/itinerary.js';
// import Logout from './views/logout.js';
// import { Provider } from 'react-redux';
// import store from './store.js';
// import AuthService from './utils/AuthService'
// const auth = new AuthService('qpfelAKW1EAzyb3RI3pk46SD0deXrJhE', 'cvrcle.auth0.com');

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return(
//       // <Provider store={store}>
//         <div>
//           <Image className="cvrcle-logo" src='../cvrcle.png' />
//           <div className="text-center">
//             Hi Regina.
//           </div>
//         </div>
//       // </Provider>
//     );
//   }
// }

// export default App;
import React from 'react';
import { PropTypes } from 'react';
import { Router } from 'react-router';

let that = this;

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      history: '',
      routes: '',
      router: '',
    }
  }

  getcontent() {
    console.log('this fucking props:', this.propTypes.history.toString())
    return (
      <Router
        routes={this.state.routes}
        history={this.state.history} />
    )
  }

  render () {
     return (
       <div style={{ height: '100%' }}>
         {this.content}
       </div>
     )
   }
}

export default App;