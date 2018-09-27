import React from 'react';
import { Container } from 'reactstrap';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import RLink from 'react-router-dom/Link';
import { connect } from 'react-redux';
import ScoreBoard from './Scoreboard';
import CurrentOverStatus from './CurrentOverStatus';
import BallScore from './BallScore';
import CurrentPlayers from './CurrentPlayers';
import './Scorer.css';

const Scorer = () => (
  <div className="outermost-cotainer">
    <div className="inner-container">
      <Container>
        <Row>
          <Col>
            <ScoreBoard />
          </Col>
        </Row>
        <hr />
        <Row>
          <CurrentOverStatus />
        </Row>
        <CurrentPlayers />
        <hr />
        <Row>
          <BallScore />
        </Row>
        <br />
        <Row className="btn-game-details">
          <RLink className="btn btn-outline-info" to="/gameDetails">
            {' '}
            Game Details{' '}
          </RLink>
        </Row>
      </Container>
    </div>
  </div>
);

export default connect()(Scorer);
