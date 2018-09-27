import React from 'react';
import { Container } from 'reactstrap';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import RLink from 'react-router-dom/Link';
import { connect } from 'react-redux';
import ScoreBoard from './Scoreboard';
import CurrentOverStatus from './CurrentOverStatus';
import BallScore from './BallScore';

const Scorer = () => (
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
    <br />
    <br />
    <br />
    <Row>
      <BallScore />
    </Row>
    <Row>
      <Col style={{ textAlign: 'center' }}>
        <RLink className="btn btn-outline-info" to="/gameDetails">
          {' '}
        Game Details{' '}
        </RLink>
      </Col>
    </Row>
  </Container>
);


export default connect()(Scorer);
