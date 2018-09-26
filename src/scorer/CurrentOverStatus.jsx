import React from 'react';
import { connect } from 'react-redux';
import { Container, Col } from 'reactstrap';

const CurrentOverStatus = props => (
  <Container>
    <Col style={{ textAlign: 'left' }}>
      <h5>
        This Over Status:
        {!(props.currentOver === 0 && props.currentBall === 0)}
        {props.currentOverDetails[
          props.currentBall === 0 ? props.currentOver - 1 : props.currentOver
        ].ballDetails.map(x => ` ${x.runs}${x.extra} |`)}
      </h5>
      <br />
      <h5>Bowler : {props.currentBowler}</h5>
    </Col>
  </Container>
);

const mapStateToProps = state => ({
  currentOverDetails: state.scoreBoardInformation.overDetails,
  currentOver: state.scoreBoardInformation.team1.overNumber,
  currentBall: state.scoreBoardInformation.team1.ballNumber,
  currentBowler: state.scoreBoardInformation.currentBowler,
});

export default connect(mapStateToProps)(CurrentOverStatus);
