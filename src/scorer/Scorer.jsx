import React from 'react';
import { Container } from 'reactstrap';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import Button from 'reactstrap/lib/Button';
import RLink from 'react-router-dom/Link';
import { connect } from 'react-redux';
import { showBatsManListAction } from '../home/actions';
import ScoreBoard from './Scoreboard';
import CurrentOverStatus from './CurrentOverStatus';
import BallScore from './BallScore';

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
    <br />
    <Row>
      <Button color="primary" onClick={props.showBatsmanListAction}>
        {' '}
        Out{' '}
      </Button>
    </Row>
    <br />
    <Row>
      <Col style={{ textAlign: 'center' }}>
        <RLink className="btn btn-primary" to="/gameDetails">
          {' '}
          Game Details{' '}
        </RLink>
      </Col>
    </Row>
    <br />
    <Row>
      <BallScore />
    </Row>
  </Container>
);

const mapDispatchToProps = dispatch => ({
  showBatsmanListAction: () => dispatch(showBatsManListAction()),
});

const mapStateToProps = state => ({
  showBatsmanList: state.showBatsmanList,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Scorer);
