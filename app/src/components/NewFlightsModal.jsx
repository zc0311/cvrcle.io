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
      date: "",
      flightData: ""
    }
    // function binds
    this.close = this.close.bind(this);
    this.handleInputchange = this.handleInputchange.bind(this);
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

//${GOOGLE_API_KEY}
  findFlights() {
    var self = this;
    axios.post(`https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyCqKD3kCHGqspIcc9ma7xzuUPgtpmQgGKY`,
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
        "solutions": 4,
        "refundable": false
      }
    })
    .then(function(response) {
      console.log(response)
      //var parsedData = JSON.parse(response);
      self.setState({
        flightData: [parsedData.data.trips.tripOption["0"].saleTotal, parsedData.request.response]
        //response.request.response.trips.tripOption["0"].saleTotal
        //response.request.response.trips.tripOption["0"].slice["0"].segment["0"].flight.carrier
        //response.request.response.trips.tripOption["0"].slice["0"].segment["0"].flight.number
      })
    })
    .catch(function(error) {
      console.log(error);
    })
  }

  render() {
    return (
      <Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>Flight planning </Modal.Header>
        <Modal.Body>
          <form>
            <FormGroup>
              <ControlLabel>Where are you coming from? (3 character airport or city code)</ControlLabel>
              <FormControl
                name="from"
                onChange={this.handleInputchange}
                componentClass="input"
              />
              <ControlLabel>Where are you going? (airport or city code)</ControlLabel>
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
          <div>{this.state.flightData}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-primary" onClick={this.findFlights}>Find flights</Button>
          <Button onClick={this.close}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default NewFlightsModal;
