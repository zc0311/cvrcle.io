import React, { Component } from 'react';
import ReactDOM from "react-dom";
import axios from "axios";
import { Container, Header, Card, Message, Segment, Icon, Image } from 'semantic-ui-react';

const SampleCard = (props) => (
  <Card
    header={props.header}
  />
);

export default SampleCard;