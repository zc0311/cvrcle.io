import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import { NavBarContainer } from '../../containers'
import { Parallax, Background } from 'react-parallax';
import { Col, Grid, Row } from 'react-bootstrap';

class Landing extends React.Component {
  constructor(props) {
    super(props)
    this.props.checkLogin() // check is Auth0 lock is authenticating after login callback

    // let fbID = this.props.profile.user_id
    // let id = fbID.split('|')
    // console.log('fbid', fbID);
    // console.log('id', id[1]);
  }

  render() {
    return (
      <div style={{"marginTop": '29px'}}>
        <Parallax className="parallax-bg-image" bgImage="./images/25806094933_c023fe0036_h.jpg" strength={600}>
          <div style={
            {
              width: 800,
              height: 300
            }}>
            <div className="parallax-content1">
              <h3 style={{
                fontWeight: 300,
                fontSize: 50
              }}>Where's your next adventure?</h3>
            </div>
          </div>
        </Parallax>
        <div className="container" style={{
          marginTop: 40,
          marginBottom: 80
        }}>
          <div style={
            {
              textAlign: 'center',
              marginTop: 2,
              marginBottom: 40
            }}>
            <h3>With cvrcle, allow the people who know you best help you plan your getaway. </h3>
          </div>
          <div style={
            {
              textAlign: 'center',
              marginTop: 2,
              marginBottom: 40
            }}>
            <h4>How it works:</h4>
          </div>
          <Grid>
            <Row>
              <Col xs={6} md={4}>
                <div style={
                  {
                    textAlign: 'center',
                  }}>
                  <h3 style={{
                    fontWeight: 200
                  }}>Step 1</h3>
                  <h4>Invite people you trust to share their insider knowledge and collaborate on your itinerary</h4>
                </div>
              </Col>
              <Col xs={6} md={4}>
                <div style={
                  {
                    textAlign: 'center'
                  }}>
                  <h3 style={{
                    fontWeight: 200
                  }}>Step 2</h3>
                  <h4>From the Eiffel Tower to the Great Wall of China, search for locations all over the world.</h4>
                </div>
              </Col>
              <Col xsHidden md={4}>
                <div style={
                  {
                    textAlign: 'center'
                  }}>
                  <h3 style={{
                    fontWeight: 200
                  }}>Step 3</h3>
                  <h4>Pack your bags and enjoy!</h4>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
        <Parallax className="parallax-bg-image2" bgImage="./images/21689775811_446ed525c0_k.jpg" strength={600}>
          <Col xs={6} md={4}>
            <div style={{
              width: 600,
              height: 500,
            }}></div>
          </Col>
        </Parallax>
      </div>
    )
  }
}

Landing.propTypes = {
  isAuthenticated: React.PropTypes.bool.isRequired,
  onLoginClick: React.PropTypes.func.isRequired,
  onLogoutClick: React.PropTypes.func.isRequired,
  checkLogin: React.PropTypes.func.isRequired
}

export default Landing
