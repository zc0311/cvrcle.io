import React, { Component } from 'react';
import axios from "axios";
import { Button, Modal, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import GOOGLE_API_KEY from '../../../config.js';
import { Segment } from 'semantic-ui-react'

class NewFlightsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true,
      from: "",
      to: "",
      date: "",
      flightData: [],
      fetching: "Waiting to fetch flight data."
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
    this.setState({
      fetching: "Flight data is fetching..."
    })
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
      var parsedData = JSON.parse(response.request.response);
      self.setState({
        fetching: "Complete!",
        flightData: 
        ["Option 1 - price: " + response.data.trips.tripOption["0"].saleTotal + " - flight info: " + parsedData.trips.tripOption[0].slice[0].segment[0].flight.carrier + " " + parsedData.trips.tripOption[0].slice[0].segment[0].flight.number,
        "Option 2 - price: " + response.data.trips.tripOption["1"].saleTotal + " - flight info: " + parsedData.trips.tripOption[1].slice[0].segment[0].flight.carrier + " " + parsedData.trips.tripOption[0].slice[0].segment[0].flight.number,
        "Option 3 - price: " + response.data.trips.tripOption["2"].saleTotal + " - flight info: " + parsedData.trips.tripOption[2].slice[0].segment[0].flight.carrier + " " + parsedData.trips.tripOption[0].slice[0].segment[0].flight.number,
        "Option 4 - price: " + response.data.trips.tripOption["3"].saleTotal + " - flight info: " + parsedData.trips.tripOption[3].slice[0].segment[0].flight.carrier + " " + parsedData.trips.tripOption[0].slice[0].segment[0].flight.number]
      })
      console.log(self.state.flightData);
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
          <div>
            <Segment.Group>
              {this.state.flightData.map((item) => {
                return (
                  <div>
                    <Segment>
                    {item}
                    </Segment>
                  </div>
                )
              })}
            </Segment.Group>
            {this.state.fetching}
          </div>
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
