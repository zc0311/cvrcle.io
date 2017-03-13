import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, geocodeByPlaceId } from 'react-places-autocomplete';

class LocationSearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { address: 'Hack Reactor, CA' }
    this.onChange = (address) => this.setState({ address })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    const { address } = this.state

    geocodeByAddress(address,  (err, { lat, lng }) => {
      if (err) { console.log('Oh no!', err) }

      console.log(`Yay! got latitude and longitude for ${address}`, { lat, lng })
    })
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
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default LocationSearchBar;
