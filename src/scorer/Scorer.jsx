import React from 'react';
import { Container } from 'reactstrap';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import Button from 'reactstrap/lib/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { showBatsManListAction } from '../home/actions';
import ScoreBoard from './Scoreboard';
import CurrentOverStatus from './CurrentOverStatus';
import NextBallButton from './NextBallButton';

const Scorer = props => (
  <Container>
    <Row>
      <Col style={{ textAlign: 'left' }} md="10" xs="auto">
        <ScoreBoard />
      </Col>
      <Col style={{ textAlign: 'right' }}>
        <Link className="btn btn-primary" to="/gameDetails"> Game Details </Link>
      </Col>
    </Row>
    <br />
    <br />
    <Row>
      <CurrentOverStatus />
    </Row>
    <br />
    <Row>
      <Button color="primary" onClick={props.showBatsmanListAction}> Out </Button>
    </Row>
    <br />
    <Row>
      <NextBallButton />
    </Row>
  </Container >
);

const mapDispatchToProps = dispatch => ({
  showBatsmanListAction: () => dispatch(showBatsManListAction()),
});

const mapStateToProps = state => ({
  showBatsmanList: state.showBatsmanList,
});

export default connect(mapStateToProps, mapDispatchToProps)(Scorer);
