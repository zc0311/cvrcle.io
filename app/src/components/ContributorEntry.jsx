import React, { Component } from 'react';
import ReactDOM from "react-dom";
import axios from "axios";
import { Card, Modal } from 'semantic-ui-react';
import EntryModal from './EntryModal.jsx';


class ContributorEntry extends Component {
  constructor() {
    super();

    this.state = {
      isEditing: false,
      title: "Go Climbing",
      desc: "The rocks are beautiful. You should climb! Good send!"
    }

    this.toggleModal = this.toggleModal.bind(this);
    this.updateEntry = this.updateEntry.bind(this);
  }

  toggleModal() {
    this.setState({
      isEditing: !this.state.isEditing
    })
  }

  updateEntry(title, desc) {
    this.setState({
      title: title,
      desc: desc
    })
  }

  render() {
    return (
      <div>
        {this.state.isEditing ? <EntryModal resetFlag={this.toggleModal} updateEntry={this.updateEntry} /> : ""}
        <Card color="teal" className="entry" onClick={this.toggleModal}>
          <Card.Content>
            <Card.Header> 
              {this.state.title}
            </Card.Header>
            <Card.Description>
              {this.state.desc}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <span className="author">Andrew Yi</span>
            <span className="date">2/2/2017</span>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default ContributorEntry;