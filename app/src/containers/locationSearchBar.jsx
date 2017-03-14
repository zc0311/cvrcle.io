import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, geocodeByPlaceId } from 'react-places-autocomplete';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { someString, selectBook } from '../actions/index';

// live location search bar that sets locationInput app state 
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
    console.log({address});

    geocodeByAddress(address,  (err, { lat, lng }) => {
      if (err) { 
        console.log('Error', err) 
      } else {
        // let locationCoordinates = { lat, lng };
        // selectFromLocationSearch(locationCoordinates);
        console.log(`The longitutde and latitude for ${address}`, { lat, lng })
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

export default LocationSearchBar;

// const mapStateToProps = (state) => {
//   return {
//     locationInput: state.locationInput
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     selectFromLocationSearch: selectFromLocationSearch
//   }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(LocationSearchBar);

