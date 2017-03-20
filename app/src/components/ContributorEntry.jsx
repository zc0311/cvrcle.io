import React, { Component } from 'react';
import ReactDOM from "react-dom";
import axios from "axios";
import { Card, Modal } from 'semantic-ui-react';
import EditModal from './EditModal.jsx';
import { connect } from 'react-redux'


class ContributorEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      id: "",
      title: "",
      body: "",
      date: "",
      address: "",
      name: "",
      author:""
    }
    console.log('contributor entry', this.props)
    this.toggleModal = this.toggleModal.bind(this);
    this.updateEntry = this.updateEntry.bind(this);
    this.updateState = this.updateState.bind(this);
    this.end = this.end.bind(this);
  }

  componentDidMount() {
    this.updateState();
    console.log(this.props.contributorID)
    if (this.props.isAuthenticated) {
      let fbID = this.props.profile.user_id
      let id = fbID.split('|')
      console.log('fbid', fbID);
      console.log('id', id[1]); // returns fbid number
      // this.setState({
      //   author: this.props.contributorID
      // })

      axios.get(`http://localhost:3000/users?id=${this.props.contributorID}`)
        .then((res) => {
          let tmp = res.data[0]["id"]
          console.log(tmp)
          this.setState({
            author: res.data[0]["firstName"] + ' ' + res.data[0]["lastName"]
          })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  updateState() {
    this.setState({
      id: this.props.id,
      title: this.props.title,
      body: this.props.body,
      date: this.props.date,
      address: this.props.address,
      contributorID: this.props.contributorID
    })
  }

  toggleModal() {
    this.setState({
      isEditing: !this.state.isEditing
    })
  }

  updateEntry(incomingData) {
    this.setState({
      title: incomingData.title,
      body: incomingData.body,
      address: incomingData.address,
      name: incomingData.name
    })
  }

  end(e) {
    e.stopPropagation()
  }

  render() {
    return (
      <div className="single-entry">
        {this.state.isEditing ? 
          <EditModal resetFlag={this.toggleModal} updateEntry={this.updateEntry} data={this.state}/> 
          : "" }
        <Card id={this.state.id} color="teal" className="entry" onClick={this.toggleModal}>
          <Card.Content>
            <span className="remove-btn glyphicon glyphicon-remove" id={this.state.id} onClick={(e) => {this.props.deleteEntry(this.state); this.end(e)}}></span>
            <Card.Header> 
              {this.state.title}
            </Card.Header>
            <Card.Meta>
              {this.state.address}
            </Card.Meta>
            <Card.Description>
              {this.state.body}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <span className="author">Contributed By: {this.state.author}</span>
            <span className="date">{this.state.date}</span>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

// export default ContributorEntry;
 
const mapStateToProps = (state) => {
  const { isAuthenticated, profile, error } = state.auth
  return {
    isAuthenticated,
    profile
  }
}

export default ContributorEntry = connect(mapStateToProps)(ContributorEntry)
