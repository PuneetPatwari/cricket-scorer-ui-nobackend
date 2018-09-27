import React from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import ScoreBoard from '../scorer/Scoreboard';
import BatsmenStats from './BatsmenStats';
import BowlerStats from './BowlerStats';
import './GameDetails.css';

const GameDetails = () => (
  <Container>
    <div>
      <Row className="heading">
        <div className="scoreboard"><ScoreBoard /></div>
        <div className="btn-back" style={{ textAlign: 'left' }}>
          <Link className="btn btn-primary" to="/scorer"> Back </Link>
        </div>
      </Row>
      <Row>
        <Col> <BatsmenStats /></Col>
      </Row>
      <br />
      <Row>
        <Col> <BowlerStats /></Col>
      </Row>
    </div>
  </Container>

);

export default GameDetails;
