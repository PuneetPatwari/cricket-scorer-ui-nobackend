import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

const teamScore = (team, totalNumberOfOvers) => {
  if (team.isInningsCompleted === true) {
    return `${team.totalScore}/${team.wickets} in ${totalNumberOfOvers} overs`;
  }
  return `${team.totalScore}/${team.wickets} in ${team.overNumber}.${team.ballNumber}/${totalNumberOfOvers}`;
};

const ScoreBoard = props =>
  (
    <Container>
      <br />
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          <Row>
            <Col md="5" xs="4">
              <h3>  <b>Team 1</b> </h3>
            </Col>
            <Col sm="1" xs="2" />
            <Col style={{ textAlign: 'right' }}>
              <h3>  <b>{teamScore(props.team1, props.numberOfOvers)}</b> </h3>
            </Col>
          </Row>
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={{ size: 6, offset: 3 }} sm="12">
          <Row>
            <Col>
              <h5> Team 2 scored {} </h5>
            </Col>
            <Col style={{ textAlign: 'right' }}>
              <h5> {teamScore(props.team2, props.numberOfOvers)} </h5>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>);

const mapStateToProps = state => ({
  team1: state.scoreBoardInformation.team1,
  team2: state.scoreBoardInformation.team2,
  numberOfOvers: state.gameInformation.numberOfOvers,
});

const connectScoreBoard = connect(mapStateToProps)(ScoreBoard);

export default connectScoreBoard;
