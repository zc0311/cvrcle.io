import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import EntryModal from './EntryModal.jsx';
import { Button }  from 'react-bootstrap';

class AddNewEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    }
    this.toggleModal = this.toggleModal.bind(this);
    this.updateEntry = this.updateEntry.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    this.updateState();
  }

  updateState() {
    this.setState({
      id: this.props.id,
      title: this.props.title,
      author: this.props.author,
      body: this.props.body,
      date: this.props.date,
      location: this.props.location
    })
  }

  toggleModal() {
    this.setState({
      isClicked: !this.state.isClicked
    })
  }

  updateEntry(title, body) {
    this.setState({
      title: title,
      body: body
    })
  }

  render() {
    return (
      <div>
        {this.state.isClicked ? 
          <EntryModal 
            resetFlag={this.toggleModal} 
            updateEntry={this.updateEntry}
            newEntryAdded={this.props.newEntryAdded}
          /> : ""}
        <Button 
          id={this.state.id} 
          bsStyle="default" 
          bsSize="large" 
          className="entry" 
          onClick={this.toggleModal}>Add New Entry
        </Button>
      </div>
    );
  }
}

export default AddNewEntry;

