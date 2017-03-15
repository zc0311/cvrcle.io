import React, { Component } from 'react';
import ReactDOM from "react-dom";
import axios from "axios";
import { Button, Modal, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class EntryModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: true,
      formTitle: "",
      formBody: ""
    }

    this.close = this.close.bind(this);
    this.handleInputchange = this.handleInputchange.bind(this);
    this.saveEdits = this.saveEdits.bind(this);
  }

  close() {
    this.setState({showModal: false}, () => {
      this.props.resetFlag();
    });
  }

  saveEdits() {
   this.props.updateEntry(this.state.formTitle, this.state.formBody);
   this.close();
  }

  handleInputchange(e) {
    const name = e.target.name;
    const val = e.target.value;
    
    const obj = {};
    obj[name] = val;
    this.setState((prevState, props) => {
      return obj;
    });
  }

  render() {
    return (
      <Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>Edit Activity</Modal.Header>
        <Modal.Body>
          <form>
            <FormGroup>
              <ControlLabel>Title</ControlLabel>
              <FormControl name="formTitle" onChange={this.handleInputchange} componentClass="input" />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Description</ControlLabel>
              <FormControl name="formBody" onChange={this.handleInputchange} componentClass="textarea" />
            </FormGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-primary" onClick={this.saveEdits}>Save</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default EntryModal;