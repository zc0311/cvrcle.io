import React, { Component } from 'react';
import axios from "axios";
import { Button, Modal, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import GOOGLE_API_KEY from '../../../config.js';

class NewFlightsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true,
      from: "",
      to: "",
      date: ""
    }
    // function binds
    this.close = this.close.bind(this);
    //this.onChange = this.onChange.bind(this);
    this.handleInputchange = this.handleInputchange.bind(this);
    //this.addUserItinerary = this.addUserItinerary.bind(this);
    this.findFlights = this.findFlights.bind(this);
  }

  close() {
    this.setState({ showModal: false }, () => {
      this.props.resetFlag();
    });
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

  // addUserItinerary() {
  //   event.preventDefault()
  //   const itinData = {
  //     ownerID: this.props.oid.toString(),
  //     itinName: this.state.formTitle,
  //     isActive: 1,
  //     isPublic: 0,
  //   }
  //   axios.post('http://localhost:3000/itineraries', itinData)
  //     .then((res) => {
  //       itinData.created_at = res.data.created_at.substring(0,10)
  //       this.props.newItinAdded(itinData);
  //     })
  //     .catch(err => console.log(err))
  //   this.close();
  // }

//reformat to proper axios call
//may need to stringify input
  findFlights() {
    axios.post('https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyCqKD3kCHGqspIcc9ma7xzuUPgtpmQgGKY',
      {
        "request": {
        "slice": [
          {
            "origin": this.state.from,
            "destination": this.state.to,
            "date": this.state.date
          }
        ],
        "passengers": {
          "adultCount": 1,
          "infantInLapCount": 0,
          "infantInSeatCount": 0,
          "childCount": 0,
          "seniorCount": 0
        },
        "solutions": 5,
        "refundable": false
      }
    })
    .then(function(response) {
      //pop up a modal
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    })
    this.close();
  }

  render() {
    return (
      <Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>Flight planning</Modal.Header>
        <Modal.Body>
          <form>
            <FormGroup>
              <ControlLabel>Where are you coming from? (3 character airport or city code)</ControlLabel>
              <FormControl
                name="from"
                onChange={this.handleInputchange}
                componentClass="input"
              />
              <ControlLabel>Where are going? (3 character airport or city code)</ControlLabel>
              <FormControl
                name="to"
                onChange={this.handleInputchange}
                componentClass="input"
              />
              <ControlLabel>On what date are you leaving? (YYYY-MM-DD)</ControlLabel>
              <FormControl
                name="date"
                onChange={this.handleInputchange}
                componentClass="input"
              />
            </FormGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-primary" onClick={this.findFlights}>Find flights</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default NewFlightsModal;
