import React from 'react';
import { connect } from 'react-redux';
import { Container, Col } from 'reactstrap';

const CurrentOverStatus = props => (

  <Container>
    <Col style={{ textAlign: 'left' }}>
      <h5>This Over:  {props.currentOverDetails.map(x => ` ${x} `)}</h5>
      <br />
      <h5>Bowler : {props.currentBowler}</h5>
    </Col>
  </Container>


);

const mapStateToProps = state => ({
  currentOverDetails: state.gameInformation.currentOverDetails,
  currentBowler: state.gameInformation.currentBowler,
});

export default connect(mapStateToProps)(CurrentOverStatus);
