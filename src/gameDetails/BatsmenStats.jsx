import React, { Component } from 'react';
// import { Container, Col, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import { isStrikerOrNonStriker, calcBatsmenRuns, calcBatsmenBalls, calcBatsmen4sand6sBalls, calcStrikeRate } from './calculateBatsmenDetails';

class BatsmenStats extends Component {
  displayBatsmenDetails() {
    const rows = [];
    const batsmanList = this.props.batsmanList.filter(b => !b.yetToBat);
    for (let playersIndex = 0; playersIndex < batsmanList.length; playersIndex += 1) {
      const batsmen = {
        name: batsmanList[playersIndex].name,
        isStrikerOrNonStriker:
        isStrikerOrNonStriker(
          batsmanList[playersIndex].name,
          this.props.striker, this.props.nonStriker,
        ),
        runs: calcBatsmenRuns(batsmanList[playersIndex].name, this.props.overDetails),
        balls: calcBatsmenBalls(batsmanList[playersIndex].name, this.props.overDetails),
        foursAndSixs:
        calcBatsmen4sand6sBalls(batsmanList[playersIndex].name, this.props.overDetails),
      };
      rows.push((
        <tr>
          <th scope="row">{playersIndex + 1}</th>
          <td>{batsmen.isStrikerOrNonStriker ? <b>{batsmen.name}*</b> : batsmen.name}</td>
          <td>{batsmen.runs}</td>
          <td>{batsmen.balls}</td>
          <td>{batsmen.foursAndSixs.fours}</td>
          <td>{batsmen.foursAndSixs.sixs}</td>
          <td>{calcStrikeRate(batsmen.runs, batsmen.balls)}</td>
        </tr>));
    }
    return rows;
  }

  render() {
    return (
      <div>
        <h3>Batting Table</h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Batsman</th>
              <th>Runs</th>
              <th>Balls</th>
              <th>Fours</th>
              <th>Sixes</th>
              <th>Strike Rate</th>
            </tr>
          </thead>
          <tbody>
            {this.displayBatsmenDetails()}
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  overDetails: state.scoreBoardInformation.overDetails,
  striker: state.scoreBoardInformation.striker,
  nonStriker: state.scoreBoardInformation.nonStriker,
  batsmanList: state.scoreBoardInformation.team1.batsmanList,
});


const connectBatsmenStats = connect(mapStateToProps)(BatsmenStats);
export default connectBatsmenStats;

