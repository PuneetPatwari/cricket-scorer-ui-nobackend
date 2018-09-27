import React from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import ScoreBoard from '../scorer/Scoreboard';
import BatsmenStats from './BatsmenStats';
import BowlerStats from './BowlerStats';

const GameDetails = () => (
  <Container>
    <div>
      <Row>
        <Col md="10" xs="4"><ScoreBoard /></Col>
        <Col style={{ textAlign: 'left' }}>
          <Link className="btn btn-primary" to="/scorer"> Back </Link>
        </Col>
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
