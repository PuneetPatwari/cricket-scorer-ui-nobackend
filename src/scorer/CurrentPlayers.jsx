import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Scorer.css';

let leftCellStyle = 'CurrentBatsman';
let rightCellStyle = 'NonStrikeBatsman';

class CurrentPlayers extends Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.striker !== nextProps.striker) {
      leftCellStyle = 'NonStrikeBatsman';
      rightCellStyle = 'CurrentBatsman';
    } else {
      leftCellStyle = 'CurrentBatsman';
      rightCellStyle = 'NonStrikeBatsman';
    }
    return (this.props.striker !== nextProps.striker && nextProps.striker);
  }

  render() {
    return (
      <div className="BatsmanDiv">
        <div className={leftCellStyle}>
          {leftCellStyle === 'CurrentBatsman' ? this.props.striker : this.props.nonStriker}
        </div>
        <div className={rightCellStyle}>
          {rightCellStyle === 'CurrentBatsman' ? this.props.striker : this.props.nonStriker}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  striker: state.scoreBoardInformation.striker,
  nonStriker: state.scoreBoardInformation.nonStriker,
});

export default connect(mapStateToProps)(CurrentPlayers);
