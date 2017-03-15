//importing libraries
import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, geocodeByPlaceId } from 'react-places-autocomplete';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

//importing files
import GOOGLE_API_KEY from '../../../config.js';
import { selectFromLocationSearch } from '../actions/actions_index';

class LocationSearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      address: 'Hack Reactor, CA' 
    }
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    const { address } = this.state
    console.log('Submit button returns: ', {address});

    geocodeByAddress(address,  (err, { lat, lng }) => {
      if (err) { 
        console.log('Error', err) 
      } else {
        console.log(`The longitutde and latitude for ${address}`, { lat, lng })

        // connecting data to app state
        let location = { address, lat, lng };
        this.props.selectFromLocationSearch(location);

        // const key = GOOGLE_API_KEY
        // let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${key}`
        
        // //axios call to google maps api with lat and lng
        // axios
        //   .get(url)
        //   .then((response) => {
        //     console.log('Response from Axios call to Maps API is: ', response.data)
        //   })
        //   .catch((err) => {
        //     if (err) {console.log(err)}
        //   })
      }
    })
  }

  onChange = (address) => {
    this.setState({ address })
  }

  render() {
    const AutocompleteItem = ({ formattedSuggestion }) => (
      <div>
        <strong>{ formattedSuggestion.mainText }</strong>{' '}
        <small>{ formattedSuggestion.secondaryText }</small>
      </div>
    )

    return (
      <form onSubmit={this.handleFormSubmit}>
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.onChange}
          autocompleteItem={AutocompleteItem}
        />
        <button 
          type="submit"
        >Submit</button>
      </form>
    )
  }
}

// export default LocationSearchBar;

const mapStateToProps = (state) => {
  return {
    locationInput: state.locationInput
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectFromLocationSearch }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationSearchBar);

