import React from 'react';
import { Container } from 'reactstrap';
import Button from 'reactstrap/lib/Button';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import { connect } from 'react-redux';
import { goToScorerPage } from '../home/actions';
import ScoreBoard from '../scorer/Scoreboard';

const GameDetails = props => (
  <Container>
    <div>
      <Row>
        <Col md="10" xs="4"><ScoreBoard /></Col>
        <Col style={{ textAlign: 'left' }}>
          <Button color="primary" onClick={props.scorer}>Back</Button>
        </Col>
      </Row>
    </div>
  </Container>

);

const mapDispatchToProps = dispatch => ({
  scorer: () => dispatch(goToScorerPage()),
});

export default connect(undefined, mapDispatchToProps)(GameDetails);
