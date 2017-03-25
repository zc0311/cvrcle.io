import React, { Component } from 'react';
import axios from "axios";
import { Button, Modal, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
//import GOOGLE_API_KEY from '../../../config.js';

class FlightResultsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true,
      responseData: 'test response data'
    }
    // function binds
    this.close = this.close.bind(this);
  }

  close() {
    this.setState({ showModal: false }, () => {
      this.props.resetFlag();
    });
  }

  render() {
    return (
      <Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>Flight possibilities</Modal.Header>
        <Modal.Body>
          responseData
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default FlightResultsModal;
