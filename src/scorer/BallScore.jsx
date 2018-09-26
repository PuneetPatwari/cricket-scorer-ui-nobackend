import React, { Component } from 'react';
import { Container, Col, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { updateOverDetails, updateScoreDetails, swapBatsman } from './actions';
import './Scorer.css';

class BallScore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      run: -1,
    };
  }
  onNextBallClick(run) {
    this.props.handleCurrentBall(run);
    this.resetRun();
  }
  setRun(e) {
    this.setState({ run: Number(e.target.value) });
  }
  resetRun() {
    this.setState({ run: -1 });
  }
  render() {
    const rows = [];
    for (let i = 0; i < 8; i += 1) {
      rows.push(<button
        className={`run-button ${i === this.state.run ? 'bg-blue' : ''}`}
        key={i}
        value={i}
        onClick={event => this.setRun(event)}
      >
        {' '}
        {i}{' '}
                </button>);
    }
    return (
      <div>
        <h3>This ball</h3>
        <br />
        {rows}
        <br />
        <Container>
          <Col style={{ textAlign: 'center' }}>
            <Button color="primary" onClick={() => this.onNextBallClick(this.state.run)}>
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
  handleCurrentBall: (run) => {
    if (run === -1) {
      alert('Please select the run scored for the ball');
      return;
    }
    dispatch(updateOverDetails(run));
    dispatch(updateScoreDetails(run));
    dispatch(swapBatsman(run));
  },
});

const connectedBallScore = connect(
  null,
  mapDispatchProps,
)(BallScore);
export default connectedBallScore;
