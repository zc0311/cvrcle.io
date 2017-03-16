import React, { Component } from 'react';
import ReactDOM from "react-dom";
import axios from "axios";
import { Button, Modal, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, geocodeByPlaceId } from 'react-places-autocomplete';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//importing files
import GOOGLE_API_KEY from '../../../config.js';
import { selectFromLocationSearch } from '../actions/actions_index';

class EntryModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: true,
      formTitle: "",
      formBody: "",
      address: 'Hack Reactor, CA'
    }

    this.close = this.close.bind(this);
    this.handleInputchange = this.handleInputchange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  close() {
    this.setState({showModal: false}, () => {
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

  // functions for location search bar
  onChange = (address) => {
    this.setState({ address })
  }

  handleFormSubmit = (event) => {
    this.props.updateEntry(this.state.formTitle, this.state.formBody);
    event.preventDefault()
    // const { address } = this.state
    const { address } = { address: this.state.address }
    console.log('Submit button returns: ', {address});

    geocodeByAddress(address,  (err, { lat, lng }) => {
      if (err) { 
        console.log('Error', err) 
      } else {
        console.log(`The longitutde and latitude for ${address}`, { lat, lng })

        // connecting data to app state
        let location = { address, lat, lng };
        this.props.selectFromLocationSearch(location);
      }
    })
    this.close();
  }

  render() {
    const AutocompleteItem = ({ formattedSuggestion }) => (
      <div>
        <strong>{ formattedSuggestion.mainText }</strong>{' '}
        <small>{ formattedSuggestion.secondaryText }</small>
      </div>
    )

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
              <ControlLabel>Location</ControlLabel>
              <PlacesAutocomplete
                value={this.state.address}
                onChange={this.onChange}
                autocompleteItem={AutocompleteItem}
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Description</ControlLabel>
              <FormControl name="formBody" onChange={this.handleInputchange} componentClass="textarea" />
            </FormGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-primary" onClick={this.handleFormSubmit}>Save</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    locationInput: state.locationInput
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectFromLocationSearch }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EntryModal);

