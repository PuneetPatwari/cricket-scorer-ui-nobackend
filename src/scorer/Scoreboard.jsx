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
              <b>Team 1</b>
            </Col>
            <Col sm="1" xs="2" />
            <Col style={{ textAlign: 'right' }}>
              <b>{teamScore(props.team1, props.numberOfOvers)}</b>
            </Col>
          </Row>
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={{ size: 6, offset: 3 }} sm="12">
          <Row>
            <Col>
              Team 2 scored
            </Col>
            <Col style={{ textAlign: 'right' }}>
              {teamScore(props.team2, props.numberOfOvers)}
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
