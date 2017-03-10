import React, { Component } from 'react';
import { Divider, Container, Form, Button, Checkbox, Input, Radio, Select, TextArea } from 'semantic-ui-react';
import axios from "axios";

class PokeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  clearForm() {
    this.setState({ value: '' })
    //LOL, value doesn't do anything here. Wrong prop.'
  }

  handleChange(name, e) {
    var change = {};
    change[name] = e.target.value;
    this.setState(change);
  }

  pokePost(e) {
    self = this;
    console.log(this.state);
    e.preventDefault();
    axios.post('http://localhost:3000/pokemon', {
      number: self.state.number,
      name: self.state.name,
      types: [self.state.types],
      imageUrl: self.state.imageUrl
    }).then((response) => {
      this.clearForm();
    }).catch(function (error) {
      console.log(error)
    })
  }


  render() {

    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Input control={Input} label='Number' placeholder='Number' value={this.state.number} onChange={this.handleChange.bind(this, 'number')} />
          <Form.Input control={Input} label='Name' placeholder='name' value={this.state.name} onChange={this.handleChange.bind(this, 'name')} />
          <Form.Input control={Input} label='Types' placeholder='Types' value={this.state.types} onChange={this.handleChange.bind(this, 'types')} />
          <Form.Input control={Input} label='ImageUrl' placeholder='ImageUrl' value={this.state.imageUrl} onChange={this.handleChange.bind(this, 'imageUrl')} />
        </Form.Group>
        <Form.Button type="submit" onClick={this.pokePost.bind(this)}>Submit</Form.Button>
      </Form>
    )
  }
}

export default PokeForm