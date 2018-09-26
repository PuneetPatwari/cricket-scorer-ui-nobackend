import React, { Component } from 'react';
import { Container, Col, Button, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { updateOverDetails, updateScoreDetails, swapBatsman } from './actions';
import './Scorer.css';

class BallScore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      run: -1,
      extra: '',
    };
  }
  onNextBallClick(run, extra) {
    this.props.handleCurrentBall(run, extra);
    this.resetRun();
    this.resetExtra();
  }
  setRun(e) {
    this.setState({ run: Number(e.target.value) });
  }
  setExtra(e) {
    this.setState({ extra: e.target.value });
  }
  resetExtra() {
    this.setState({ extra: '' });
  }
  resetRun() {
    this.setState({ run: -1 });
  }
  render() {
    const rows = [];
    for (let i = 0; i < 8; i += 1) {
      rows.push(<Button
        className={`run-button ${i === this.state.run ? 'bg-blue' : ''}`}
        key={i}
        value={i}
        onClick={event => this.setRun(event)}
        color="primary"
      >
        {'  '}
        {i}{'  '}
      </Button>);
    }
    return (
      <div>
        <Container>
          <Row>
            <Col style={{ textAlign: 'left' }} >
              <h5> Runs: </h5>
              {rows}
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <Container>
          <Row>
            <Col style={{ textAlign: 'left' }} >
              <h5> Extras: </h5>
            </Col>
          </Row>
        </Container>
        <Container>
          <Button
            color="info"
            onClick={event => this.setExtra(event)}
            className="run-button"
            value="W"
          >
            W
          </Button>
          <Button
            color="info"
            onClick={event => this.setExtra(event)}
            className="run-button"
            value="N"
          >
            N
          </Button>
          <Button
            color="info"
            onClick={event => this.setExtra(event)}
            className="run-button"
            value="B"
          >
            B
          </Button>
          <Button
            color="info"
            onClick={event => this.setExtra(event)}
            className="run-button"
            value="LB"
          >
            LB
          </Button>
        </Container>
        <br />
        <Container>
          <Col style={{ textAlign: 'center' }}>
            <Button color="danger">
              {'  '}
              Out{'  '}
            </Button>
          </Col>
        </Container>
        <br />
        <Container>
          <Col style={{ textAlign: 'center' }}>
            <Button
              outline
              color="primary"
              onClick={() => this.onNextBallClick(this.state.run, this.state.extra)}
            >
              Next Ball
            </Button>
          </Col>
        </Container>
        {/* <button onClick={() => this.onNextBallClick(this.state.run)}>Next ball</button> */}
      </div>
    );
  }
}

const mapDispatchProps = dispatch => ({
  handleCurrentBall: (run, extra) => {
    if (run === -1) {
      alert('Please select the run scored for the ball');
      return;
    }
    dispatch(updateOverDetails(run, extra));
    dispatch(updateScoreDetails(run, extra));
    dispatch(swapBatsman(run));
  },
});

const connectedBallScore = connect(
  null,
  mapDispatchProps,
)(BallScore);
export default connectedBallScore;
