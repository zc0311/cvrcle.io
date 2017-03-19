import React, { Component } from 'react';

class AuthLock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: []
    };
    this.showLock = this.showLock.bind(this);
  }

  render() {
    return (
      <div>
        <a onClick={this.showLock}>Sign In</a>
      </div>
    );
  }

  showLock() {
    this.props.lock.show();
  }
}

export default AuthLock;