import React from 'react';
import { connect } from 'react-redux';

const CurrentOverStatus = props => (
  <div>
    <h5>This Over: {props.currentOverDetails.map(x => ` ${x} `)}</h5>
    <br />
    <h5>Bowler : {props.currentBowler}</h5>
  </div>
);

const mapStateToProps = state => ({
  currentOverDetails: state.gameInformation.currentOverDetails,
  currentBowler: state.gameInformation.currentBowler,
});

export default connect(mapStateToProps)(CurrentOverStatus);
