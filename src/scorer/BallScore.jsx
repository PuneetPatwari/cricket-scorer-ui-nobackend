import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateOverDetails, updateScoreDetails, swapBatsman } from './actions';
import './Scorer.css';

class BallScore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      run: 0,
    };
  }

  setRun(e) {
    this.setState({ run: Number(e.target.value) });
  }
  render() {
    const rows = [];
    for (let i = 0; i < 8; i++) {
      rows.push(<button className={`run-button ${i === this.state.run ? 'bg-blue' : ''}`} key={i} value={i} onClick={event => this.setRun(event)}> {i} </button>,);
    }
    return (
      <div>
            <h3>This ball</h3>
            <br />
            {rows}
            <br />
            <button onClick={() => this.props.handleCurrentBall(this.state.run)}>Next ball</button>
          </div>
    );
  }
}

const mapDispatchProps = dispatch => ({
  handleCurrentBall: (run) => {
    dispatch(updateOverDetails(run));
    dispatch(updateScoreDetails(run));
    dispatch(swapBatsman(run));
  },
});

const connectedBallScore = connect(null, mapDispatchProps)(BallScore);
export default connectedBallScore;
