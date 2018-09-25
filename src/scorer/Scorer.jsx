import React from 'react';
import { Container } from 'reactstrap';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import Button from 'reactstrap/lib/Button';
import { connect } from 'react-redux';
import { goToGameDetails } from '../home/actions';
import ScoreBoard from './Scoreboard';
import CurrentOverStatus from './CurrentOverStatus';

const Scorer = props => (
  <Container>
    <Row>
      <Col md="10" xs="4"><ScoreBoard /></Col>
      <Col style={{ textAlign: 'right' }}>
        <Button color="primary" onClick={props.gameDetails}>Game Details</Button>
      </Col>
    </Row>
    <br />
    <br />
    <Row>
      <CurrentOverStatus />
    </Row>
  </Container>
);

const mapDispatchToProps = dispatch => ({
  gameDetails: () => dispatch(goToGameDetails()),
});

export default connect(undefined, mapDispatchToProps)(Scorer);
