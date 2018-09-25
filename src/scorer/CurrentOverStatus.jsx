import React from "react";
import { connect } from "react-redux";

export class CurrentOverStatus extends React.Component {

  render() {
    return (
      <div>
        <label >This Over: {this.props.currentOverDetails.map(x => " "+x+" ")}</label><br></br>
        <label>Bowler :  {this.props.currentBowler}</label>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    currentOverDetails : state.gameInformation.currentOverDetails,
    currentBowler : state.gameInformation.currentBowler
  }
}

export default connect(mapStateToProps)(CurrentOverStatus);
