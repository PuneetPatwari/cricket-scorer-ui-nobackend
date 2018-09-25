import React from 'react';
import { Container } from 'reactstrap';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import Button from 'reactstrap/lib/Button';
import { connect } from 'react-redux';
import { goToGameDetails } from '../home/actions';
import ScoreBoard from './Scoreboard';
import CurrentOverStatus from './CurrentOverStatus';
import NextBallButton from './NextBallButton';


const Scorer = props => (
  <Container>
    <Row>
      <Col style={{ textAlign: 'left' }}>
        <ScoreBoard />
      </Col>
    </Row>
    <br />
    <br />
    <Row>
      <CurrentOverStatus />
    </Row>
    <Row>
      <Col style={{ textAlign: 'center' }}>
        <Button outline color="primary" onClick={props.gameDetails}>Game Details</Button>
      </Col>
    </Row>
    <br />
    <Row>
      <NextBallButton />
    </Row>
  </Container>

);

const mapDispatchToProps = dispatch => ({
  gameDetails: () => dispatch(goToGameDetails()),
});

export default connect(undefined, mapDispatchToProps)(Scorer);
