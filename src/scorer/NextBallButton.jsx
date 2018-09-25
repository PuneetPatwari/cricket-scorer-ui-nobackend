import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

const NextBallButton = props => {
    <div>
    <Button outline color="primary">primary</Button>{' '}
    </div>
}

const mapStateToProps = state => ({
    team1: state.scoreBoardInformation.team1,
    team2: state.scoreBoardInformation.team2,
  });
  
  const connectScoreBoard = connect(mapStateToProps)(NextBallButton);
  
  export default connectScoreBoard;