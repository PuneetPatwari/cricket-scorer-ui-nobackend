import React from 'react';
import { connect } from 'react-redux';
import './Scorer.css';

const CurrentPlayers = props => (
  <div className="BatsmanDiv">
    <div className="CurrentBatsman">
      {!props.selectedBatsman ? props.striker : props.selectedBatsman}
    </div>
    <div className="NonStrikeBatsman">
      {props.nonStriker}
    </div>
  </div>
);

const mapStateToProps = state => ({
  striker: state.scoreBoardInformation.striker,
  nonStriker: state.scoreBoardInformation.nonStriker,
  selectedBatsman: state.scoreBoardInformation.selectedBatsman,
});

export default connect(mapStateToProps)(CurrentPlayers);
