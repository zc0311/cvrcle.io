import React, { Component } from 'react';
import ReactDOM from "react-dom";
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
      formAuthor: "",
      formBody: "",
      address: 'Search Places...'
    }
    // function binds
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
    event.preventDefault()
    const { address } = { address: this.state.address }

    geocodeByAddress(address,  (err, { lat, lng }) => {
      if (err) { console.log('Error', err) } 
        console.log(`The longitutde and latitude for ${address}`, { lat, lng })
      
      const key = process.env.GOOGLE_API_KEY
      let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${key}`
      
      //axios call to google maps api with lat and lng
      axios
        .get(url)
        .then((response) => {
          console.log('address is: ', response.data.results[0].formatted_address)
          // formatting object that gets sent to the database + gets updated to app state
          let locationToDatabase = { 
            title: this.state.formTitle,
            body: this.state.formBody,
            // lat: lat,
            // lng: lng,
            name: address,
            address: response.data.results[0].formatted_address,
            contributorID: '10158329375645263',
            itinID: 1
          };

          let locationToForm={
            title: this.state.formTitle,
            body: this.state.formBody,
            author: this.state.formAuthor,
            lat: lat,
            lng: lng,
            name: address,
            address: response.data.results[0].formatted_address,
            contributorID: '10158329375645263',
            itinID: 1
          }
          
          // this.props.updateEntry(location);

          // TODO: Find contributor name from contributorID in join table
          console.log('location', location);
          axios
            .post('http://localhost:3000/entries', location)
            .then((response) => {
              console.log(response)
            })
            .catch((err) => {
              if (err) {console.log(err)}
            })
        })
        .catch((err) => {
          if (err) {console.log(err)}
        })
      // this.props.selectFromLocationSearch(location);
    })
    this.close();
  }

  render() {
    // cssClasses and myStyles is req'd for styling location search bar
    const cssClasses = {
      root: 'form-group',
      input: 'form-control',
      autocompleteContainer: 'my-autocomplete-container'
    }
    const myStyles = {
      input: { width: '100%' },
      autocompleteContainer: { backgroundColor: 'green' },
      autocompleteItem: { color: 'black' },
      autocompleteItemActive: { color: 'blue' }
    }

    const AutocompleteItem = ({ formattedSuggestion }) => (
      <div>
        <strong>{ formattedSuggestion.mainText }</strong>{' '}
        <small>{ formattedSuggestion.secondaryText }</small>
      </div>
    )

    return (
      <Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>Add New Activity</Modal.Header>
        <Modal.Body>
          <form>
            <FormGroup>
              <ControlLabel>Title</ControlLabel>
              <FormControl name="formTitle" onChange={this.handleInputchange} componentClass="input" defaultValue={this.state.formTitle}/>
            </FormGroup>
            <FormGroup>
              <ControlLabel>Author</ControlLabel>
              <FormControl name="formAuthor" onChange={this.handleInputchange} componentClass="input" />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Location</ControlLabel>
              <PlacesAutocomplete
                value={this.state.address}
                onChange={this.onChange}
                autocompleteItem={AutocompleteItem}
                classNames={cssClasses}
                styles={myStyles}
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

